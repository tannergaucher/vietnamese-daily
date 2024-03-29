import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

import {
  CloudEventData,
  CreateDialogAudioEvent,
  FetchConversationDialogsForCreatingAudioEvent,
} from "../../cloud-functions-event-types";

functions.cloudEvent(
  "fetchConversationDialogsForCreatingAudio",
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
    ) as FetchConversationDialogsForCreatingAudioEvent;

    const prisma = new PrismaClient();

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    await fetchConversationDialogsForCreatingAudio({
      conversationId: parsedData.conversationId,
      prisma,
      pubsub,
    });
  }
);

type FetchDialogWordsForCreatingAudioParams =
  FetchConversationDialogsForCreatingAudioEvent & {
    prisma: PrismaClient;
    pubsub: PubSub;
  };

export async function fetchConversationDialogsForCreatingAudio({
  conversationId,
  prisma,
  pubsub,
}: FetchDialogWordsForCreatingAudioParams) {
  const conversation = await prisma.conversation.findUniqueOrThrow({
    where: {
      id: conversationId,
    },
    include: {
      dialog: true,
    },
  });

  for (const dialog of conversation.dialog) {
    const json: CreateDialogAudioEvent = {
      dialogId: dialog.id,
    };

    pubsub.topic("create-dialog-audio").publishMessage({
      json,
    });
  }
}
