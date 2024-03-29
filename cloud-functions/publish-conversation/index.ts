import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

import {
  CloudEventData,
  PublishConversationEvent,
  FetchUsersForDailyEmailEvent,
} from "../../cloud-functions-event-types";

functions.cloudEvent(
  "publishConversation",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    if (!cloudEvent.data?.message?.data) {
      throw new Error("Message data is required");
    }

    const messageData = Buffer.from(
      cloudEvent.data.message.data,
      "base64"
    ).toString("utf8");

    const parsedData = JSON.parse(messageData) as PublishConversationEvent;

    const prisma = new PrismaClient();

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    await publishConversation({
      conversationId: parsedData.conversationId,
      prisma,
      pubsub,
    });
  }
);

type PublishConversationParams = PublishConversationEvent & {
  prisma: PrismaClient;
  pubsub: PubSub;
};

export async function publishConversation({
  conversationId,
  prisma,
  pubsub,
}: PublishConversationParams) {
  const dialogWords = await prisma.word.findMany({
    where: {
      dialog: {
        every: {
          conversationId: conversationId,
        },
      },
    },
  });

  const dialogWordsWithAudioSrc = await prisma.word.findMany({
    where: {
      AND: [
        {
          dialog: {
            every: {
              conversationId: conversationId,
            },
          },
        },
        {
          maleSrc: {
            not: null,
          },
        },
        {
          femaleSrc: {
            not: null,
          },
        },
      ],
    },
  });

  if (dialogWords.length !== dialogWordsWithAudioSrc.length) {
    return;
  }

  await prisma.conversation.update({
    where: {
      id: conversationId,
    },
    data: {
      published: true,
    },
  });

  const json: FetchUsersForDailyEmailEvent = {
    conversationId,
  };

  pubsub.topic("fetch-users-for-daily-email").publishMessage({
    json,
  });
}
