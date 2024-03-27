import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

interface RequestBody {
  email: string;
}

functions.http("handleEmailSignup", async (req, res) => {
  const { email }: RequestBody = req.body;

  if (!email) {
    res.status(400).send("email is required");
    return;
  }

  const prisma = new PrismaClient();

  const pubsub = new PubSub({
    projectId: "daily-vietnamese",
    keyFilename: "./service-account.json",
  });

  await handleEmailSignup({
    prisma,
    email,
    pubsub,
  });

  res.status(200).send("Email signup successful");
});

export async function handleEmailSignup({
  email,
  prisma,
  pubsub,
}: {
  email: string;
  prisma: PrismaClient;
  pubsub: PubSub;
}) {
  await prisma.user.create({
    data: {
      email,
    },
  });

  pubsub.topic("send-confirmation-email").publishMessage({
    json: {
      email,
    },
  });
}
