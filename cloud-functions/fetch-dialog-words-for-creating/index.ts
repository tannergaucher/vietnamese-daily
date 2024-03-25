import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

interface CloudEventData {
  message: {
    data: string;
  };
}

functions.cloudEvent(
  "fetchDialogWordsForCreating",
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

    await fetchDialogWordsForCreating({
      dialogId: parsedData.dialogId,
      prisma,
      pubsub,
    });
  }
);

export async function fetchDialogWordsForCreating({
  dialogId,
  prisma,
  pubsub,
}: {
  dialogId: string;
  prisma: PrismaClient;
  pubsub: PubSub;
}) {
  const dialog = await prisma.dialog.findUniqueOrThrow({
    where: {
      id: dialogId,
    },
  });

  const words = dialog.vietnamese.split(" ");

  for (const word of words) {
    pubsub.topic("create-word").publishMessage({
      json: {
        vietnamese: word,
        dialogId: dialog.id,
      },
    });
  }
}
