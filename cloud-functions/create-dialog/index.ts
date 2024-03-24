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

interface RequestBody {
  dialogSituation: string;
}

functions.http("createDialog", async (req, res) => {
  const { dialogSituation }: RequestBody = req.body;

  if (!dialogSituation) {
    res.status(400).send("dialogSituation is required");
    return;
  }

  const model = createLanguageModel(process.env);

  const prisma = new PrismaClient();

  const pubsub = new PubSub({
    projectId: "daily-vietnamese",
    keyFilename: "./service-account.json",
  });

  const response = await createDialog({
    dialogSituation,
    model,
    prisma,
    pubsub,
  });

  res.status(200).send(response);
});

export async function createDialog({
  dialogSituation,
  model,
  prisma,
  pubsub,
}: {
  dialogSituation: string;
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

  const response = await translator.translate(
    `Help me practice conversational Vietnamese. The context of the practice conversation is ${dialogSituation} Please do include things like dates, times, and prices if it makes sense in the context of the dialog so we can practice useful phrases like numbers and counting.`
  );

  if (response.success) {
    const conversation = await prisma.conversation.create({
      data: {
        title: response.data.conversation.title,
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

    return {
      message: "Conversation dialog created",
      conversation,
    };
  }

  throw new Error("Failed to generate conversation dialog");
}
