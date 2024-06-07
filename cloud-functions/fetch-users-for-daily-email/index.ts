import { SendDailyEmailEvent } from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

functions.cloudEvent("fetchUsersForDailyEmail", async () => {
  const prisma = new PrismaClient();

  const pubsub = new PubSub({
    projectId: "daily-vietnamese",
    keyFile: process.env.SERVICE_ACCOUNT,
  });

  await fetchUsersForDailyEmail({
    prisma,
    pubsub,
  });
});

type FetchUsersForDailyEmailParams = {
  prisma: PrismaClient;
  pubsub: PubSub;
};

export async function fetchUsersForDailyEmail({
  prisma,
  pubsub,
}: FetchUsersForDailyEmailParams) {
  const users = await prisma.user.findMany({
    select: {
      email: true,
    },
  });

  const conversationDate = new Date();

  for (const user of users) {
    const json: SendDailyEmailEvent = {
      conversationDate,
      email: user.email,
    };

    pubsub.topic("send-daily-email").publishMessage({
      json,
    });
  }
}
