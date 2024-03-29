import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

import { CreateDialogEvent } from "../../cloud-functions-event-types";

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
    throw new Error("No situation to create dialog from");
  }

  const json: CreateDialogEvent = {
    situationId: situationToCreateDialog.id,
  };

  pubsub.topic("create-dialog").publishMessage({
    json,
  });
}
