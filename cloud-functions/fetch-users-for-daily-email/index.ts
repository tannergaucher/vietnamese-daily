import { SendDailyEmailEvent } from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";
import moment from "moment-timezone";

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
  const startOfDay = moment().tz("Asia/Ho_Chi_Minh").startOf("day").toDate();

  const endOfDay = moment().tz("Asia/Ho_Chi_Minh").endOf("day").toDate();

  const conversation = await prisma.conversation.findFirstOrThrow({
    where: {
      AND: [
        {
          date: {
            gte: startOfDay,
          },
        },
        {
          date: {
            lte: endOfDay,
          },
        },
      ],
    },
    select: {
      id: true,
      dialog: true,
      title: true,
      situation: true,
    },
  });

  const html = `
  <h1>${conversation.title}</h1>
  <a 
  href="https://vietnamesedaily.vercel.app/conversation/${conversation.id}"
  >
  <button style="background-color: #3490dc; color: #fff; font-weight: bold; padding: 10px 20px; border-radius: 5px;">
    Open Conversation
  </button>
</a>
${conversation.dialog.map((dialog) => `<p>${dialog.vietnamese}</p>`).join("\n")}
`;

  console.log(html, "html");

  const users = await prisma.user.findMany({
    select: {
      email: true,
    },
  });

  for (const user of users) {
    const json: SendDailyEmailEvent = {
      email: user.email,
      subject: conversation.situation?.text || "Daily Vietnamese Conversation",
      html,
    };

    pubsub.topic("send-daily-email").publishMessage({
      json,
    });
  }
}
