import {
  CloudEventData,
  FetchDialogWordsForCreatingEvent,
  CreateWordEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

functions.cloudEvent(
  "fetchDialogWordsForCreating",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { dialogId } = parseCloudEventData<FetchDialogWordsForCreatingEvent>({
      cloudEvent,
    });

    const prisma = new PrismaClient();

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFile: process.env.SERVICE_ACCOUNT,
    });

    return await fetchDialogWordsForCreating({
      dialogId,
      prisma,
      pubsub,
    });
  }
);

type FetchDialogWordsForCreatingParams = FetchDialogWordsForCreatingEvent & {
  prisma: PrismaClient;
  pubsub: PubSub;
};

export async function fetchDialogWordsForCreating({
  dialogId,
  prisma,
  pubsub,
}: FetchDialogWordsForCreatingParams) {
  const dialog = await prisma.dialog.findUniqueOrThrow({
    where: {
      id: dialogId,
    },
  });

  const words = dialog.vietnamese.split(" ");

  for (const word of words) {
    const json: CreateWordEvent = {
      vietnamese: word,
      dialogId: dialog.id,
    };

    pubsub.topic("create-word").publishMessage({
      json,
    });
  }

  return {
    message: `Fetched ${words.length} words for dialog ${dialog.id}`,
  };
}
