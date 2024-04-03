import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import {
  CloudEventData,
  CreateWordEvent,
  CreateWordAudioEvent,
  parseCloudEventData,
  sanitizeVietnamese,
} from "@functional-vietnamese/cloud-function-events";

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
      keyFilename: "./service-account.json",
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

    return;
  }

  // const sanitizedVietnamese = vietnamese
  //   .trim()
  //   .toLowerCase()
  //   .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  const sanitizedVietnamese = sanitizeVietnamese({
    vietnamese,
  });

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
