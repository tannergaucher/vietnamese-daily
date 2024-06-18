import * as fs from "fs";
import * as path from "path";

import {
  CloudEventData,
  FetchConversationDialogsForCreatingAudioEvent,
  FetchDialogWordsForCreatingEvent,
  CreateConversationImageEvent,
  CreateConversationQuizEvent,
  CreateDialogEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";
import {
  createLanguageModel,
  createJsonTranslator,
  TypeChatLanguageModel,
} from "typechat";

import { CreateDialogResponse } from "./dialogSchema";
import { PrismaClient } from "./generated";

functions.cloudEvent(
  "createDialog",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { situationId } = parseCloudEventData<CreateDialogEvent>({
      cloudEvent,
    });

    const model = createLanguageModel(process.env);

    const prisma = new PrismaClient();

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFile: process.env.SERVICE_ACCOUNT,
    });

    return await createDialog({
      situationId,
      model,
      prisma,
      pubsub,
    });
  }
);

type CreateDialogParams = CreateDialogEvent & {
  model: TypeChatLanguageModel;
  prisma: PrismaClient;
  pubsub: PubSub;
};

export async function createDialog({
  situationId,
  model,
  prisma,
  pubsub,
}: CreateDialogParams) {
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

  if (response.success && response.data.conversation.dialog.length > 0) {
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

    const fetchConversationDialogsForCreatingAudioJson: FetchConversationDialogsForCreatingAudioEvent =
      {
        conversationId: conversation.id,
      };

    pubsub
      .topic("fetch-conversation-dialogs-for-creating-audio")
      .publishMessage({
        json: fetchConversationDialogsForCreatingAudioJson,
      });

    const conversationImageJson: CreateConversationImageEvent = {
      conversationSituationId: situationId,
    };

    pubsub.topic("create-conversation-image").publishMessage({
      json: conversationImageJson,
    });

    const CreateConversationQuizJson: CreateConversationQuizEvent = {
      conversationId: conversation.id,
    };

    pubsub.topic("create-conversation-quiz").publishMessage({
      json: CreateConversationQuizJson,
    });

    for (const dialog of conversation.dialog) {
      const json: FetchDialogWordsForCreatingEvent = {
        dialogId: dialog.id,
      };

      {
        pubsub.topic("fetch-dialog-words-for-creating").publishMessage({
          json,
        });
      }
    }

    return {
      message: "Conversation dialog created",
      conversation,
    };
  }

  await prisma.conversationSituation.delete({
    where: {
      id: situationId,
    },
  });

  pubsub.topic("create-conversation-situation").publishMessage({
    json: {},
  });

  pubsub.topic("fetch-situation-for-creating-dialog").publishMessage({
    json: {},
  });

  throw new Error("Failed to generate conversation dialog");
}
