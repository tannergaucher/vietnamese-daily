import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";
import { CreateDialogEvent } from "cloud-function-events";

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
  const situationToCreateDialog =
    await prisma.conversationSituation.findFirstOrThrow({
      where: {
        conversationId: null,
      },
      select: {
        id: true,
      },
    });

  const json: CreateDialogEvent = {
    situationId: situationToCreateDialog.id,
  };

  pubsub.topic("create-dialog").publishMessage({
    json,
  });
}
