import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";
import { PrismaClient } from "./generated";

interface CloudEventData {
  message: {
    data: string;
  };
}

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

    const parsedData = JSON.parse(messageData);

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

export async function fetchConversationDialogsForCreatingAudio({
  conversationId,
  prisma,
  pubsub,
}: {
  conversationId: string;
  prisma: PrismaClient;
  pubsub: PubSub;
}) {
  const conversation = await prisma.conversation.findUniqueOrThrow({
    where: {
      id: conversationId,
    },
    include: {
      dialog: true,
    },
  });

  for (const dialog of conversation.dialog) {
    pubsub.topic("create-dialog-audio").publishMessage({
      json: {
        dialogId: dialog.id,
      },
    });
  }
}
