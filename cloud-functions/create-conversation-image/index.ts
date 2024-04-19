import * as fs from "fs";
import * as util from "util";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";
import { Storage } from "@google-cloud/storage";
import OpenAI from "openai";

import {
  CloudEventData,
  CreateConversationImageEvent,
  parseCloudEventData,
  IndexContentEvent,
} from "@functional-vietnamese/cloud-function-events";

import { PrismaClient } from "./generated";

functions.cloudEvent(
  "createConversationImage",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { conversationSituationId } =
      parseCloudEventData<CreateConversationImageEvent>({
        cloudEvent,
      });

    const prisma = new PrismaClient();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const storage = new Storage({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    await createConversationImage({
      conversationSituationId,
      prisma,
      openai,
      storage,
      pubsub,
    });
  }
);

export async function createConversationImage({
  conversationSituationId,
  prisma,
  openai,
  storage,
  pubsub,
}: {
  conversationSituationId: string;
  prisma: PrismaClient;
  openai: OpenAI;
  storage: Storage;
  pubsub: PubSub;
}) {
  const conversationSituation =
    await prisma.conversationSituation.findUniqueOrThrow({
      where: {
        id: conversationSituationId,
      },
      select: {
        text: true,
        imageSrc: true,
        conversationId: true,
      },
    });

  if (!conversationSituation.conversationId) {
    throw new Error("ConversationSituation does not have a conversationId");
  }

  if (conversationSituation.imageSrc) {
    return;
  }

  const completion = await openai.images.generate({
    model: "dall-e-2",
    prompt: `A vividly colorful Vietnamese folk print of the following scene: ${conversationSituation.text}`,
    n: 1,
    size: "1024x1024",
  });

  if (completion.data[0].url) {
    const response = await fetch(completion.data[0].url);

    const blob = await response.blob();

    const writeFile = util.promisify(fs.writeFile);

    const imageFile = `${conversationSituationId}.jpg`;

    const buffer = await blob.arrayBuffer();

    const uint8Array = new Uint8Array(buffer);

    writeFile(imageFile, uint8Array, "binary");

    const bucketName = `conversation-dalee-images`;

    const bucket = storage.bucket(bucketName);

    await bucket.upload(imageFile, {
      destination: `${conversationSituationId}.jpg`,
    });

    const gcsUri = `https://storage.googleapis.com/${bucketName}/${conversationSituationId}.jpg`;

    await prisma.conversationSituation.update({
      where: {
        id: conversationSituationId,
      },
      data: {
        imageSrc: gcsUri,
      },
    });

    const json: IndexContentEvent = {
      conversationId: conversationSituation.conversationId,
    };

    pubsub.topic("index-content").publishMessage({
      json,
    });
  }
}
