import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

import {
  CloudEventData,
  FetchDialogWordsForCreatingEvent,
  CreateWordEvent,
} from "../../cloud-functions-event-types";

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

    const parsedData = JSON.parse(
      messageData
    ) as FetchDialogWordsForCreatingEvent;

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
}
