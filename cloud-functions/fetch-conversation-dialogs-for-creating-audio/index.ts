import {
  CloudEventData,
  CreateDialogAudioEvent,
  FetchConversationDialogsForCreatingAudioEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

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
      keyFile: process.env.SERVICE_ACCOUNT,
    });

    return await fetchConversationDialogsForCreatingAudio({
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

  return {
    message: `Dialogs are being created for audio in conversation ${conversationId}`,
  };
}
