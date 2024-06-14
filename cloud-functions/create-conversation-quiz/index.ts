import {
  CloudEventData,
  CreateConversationQuizEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";

import { PrismaClient } from "./generated";

type CreateConversationQuizParams = CreateConversationQuizEvent & {
  prisma: PrismaClient;
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

    const response = await createConversationQuiz({
      conversationId,
      prisma,
    });

    return response;
  }
);

export async function createConversationQuiz({
  conversationId,
  prisma,
}: CreateConversationQuizParams) {
  // query the conversation by id
  const conversation = await prisma.conversation.findUnique({
    where: {
      id: conversationId,
    },
    select: {
      title: true,
      situation: true,
      dialog: true,
    },
  });

  console.log(conversation);

  // take that conversation, write to a json file
  // attach that json file to the chatgpt assistant conversation
  // prompt the assitant to create a quiz based on the conversation content
  // save the quiz to the database
}
