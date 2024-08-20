import {
  CloudEventData,
  parseCloudEventData,
  IndexContentEvent,
  getConversationTypeFromEnum,
  ConversationSituationType,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import algoliasearch, { SearchClient } from "algoliasearch";

import { PrismaClient } from "./generated";

functions.cloudEvent(
  "indexContent",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    if (!process.env.ALGOLIA_APPLICATION_ID || !process.env.ALGOLIA_API_KEY) {
      throw new Error("Algolia credentials are missing");
    }

    const { conversationId, publishedAt } =
      parseCloudEventData<IndexContentEvent>({
        cloudEvent,
      });

    const prisma = new PrismaClient();

    const algolia = algoliasearch(
      process.env.ALGOLIA_APPLICATION_ID,
      process.env.ALGOLIA_API_KEY
    );

    return await indexContent({
      conversationId,
      publishedAt,
      prisma,
      algolia,
    });
  }
);

type IndexContentParams = IndexContentEvent & {
  prisma: PrismaClient;
  algolia: SearchClient;
};

export async function indexContent({
  publishedAt,
  conversationId,
  prisma,
  algolia,
}: IndexContentParams) {
  const conversation = await prisma.conversation.findFirstOrThrow({
    where: {
      published: false,
      id: conversationId,
    },
    include: {
      situation: true,
      dialog: true,
    },
  });

  if (!conversation.situation) {
    throw new Error(
      `Conversation ${conversation.id} does not have a situation`
    );
  }

  const contentPublishedDate = publishedAt ? new Date(publishedAt) : new Date();

  const contentRecord = {
    objectID: conversation.id,
    title: conversation.title,
    date: contentPublishedDate,
    epochDate: contentPublishedDate.getTime(),
    situation: conversation.situation.text,
    situationId: conversation.situation.id,
    type: conversation.situation.type
      ? getConversationTypeFromEnum(
          conversation.situation.type as ConversationSituationType
        )
      : "General",
    text: conversation.dialog.map((d) => d.vietnamese).join(" "),
    speakers: [...new Set(conversation.dialog.map((d) => d.speaker))],
  };

  const index = algolia.initIndex("dev_daily_vietnamese");

  index
    .saveObject(contentRecord)
    .then(async ({ objectID }) => {
      console.log("Saved object", objectID);

      await prisma.conversation.update({
        where: {
          id: conversation.id,
        },
        data: {
          published: true,
          date: contentPublishedDate,
        },
      });
    })
    .catch((error) => {
      console.error(`Error saving object: ${conversationId}`, error);
      throw new Error(`Error saving object: ${conversationId}`);
    });

  return {
    message: `Conversation ${conversation.id} has been indexed`,
  };
}
