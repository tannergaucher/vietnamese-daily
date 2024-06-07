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

    const { conversationId } = parseCloudEventData<IndexContentEvent>({
      cloudEvent,
    });

    const prisma = new PrismaClient();

    const algolia = algoliasearch(
      process.env.ALGOLIA_APPLICATION_ID,
      process.env.ALGOLIA_API_KEY
    );

    await indexContent({
      conversationId,
      prisma,
      algolia,
    });

    return { conversationId };
  }
);

export async function indexContent({
  conversationId,
  prisma,
  algolia,
}: {
  conversationId: string;
  prisma: PrismaClient;
  algolia: SearchClient;
}) {
  const conversation = await prisma.conversation.findUniqueOrThrow({
    where: {
      id: conversationId,
    },
    include: {
      situation: true,
      dialog: true,
    },
  });

  const contentRecord = {
    objectID: conversation.id,
    title: conversation.title,
    date: conversation.createdAt,
    epochDate: conversation.createdAt.getTime(),
    situation: conversation.situation?.text,
    situationId: conversation.situation?.id,
    type: conversation.situation?.type
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
          id: conversationId,
        },
        data: {
          published: true,
        },
      });
    })
    .catch((error) => {
      console.error("Error saving object", error);
    });
}
