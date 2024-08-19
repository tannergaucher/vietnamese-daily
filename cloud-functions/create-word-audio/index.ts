import * as fs from "fs";
import * as util from "util";

import {
  CloudEventData,
  CreateWordAudioEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { PubSub } from "@google-cloud/pubsub";
import { Storage } from "@google-cloud/storage";
import * as TextToSpeech from "@google-cloud/text-to-speech";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";

import { PrismaClient } from "./generated";

functions.cloudEvent(
  "createWordAudio",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { vietnamese, dialogId } = parseCloudEventData<CreateWordAudioEvent>({
      cloudEvent,
    });

    const prisma = new PrismaClient();

    const textToSpeech = new TextToSpeechClient();

    const storage = new Storage({
      projectId: "daily-vietnamese",
      keyFile: process.env.SERVICE_ACCOUNT,
    });

    const pubsub = new PubSub({
      projectId: "daily-vietnamese",
      keyFile: process.env.SERVICE_ACCOUNT,
    });

    return await createWordAudio({
      vietnamese,
      dialogId,
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
  prisma,
  textToSpeech,
  storage,
}: CreateWordAudioParams) {
  const [maleResponse] = await textToSpeech.synthesizeSpeech({
    input: { text: vietnamese },
    voice: {
      languageCode: "vi-VN",
      name: "vi-VN-Neural2-A",
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
      name: "vi-VN-Neural2-D",
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

  return {
    message: `Word audio created for vietnamese: ${vietnamese}`,
    maleGcsUri,
    femaleGcsUri,
  };
}
