import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

import {
  CloudEventData,
  CreateDialogAudioEvent,
  FetchConversationDialogsForCreatingAudioEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";

functions.cloudEvent(
  "fetchConversationDialogsForCreatingAudio",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { conversationId } =
      parseCloudEventData<FetchConversationDialogsForCreatingAudioEvent>({
        cloudEvent,
      });

    const prisma = new PrismaClient();

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    await fetchConversationDialogsForCreatingAudio({
      conversationId,
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
