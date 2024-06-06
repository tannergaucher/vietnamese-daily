import {
  // Topic,
  CreateDialogEvent,
  CreateConversationSituationEvent,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

functions.cloudEvent("fetchSituationForCreatingDialog", async () => {
  let retryCount = 0;
  const maxRetries = 3;

  const prisma = new PrismaClient();

  const pubsub = new PubSub({
    projectId: "daily-vietnamese",
    keyFilename: "./service-account.json",
  });

  while (retryCount < maxRetries) {
    try {
      await fetchSituationForCreatingDialog({
        prisma,
        pubsub,
      });

      break;
    } catch (error) {
      retryCount++;

      console.log(
        `Attempt ${retryCount} failed, ${
          retryCount !== maxRetries ? "retrying" : "aborting"
        }`
      );

      if (retryCount === maxRetries) {
        throw new Error("Max retries exceeded" + error);
      }
    }
  }
});

export async function fetchSituationForCreatingDialog({
  prisma,
  pubsub,
}: {
  prisma: PrismaClient;
  pubsub: PubSub;
}) {
  const situationToCreateDialog = await prisma.conversationSituation.findFirst({
    where: {
      conversationId: null,
    },
    select: {
      id: true,
    },
  });

  if (!situationToCreateDialog) {
    const json: CreateConversationSituationEvent = {
      fromFetchFail: true,
    };

    pubsub.topic("create-conversation-situation").publishMessage({ json });

    return;
  }

  const json: CreateDialogEvent = {
    situationId: situationToCreateDialog.id,
  };

  pubsub.topic("create-dialog").publishMessage({
    json,
  });
}
