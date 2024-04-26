import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

import {
  CloudEventData,
  PublishConversationEvent,
  IndexContentEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";

functions.cloudEvent(
  "publishConversation",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { conversationId } = parseCloudEventData<PublishConversationEvent>({
      cloudEvent,
    });

    const prisma = new PrismaClient();

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    await publishConversation({
      conversationId,
      prisma,
      pubsub,
    });
  }
);

type PublishConversationParams = PublishConversationEvent & {
  prisma: PrismaClient;
  pubsub: PubSub;
};

export async function publishConversation({
  conversationId,
  prisma,
  pubsub,
}: PublishConversationParams) {
  await prisma.conversation.update({
    where: {
      id: conversationId,
    },
    data: {
      published: true,
    },
  });

  const json: IndexContentEvent = {
    conversationId,
  };

  pubsub.topic("index-content").publishMessage({
    json,
  });
}
