import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

interface CloudEventData {
  message: {
    data: string;
  };
}

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

    const parsedData = JSON.parse(messageData);

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

export async function publishConversation({
  conversationId,
  prisma,
  pubsub,
}: {
  conversationId: string;
  prisma: PrismaClient;
  pubsub: PubSub;
}) {
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

  pubsub.topic("fetch-users-for-daily-email").publishMessage({
    json: {
      conversationId,
    },
  });
}
