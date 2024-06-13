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
    const { email, subject, html } = parseCloudEventData<SendDailyEmailEvent>({
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
      subject,
      html,
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
  email,
  html,
  subject,
  sgMail,
}: SendDailyEmailParams) {
  const msg = {
    to: email,
    from: "tannermichaelgaucher@gmail.com",
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Failed to send email:", error.message);

    if (error.body && Array.isArray(error.body.errors)) {
      console.error("SendGrid errors:", error.body.errors);
    }

    throw error;
  }
}
