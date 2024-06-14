import {
  CloudEventData,
  CreateConversationQuizEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import OpenAi from "openai";

import { PrismaClient } from "./generated";

type CreateConversationQuizParams = CreateConversationQuizEvent & {
  prisma: PrismaClient;
  openai: OpenAi;
};

functions.cloudEvent(
  "createConversationQuiz",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { conversationId, assistantId } =
      parseCloudEventData<CreateConversationQuizEvent>({
        cloudEvent,
      });

    const prisma = new PrismaClient();

    const openai = new OpenAi({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await createConversationQuiz({
      conversationId,
      assistantId,
      prisma,
      openai,
    });

    return response;
  }
);

export async function createConversationQuiz({
  conversationId,
  assistantId,
  prisma,
  openai,
}: CreateConversationQuizParams) {
  // query the conversation by id
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

  // take that conversation, write to a json file
  // attach that json file to the chatgpt assistant conversation

  const assistant = await openai.beta.assistants.retrieve(assistantId);

  // prompt the assitant to create a quiz based on the conversation content
  // save the quiz to the database
}
