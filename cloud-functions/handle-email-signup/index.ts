import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";

import { PrismaClient } from "./generated";

import {
  SendConfirmationEmailEvent,
  HandleEmailSignupRequestBody,
} from "@functional-vietnamese/cloud-function-events";

functions.http("handleEmailSignup", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");

  if (req.method === "OPTIONS") {
    // Pre-flight request. Reply successfully:
    res.status(204).send("");
    return;
  }

  const { email }: HandleEmailSignupRequestBody = req.body;

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

type HandleEmailSignupParams = HandleEmailSignupRequestBody & {
  prisma: PrismaClient;
  pubsub: PubSub;
};

export async function handleEmailSignup({
  email,
  prisma,
  pubsub,
}: HandleEmailSignupParams) {
  await prisma.user.create({
    data: {
      email,
    },
  });

  const json: SendConfirmationEmailEvent = {
    email,
  };

  pubsub.topic("send-confirmation-email").publishMessage({
    json,
  });
}
