import {
  CloudEventData,
  SendDailyEmailEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import sgMail from "@sendgrid/mail";

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

    sendDailyEmail({
      email,
      subject,
      html,
      sgMail,
    });
  }
);

type SendDailyEmailParams = SendDailyEmailEvent & {
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
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
}
