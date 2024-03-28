import * as functions from "@google-cloud/functions-framework";
import { PrismaClient } from "./generated";
import { PubSub } from "@google-cloud/pubsub";

interface CloudEventData {
  message: {
    data: string;
  };
}

functions.cloudEvent(
  "fetchUsersForDailyEmail",
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

    await fetchUsersForDailyEmail({
      conversationId: parsedData.conversationId,
      prisma,
      pubsub,
    });
  }
);

export async function fetchUsersForDailyEmail({
  conversationId,
  prisma,
  pubsub,
}: {
  conversationId: string;
  prisma: PrismaClient;
  pubsub: PubSub;
}) {
  //
  const users = await prisma.user.findMany({
    select: {
      email: true,
    },
  });

  for (const user of users) {
    pubsub.topic("send-daily-email").publishMessage({
      json: {
        conversationId,
        email: user.email,
      },
    });
  }
}
