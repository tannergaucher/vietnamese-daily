import * as fs from "fs";
import * as path from "path";
import { PubSub } from "@google-cloud/pubsub";
import * as functions from "@google-cloud/functions-framework";
import {
  createLanguageModel,
  createJsonTranslator,
  TypeChatLanguageModel,
} from "typechat";

import { CreateDialogResponse } from "./dialogSchema";
import { PrismaClient } from "./generated";

interface CloudEventData {
  message: {
    data: string;
  };
}

functions.cloudEvent(
  "createDialog",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    if (!cloudEvent.data?.message?.data) {
      throw new Error("Message data is required");
    }

    const messageData = Buffer.from(
      cloudEvent.data.message.data,
      "base64"
    ).toString("utf8");

    const parsedData = JSON.parse(messageData);

    const model = createLanguageModel(process.env);

    const prisma = new PrismaClient();

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    const response = await createDialog({
      situationId: parsedData.situationId,
      model,
      prisma,
      pubsub,
    });

    return response;
  }
);

export async function createDialog({
  situationId,
  model,
  prisma,
  pubsub,
}: {
  situationId: string;
  model: TypeChatLanguageModel;
  prisma: PrismaClient;
  pubsub: PubSub;
}) {
  const schema = fs.readFileSync(
    path.join(__dirname, "dialogSchema.ts"),
    "utf8"
  );

  const translator = createJsonTranslator<CreateDialogResponse>(
    model,
    schema,
    "CreateDialogResponse"
  );

  const conversationSituation =
    await prisma.conversationSituation.findUniqueOrThrow({
      where: {
        id: situationId,
      },
      select: {
        text: true,
      },
    });

  const response = await translator.translate(
    `Help me practice conversational Vietnamese. The context of the practice conversation is ${conversationSituation.text} Please do include things like dates, times, and prices if it makes sense in the context of the dialog so we can practice useful phrases like numbers and counting.`
  );

  if (response.success) {
    const conversation = await prisma.conversation.create({
      data: {
        title: response.data.conversation.title,
        situation: {
          connect: {
            id: situationId,
          },
        },
        dialog: {
          create: response.data.conversation.dialog,
        },
      },
      include: {
        dialog: true,
      },
    });

    pubsub
      .topic("fetch-conversation-dialogs-for-creating-audio")
      .publishMessage({
        json: {
          conversationId: conversation.id,
        },
      });

    for (const dialog of conversation.dialog) {
      {
        pubsub.topic("fetch-dialog-words-for-creating").publishMessage({
          json: {
            dialogId: dialog.id,
          },
        });
      }
    }

    return {
      message: "Conversation dialog created",
      conversation,
    };
  }

  throw new Error("Failed to generate conversation dialog");
}
