import * as fs from "fs";
import * as util from "util";

import * as functions from "@google-cloud/functions-framework";
import * as TextToSpeech from "@google-cloud/text-to-speech";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import { PubSub } from "@google-cloud/pubsub";
import { Storage } from "@google-cloud/storage";

import { PrismaClient } from "./generated";

import {
  CloudEventData,
  CreateWordAudioEvent,
  PublishConversationEvent,
} from "../../cloud-functions-event-types";

functions.cloudEvent(
  "createWordAudio",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    if (!cloudEvent.data?.message?.data) {
      throw new Error("Message data is required");
    }

    const messageData = Buffer.from(
      cloudEvent.data.message.data,
      "base64"
    ).toString("utf8");

    const parsedData = JSON.parse(messageData) as CreateWordAudioEvent;

    const prisma = new PrismaClient();

    const textToSpeech = new TextToSpeechClient();

    const storage = new Storage({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    await createWordAudio({
      vietnamese: parsedData.vietnamese,
      dialogId: parsedData.dialogId,
      prisma,
      textToSpeech,
      storage,
      pubsub,
    });
  }
);

type CreateWordAudioParams = CreateWordAudioEvent & {
  prisma: PrismaClient;
  textToSpeech: TextToSpeechClient;
  storage: Storage;
  pubsub: PubSub;
};

export async function createWordAudio({
  vietnamese,
  dialogId,
  prisma,
  textToSpeech,
  storage,
  pubsub,
}: CreateWordAudioParams) {
  const [maleResponse] = await textToSpeech.synthesizeSpeech({
    input: { text: vietnamese },
    voice: {
      languageCode: "vi-VN",
      ssmlGender:
        TextToSpeech.protos.google.cloud.texttospeech.v1.SsmlVoiceGender.MALE,
    },
    audioConfig: {
      sampleRateHertz: 24000,
      audioEncoding:
        TextToSpeech.protos.google.cloud.texttospeech.v1.AudioEncoding.LINEAR16,
    },
  });

  if (!maleResponse.audioContent) {
    throw new Error("No male audio content returned");
  }

  const writeFile = util.promisify(fs.writeFile);

  const maleAudioFile = `${vietnamese}.wav`;

  writeFile(maleAudioFile, maleResponse.audioContent, "binary");

  const bucketName = `word-audio`;

  const bucket = storage.bucket(bucketName);

  await bucket.upload(maleAudioFile, {
    destination: `male/${vietnamese}.wav`,
  });

  const maleGcsUri = `https://storage.googleapis.com/${bucketName}/male/${maleAudioFile}`;

  await prisma.word.update({
    where: {
      vietnamese,
    },
    data: {
      maleSrc: maleGcsUri,
    },
  });

  const [femaleResponse] = await textToSpeech.synthesizeSpeech({
    input: { text: vietnamese },
    voice: {
      languageCode: "vi-VN",
      ssmlGender:
        TextToSpeech.protos.google.cloud.texttospeech.v1.SsmlVoiceGender.FEMALE,
    },
    audioConfig: {
      sampleRateHertz: 24000,
      audioEncoding:
        TextToSpeech.protos.google.cloud.texttospeech.v1.AudioEncoding.LINEAR16,
    },
  });

  if (!femaleResponse.audioContent) {
    throw new Error("No female audio content returned");
  }

  const femaleAudioFile = `${vietnamese}.wav`;

  writeFile(femaleAudioFile, femaleResponse.audioContent, "binary");

  await bucket.upload(femaleAudioFile, {
    destination: `female/${vietnamese}.wav`,
  });

  const femaleGcsUri = `https://storage.googleapis.com/${bucketName}/female/${femaleAudioFile}`;

  await prisma.word.update({
    where: {
      vietnamese,
    },
    data: {
      femaleSrc: femaleGcsUri,
    },
  });

  const dialog = await prisma.dialog.findUniqueOrThrow({
    where: {
      id: dialogId,
    },
    select: {
      conversationId: true,
    },
  });

  const json: PublishConversationEvent = {
    conversationId: dialog.conversationId,
  };

  pubsub.topic("publish-conversation").publishMessage({
    json,
  });
}
