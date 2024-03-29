import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

import {
  CloudEventData,
  CreateWordEvent,
  CreateWordAudioEvent,
} from "../../cloud-functions-event-types";

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

    const parsedData = JSON.parse(messageData) as CreateWordEvent;

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

type CreateWordParams = CreateWordEvent & {
  prisma: PrismaClient;
  pubsub: PubSub;
};

export async function createWord({
  vietnamese,
  dialogId,
  prisma,
  pubsub,
}: CreateWordParams) {
  const word = await prisma.word.findUnique({
    where: {
      vietnamese,
    },
  });

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

    const json: CreateWordAudioEvent = {
      vietnamese: sanitizedVietnamese,
      dialogId,
    };

    pubsub.topic("create-word-audio").publishMessage({
      json,
    });
  }
}
