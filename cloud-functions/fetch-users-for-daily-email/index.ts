import {
  CloudEventData,
  FetchUsersForDailyEmailEvent,
  SendDailyEmailEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

functions.cloudEvent(
  "fetchUsersForDailyEmail",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { conversationId } =
      parseCloudEventData<FetchUsersForDailyEmailEvent>({
        cloudEvent,
      });

    const prisma = new PrismaClient();

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    await fetchUsersForDailyEmail({
      conversationId,
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
