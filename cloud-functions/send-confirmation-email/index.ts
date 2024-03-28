import * as functions from "@google-cloud/functions-framework";
import sgMail from "@sendgrid/mail";

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

    // const prisma = new PrismaClient();

    sendConfirmationEmail({
      email: parsedData.email,
      sgMail: sgMail,
      // prisma,
    });
  }
);

export async function sendConfirmationEmail({
  email,
  sgMail,
}: {
  email: string;
  sgMail: sgMail.MailService;
}) {
  const msg = {
    to: email,
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
