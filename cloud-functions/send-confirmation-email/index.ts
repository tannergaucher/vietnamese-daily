import {
  CloudEventData,
  SendConfirmationEmailEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import sgMail from "@sendgrid/mail";

functions.cloudEvent(
  "sendConfirmationEmail",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { email } = parseCloudEventData<SendConfirmationEmailEvent>({
      cloudEvent,
    });

    if (!process.env.SENDGRID_API_KEY) {
      throw new Error("SENDGRID_API_KEY is required");
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    sendConfirmationEmail({
      email,
      sgMail,
    });
  }
);

type SendConfirmationEmailParams = SendConfirmationEmailEvent & {
  sgMail: sgMail.MailService;
};

export async function sendConfirmationEmail({
  email,
  sgMail,
}: SendConfirmationEmailParams) {
  const msg = {
    to: email,
    from: "tannermichaelgaucher@gmail.com",
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
