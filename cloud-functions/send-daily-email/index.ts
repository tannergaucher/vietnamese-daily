import * as functions from "@google-cloud/functions-framework";
import sgMail from "@sendgrid/mail";

import { PrismaClient } from "./generated";

import {
  CloudEventData,
  SendDailyEmailEvent,
} from "../../cloud-functions-event-types";

functions.cloudEvent(
  "sendDailyEmail",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    if (!cloudEvent.data?.message?.data) {
      throw new Error("Message data is required");
    }

    const messageData = Buffer.from(
      cloudEvent.data.message.data,
      "base64"
    ).toString("utf8");

    const parsedData = JSON.parse(messageData) as SendDailyEmailEvent;

    if (!process.env.SENDGRID_API_KEY) {
      throw new Error("SENDGRID_API_KEY is required");
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const prisma = new PrismaClient();

    sendDailyEmail({
      email: parsedData.email,
      conversationId: parsedData.conversationId,
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
      dialog: true,
    },
  });

  const msg = {
    to: email,
    from: "tannermichaelgaucher@gmail.com",
    subject: "You are now a member of Vietnamese Daily!",
    text: conversation.dialog.map((dialog) => dialog.vietnamese).join("\n"),
    html: conversation.dialog
      .map((dialog) => `<p>${dialog.vietnamese}</p>`)
      .join("\n"),
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
}
