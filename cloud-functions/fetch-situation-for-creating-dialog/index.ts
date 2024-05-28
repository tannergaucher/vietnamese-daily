import {
  Topic,
  CreateDialogEvent,
  CreateConversationSituationEvent,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

functions.cloudEvent("fetchSituationForCreatingDialog", async () => {
  const prisma = new PrismaClient();

  const pubsub = new PubSub({
    projectId: "daily-vietnamese",
    keyFilename: "./service-account.json",
  });

  await fetchSituationForCreatingDialog({
    prisma,
    pubsub,
  });
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

    pubsub.topic(Topic.CreateConversationSituation).publishMessage({ json });

    return;
  }

  const json: CreateDialogEvent = {
    situationId: situationToCreateDialog.id,
  };

  pubsub.topic(Topic.CreateDialog).publishMessage({
    json,
  });
}
