import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

interface CloudEventData {
  message: {
    data: string;
  };
}

functions.cloudEvent(
  "createWord",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    if (!cloudEvent.data?.message?.data) {
      throw new Error("Message data is required");
    }

    const messageData = Buffer.from(
      cloudEvent.data.message.data,
      "base64"
    ).toString("utf8");

    const parsedData = JSON.parse(messageData);

    const prisma = new PrismaClient();

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    await createWord({
      vietnamese: parsedData.vietnamese,
      dialogId: parsedData.dialogId,
      prisma,
      pubsub,
    });
  }
);

export async function createWord({
  vietnamese,
  dialogId,
  prisma,
  pubsub,
}: {
  vietnamese: string;
  dialogId: string;
  prisma: PrismaClient;
  pubsub: PubSub;
}) {
  //  query the word
  const word = await prisma.word.findUnique({
    where: {
      vietnamese,
    },
  });
  //  if it exists, join it to the dialog
  if (word) {
    await prisma.dialog.update({
      where: {
        id: dialogId,
      },
      data: {
        words: {
          connect: {
            vietnamese,
          },
        },
      },
    });
  }
  // if it doesn't exist, create it, join it to the dialog, and publish to create-word-audio
  // sanitize the word by lowercasing it and removing punctuation
  const sanitizedVietnamese = vietnamese
    .trim()
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  if (!word) {
    await prisma.word.create({
      data: {
        vietnamese: sanitizedVietnamese,
        dialog: {
          connect: {
            id: dialogId,
          },
        },
      },
    });

    pubsub.topic("create-word-audio").publishMessage({
      json: {
        vietnamese: sanitizedVietnamese,
        dialogId,
      },
    });
  }
}
