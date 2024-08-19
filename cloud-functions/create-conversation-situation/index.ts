import {
  CreateConversationSituationEvent,
  CreateDialogEvent,
  CONVERSATION_SITUATION_TYPES,
  getConversationTypeFromEnum,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";
import OpenAi from "openai";

import { PrismaClient } from "./generated";

functions.cloudEvent("createConversationSituation", async () => {
  const prisma = new PrismaClient();

  const pubsub = new PubSub({
    projectId: "daily-vietnamese",
    keyFile: process.env.SERVICE_ACCOUNT,
  });

  const openai = new OpenAi({
    apiKey: process.env.OPENAI_API_KEY,
  });

  return await createConversationSituation({
    prisma,
    openai,
    pubsub,
  });
});

type CreateConversationSituationParams = CreateConversationSituationEvent & {
  prisma: PrismaClient;
  openai: OpenAi;
  pubsub: PubSub;
};

export async function createConversationSituation({
  prisma,
  pubsub,
  openai,
  fromFetchFail,
}: CreateConversationSituationParams) {
  const CITIES = [
    "Hà Nội",
    "Đà Nẵng",
    "Huế",
    "Sài Gòn",
    "Hội An",
    "Phú Quốc",
    "Hạ Long Bay",
    "Nha Trang",
    "Sapa",
  ];

  const conversationSituationType =
    CONVERSATION_SITUATION_TYPES[
      Math.floor(Math.random() * CONVERSATION_SITUATION_TYPES.length)
    ];

  const situationCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Create a new conversation situation for an application we are building to help me practice Vietnamese language. The application will generate a conversation dialog based on the situation. The conversation situation should take place in the the the context of the following situation type: ${getConversationTypeFromEnum(
          conversationSituationType
        )} set in: ${
          CITIES[Math.floor(Math.random() * CITIES.length)]
        }. The conversation situation should be a short description of a scenario that is likely to happen in the course of a normal day in Vietnam. For example, for situation type: "at the restaurant" and place of "Hà Nội", the text could be something like: Ordering phở chiên phồng from a street vendor in Hà Nội. The conversation situation should be in English. The situation should only be one sentence long.`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  if (situationCompletion.choices[0].message.content) {
    const conversationSituation = await prisma.conversationSituation
      .create({
        data: {
          text: situationCompletion.choices[0].message.content,
          type: conversationSituationType,
        },
      })
      .catch((error) => {
        console.error(error, "error");
        console.error("Error creating conversation situation:", error.message);
        console.error("Stack trace:", error.stack);
        throw new Error(
          `collision on text ${situationCompletion.choices[0].message.content} for type ${conversationSituationType}`
        );
      });

    if (fromFetchFail && conversationSituation) {
      const json: CreateDialogEvent = {
        situationId: conversationSituation.id,
      };

      pubsub.topic("create-dialog").publishMessage({
        json,
      });
    }

    return {
      message: "Conversation situation created",
      conversationSituationId: conversationSituation.id,
    };
  }

  throw new Error("Failed to create conversation situation");
}
