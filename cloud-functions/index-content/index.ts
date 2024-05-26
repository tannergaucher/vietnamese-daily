import {
  CloudEventData,
  parseCloudEventData,
  IndexContentEvent,
  FetchUsersForDailyEmailEvent,
  getConversationTypeFromEnum,
  ConversationSituationType,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";
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

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    await indexContent({
      conversationId,
      prisma,
      algolia,
      pubsub,
    });

    return { conversationId };
  }
);

export async function indexContent({
  conversationId,
  prisma,
  algolia,
  pubsub,
}: {
  conversationId: string;
  prisma: PrismaClient;
  algolia: SearchClient;
  pubsub: PubSub;
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
    .then(({ objectID }) => {
      console.log("Saved object", objectID);

      const json: FetchUsersForDailyEmailEvent = {
        conversationId,
      };

      pubsub.topic("fetch-users-for-daily-email").publishMessage({
        json,
      });
    })
    .catch((error) => {
      console.error("Error saving object", error);
    });
}
