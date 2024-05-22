import fs from "fs";
import path from "path";

import {
  CreateConversationSituationEvent,
  CreateDialogEvent,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";
import {
  createLanguageModel,
  createJsonTranslator,
  TypeChatLanguageModel,
} from "typechat";

import { ConversationSituationResponse } from "./conversationSituation";
import { PrismaClient, ConversationSituationType } from "./generated";

functions.cloudEvent("createConversationSituation", async () => {
  const model = createLanguageModel(process.env);
  const prisma = new PrismaClient();

  const pubsub = new PubSub({
    projectId: "daily-vietnamese",
    keyFilename: "./service-account.json",
  });

  const response = await createConversationSituation({ prisma, model, pubsub });

  return response;
});

type CreateConversationSituationParams = CreateConversationSituationEvent & {
  prisma: PrismaClient;
  model: TypeChatLanguageModel;
  pubsub: PubSub;
};

export async function createConversationSituation({
  prisma,
  model,
  pubsub,
  fromFetchFail,
}: CreateConversationSituationParams) {
  const schema = fs.readFileSync(
    path.join(__dirname, "conversationSituation.ts"),
    "utf-8"
  );

  const translator = createJsonTranslator<ConversationSituationResponse>(
    model,
    schema,
    "ConversationSituationResponse"
  );

  const prevConversations = await prisma.conversationSituation.findMany();

  const conversationSituationTypes: ConversationSituationType[] = Object.values(
    ConversationSituationType
  );

  const randomIndex = Math.floor(
    Math.random() * conversationSituationTypes.length
  );

  const conversationSituationType = conversationSituationTypes[randomIndex];

  const response = await translator.translate(
    `Create a new conversation situation for an application we are building to help me practice Vietnamese language. The application will generate a conversation dialog based on the situation. The conversation situation should take place in the the the context of the following situation: ${conversationSituationType}. The conversation situation should be a short description of a scenario that is likely to happen in the course of a normal day in Vietnam. For example, for type: at the restaurant, the text could be something like: ordering phở chiên phồng from a street vendor in Hanoi. The conversation situation should be in English. The conversation situation should be unique and not a duplicate of any existing conversation situation. Here are the previously created conversation situations. Please do not repeat these! ${prevConversations
      .map((c) => c.text)
      .join(", ")}.`
  );

  if (response.success) {
    const conversationSituation = await prisma.conversationSituation
      .create({
        data: {
          text: response.data.text,
          type: conversationSituationType,
        },
      })
      .catch(() => {
        console.log("collision on text, trying again");
        pubsub.topic("create-conversation-situation").publishMessage({});
      });

    if (fromFetchFail && conversationSituation) {
      const json: CreateDialogEvent = {
        situationId: conversationSituation.id,
      };

      pubsub.topic("create-dialog").publishMessage({
        json,
      });
    }
  }
}
