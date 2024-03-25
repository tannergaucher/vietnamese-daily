import * as fs from "fs";
import * as util from "util";

import * as functions from "@google-cloud/functions-framework";
import * as TextToSpeech from "@google-cloud/text-to-speech";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import { Storage } from "@google-cloud/storage";

import { PrismaClient } from "./generated";

interface CloudEventData {
  message: {
    data: string;
  };
}

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

    const parsedData = JSON.parse(messageData);

    const prisma = new PrismaClient();

    const textToSpeech = new TextToSpeechClient();

    const storage = new Storage({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    await createWordAudio({
      vietnamese: parsedData.vietnamese,
      prisma,
      textToSpeech,
      storage,
    });
  }
);

export async function createWordAudio({
  vietnamese,
  prisma,
  textToSpeech,
  storage,
}: {
  vietnamese: string;
  prisma: PrismaClient;
  textToSpeech: TextToSpeechClient;
  storage: Storage;
}) {
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
}
