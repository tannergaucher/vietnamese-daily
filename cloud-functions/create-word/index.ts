import {
  CloudEventData,
  CreateWordEvent,
  CreateWordAudioEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

functions.cloudEvent(
  "createWord",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { vietnamese, dialogId } = parseCloudEventData<CreateWordEvent>({
      cloudEvent,
    });

    const prisma = new PrismaClient();

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFile: process.env.SERVICE_ACCOUNT,
    });

    await createWord({
      vietnamese,
      dialogId,
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
  const sanitizedVietnamese = vietnamese
    .trim()
    .toLowerCase()
    .replace(/[.,]/g, "");

  const word = await prisma.word.findUnique({
    where: {
      vietnamese: sanitizedVietnamese,
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
            vietnamese: sanitizedVietnamese,
          },
        },
      },
    });

    return;
  }

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
