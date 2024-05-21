import {
  CloudEventData,
  SendDailyEmailEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import sgMail from "@sendgrid/mail";

import { PrismaClient } from "./generated";

functions.cloudEvent(
  "sendDailyEmail",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { email, conversationId } = parseCloudEventData<SendDailyEmailEvent>({
      cloudEvent,
    });

    if (!process.env.SENDGRID_API_KEY) {
      throw new Error("SENDGRID_API_KEY is required");
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const prisma = new PrismaClient({
      log: ["info"],
    });

    sendDailyEmail({
      email,
      conversationId,
      prisma,
      sgMail,
    });
  }
);

type SendDailyEmailParams = SendDailyEmailEvent & {
  prisma: PrismaClient;
  sgMail: sgMail.MailService;
};

export async function sendDailyEmail({
  conversationId,
  email,
  prisma,
  sgMail,
}: SendDailyEmailParams) {
  const conversation = await prisma.conversation.findUniqueOrThrow({
    where: {
      id: conversationId,
    },
    select: {
      id: true,
      dialog: true,
      title: true,
      situation: true,
    },
  });

  const msg = {
    to: email,
    from: "tannermichaelgaucher@gmail.com",
    subject: conversation.situation?.text || "Daily Vietnamese Conversation",
    text: conversation.dialog
      .sort((a, b) => a.index - b.index)
      .map((dialog) => dialog.vietnamese)
      .join("\n"),
    html: `
      <h1>${conversation.title}</h1>
      <a href=${`https://vietnamesedaily.vercel.app/conversation/${conversation.id}`}>Open Conversation</a>
    ${conversation.dialog
      .map((dialog) => `<p>${dialog.vietnamese}</p>`)
      .join("\n")}
    `,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
}
