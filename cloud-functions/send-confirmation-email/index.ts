import * as functions from "@google-cloud/functions-framework";
import * as sgMail from "@sendgrid/mail";

import { PrismaClient } from "./generated";

interface CloudEventData {
  message: {
    data: string;
  };
}

functions.cloudEvent(
  "sendConfirmationEmail",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    if (!cloudEvent.data?.message?.data) {
      throw new Error("Message data is required");
    }

    const messageData = Buffer.from(
      cloudEvent.data.message.data,
      "base64"
    ).toString("utf8");

    const parsedData = JSON.parse(messageData);

    if (!process.env.SENDGRID_API_KEY) {
      throw new Error("SENDGRID_API_KEY is required");
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const prisma = new PrismaClient();

    sendConfirmationEmail({
      email: parsedData.email,
      sgMail: sgMail,
      prisma,
    });
  }
);

export async function sendConfirmationEmail({
  email,
  sgMail,
  prisma,
}: {
  email: string;
  sgMail: sgMail.MailService;
  prisma: PrismaClient;
}) {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: email,
    },
    select: {
      email: true,
    },
  });

  const msg = {
    to: user.email,
    from: "tanner@vietnamesedaily.app",
    subject: "You are now a member of Vietnamese Daily!",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
}
