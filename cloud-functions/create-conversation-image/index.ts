import * as functions from "@google-cloud/functions-framework";
import OpenAI from "openai";

import {
  CloudEventData,
  CreateConversationImageEvent,
  parseCloudEventData,
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

    await createConversationImage({
      conversationSituationId,
      prisma,
      openai,
    });
  }
);

export async function createConversationImage({
  conversationSituationId,
  prisma,
  openai,
}: {
  conversationSituationId: string;
  prisma: PrismaClient;
  openai: OpenAI;
}) {
  const conversationSituation =
    await prisma.conversationSituation.findUniqueOrThrow({
      where: {
        id: conversationSituationId,
      },
      select: {
        text: true,
        imageSrc: true,
      },
    });

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
    await prisma.conversationSituation.update({
      where: {
        id: conversationSituationId,
      },
      data: {
        imageSrc: completion.data[0].url,
      },
    });
  }
}
