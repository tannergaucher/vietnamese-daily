import fs from "fs";
import path from "path";

import {
  CloudEventData,
  CreateConversationQuizEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import {
  TypeChatLanguageModel,
  createLanguageModel,
  createJsonTranslator,
} from "typechat";

import { CreateConversationQuizResponse } from "./conversationQuizSchema";
import { PrismaClient } from "./generated";

type CreateConversationQuizParams = CreateConversationQuizEvent & {
  prisma: PrismaClient;
  model: TypeChatLanguageModel;
};

functions.cloudEvent(
  "createConversationQuiz",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { conversationId } = parseCloudEventData<CreateConversationQuizEvent>(
      {
        cloudEvent,
      }
    );

    const prisma = new PrismaClient();

    const model = createLanguageModel(process.env);

    const response = await createConversationQuiz({
      conversationId,
      prisma,
      model,
    });

    return response;
  }
);

export async function createConversationQuiz({
  conversationId,
  prisma,
  model,
}: CreateConversationQuizParams) {
  const conversation = await prisma.conversation.findUniqueOrThrow({
    where: {
      id: conversationId,
    },
    select: {
      title: true,
      situation: true,
      dialog: true,
    },
  });

  const schema = fs.readFileSync(
    path.join(__dirname, "conversationQuizSchema.ts"),
    "utf8"
  );

  const translator = createJsonTranslator<CreateConversationQuizResponse>(
    model,
    schema,
    "CreateConversationQuizResponse"
  );

  const conversationDialog = conversation.dialog
    .sort((a, b) => a.index - b.index)
    .map((dialog) => `${dialog.speaker}: ${dialog.vietnamese}`)
    .join("\n");

  const response = await translator.translate(
    `We are creating content for a Vietnamese language learning application. Create a quiz for the following Vietnamese conversation in order to test comprehension of the material. The title is "${conversation.title}". The situation is "${conversation.situation}". The conversation dialog is:\n\n${conversationDialog} Ask four questions to test the comprehension of the conversation dialog. The questions should be in English language. The options should be in English language. The answer should be the option that represents the correct choice according to the question.`
  );

  if (response.success) {
    await prisma.conversationQuiz.upsert({
      where: {
        conversationId,
      },
      create: {
        conversationId,
        comprehensionSection:
          response.data.conversationQuiz.comprehensionQuestions,
      },
      update: {
        comprehensionSection:
          response.data.conversationQuiz.comprehensionQuestions,
      },
    });
  }
}
