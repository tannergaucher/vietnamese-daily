import fs from "fs";

import {
  CloudEventData,
  CreateConversationQuizEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import OpenAi from "openai";
import { TextContentBlock } from "openai/resources/beta/threads/messages";

import { PrismaClient } from "./generated";

type CreateConversationQuizParams = CreateConversationQuizEvent & {
  prisma: PrismaClient;
  openai: OpenAi;
};

functions.cloudEvent(
  "createConversationQuiz",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { conversationId, assistantId } =
      parseCloudEventData<CreateConversationQuizEvent>({
        cloudEvent,
      });

    const prisma = new PrismaClient();

    const openai = new OpenAi({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await createConversationQuiz({
      conversationId,
      assistantId,
      prisma,
      openai,
    });

    return response;
  }
);

export async function createConversationQuiz({
  conversationId,
  prisma,
  openai,
}: CreateConversationQuizParams) {
  // const conversation = await prisma.conversation.findUniqueOrThrow({
  //   where: {
  //     id: conversationId,
  //   },
  //   select: {
  //     title: true,
  //     situation: true,
  //     dialog: true,
  //   },
  // });

  // // Write conversation data to a local JSON file
  // const conversationData = JSON.stringify(conversation);
  // const filePath = "./conversation.json";
  // fs.writeFileSync(filePath, conversationData);

  // const file = await openai.files.create({
  //   file: fs.createReadStream(filePath),
  //   purpose: "assistants",
  // });

  // console.log(file, "file");

  // const assistant = await openai.beta.assistants.create({
  //   name: "Vietnamese Conversation Quiz Assistant",
  //   instructions: "Create a quiz based on a Vietnamese conversation",
  //   model: "gpt-3.5-turbo",
  //   tools: [
  //     {
  //       type: "file_search",
  //     },
  //   ],
  // });

  // console.log(assistant, "assistant");

  // const thread = await openai.beta.threads.create({
  //   messages: [
  //     {
  //       role: "assistant",
  //       content:
  //         "You are creating content for a language learning application. You have a conversation between two people in Vietnamese. You want to create a quiz based on the conversation. The conversation is attached here as a file. Please create a quiz based on the conversation.",
  //       attachments: [
  //         {
  //           file_id: file.id,
  //           tools: [{ type: "file_search" }],
  //         },
  //       ],
  //     },
  //   ],
  // });

  // console.log(thread, "thread");

  // // now run the thread
  // const completion = await openai.beta.threads.runs.create(thread.id, {
  //   model: "gpt-3.5-turbo",
  //   assistant_id: assistant.id,
  // });

  // heres the thread run id: run_gz8CMYwp4Akvp5vT2HQ3JOqd
  // how to get the data of the run?
  // get the run data

  const threadMessagesList = await openai.beta.threads.messages.list(
    "thread_JbdCs5CRCrerznESs5UMBREX"
  );

  const quizData = threadMessagesList.data
    .map((message) => message.content as TextContentBlock[])
    .map((content) => JSON.stringify(content[0].text, null, 2));

  const parsedQuizData = quizData.map((data: string) => JSON.parse(data));
  const formattedQuizData = parsedQuizData.map((data: object) =>
    JSON.stringify(data, null, 2).replace(/\\n/g, " ")
  );

  const quizFilePath = "./quiz.json";

  fs.writeFileSync(quizFilePath, JSON.stringify(formattedQuizData, null, 2));
}
