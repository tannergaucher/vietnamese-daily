import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

import {
  CloudEventData,
  CreateWordEvent,
  CreateWordAudioEvent,
} from "../../cloud-functions-event-types";

import { parseCloudEventData } from "../temp-utils";

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
