import * as functions from "@google-cloud/functions-framework";
import { PrismaClient } from "./generated";
import { PubSub } from "@google-cloud/pubsub";

import {
  CloudEventData,
  FetchUsersForDailyEmailEvent,
  SendDailyEmailEvent,
} from "../../cloud-functions-event-types";

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

    const parsedData = JSON.parse(messageData) as FetchUsersForDailyEmailEvent;

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

type FetchUsersForDailyEmailParams = FetchUsersForDailyEmailEvent & {
  prisma: PrismaClient;
  pubsub: PubSub;
};

export async function fetchUsersForDailyEmail({
  conversationId,
  prisma,
  pubsub,
}: FetchUsersForDailyEmailParams) {
  const users = await prisma.user.findMany({
    select: {
      email: true,
    },
  });

  for (const user of users) {
    const json: SendDailyEmailEvent = {
      conversationId,
      email: user.email,
    };

    pubsub.topic("send-daily-email").publishMessage({
      json,
    });
  }
}
