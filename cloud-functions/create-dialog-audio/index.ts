import * as fs from "fs";
import * as util from "util";

import {
  CloudEventData,
  CreateDialogAudioEvent,
  parseCloudEventData,
} from "@functional-vietnamese/cloud-function-events";
import * as functions from "@google-cloud/functions-framework";
import { Storage } from "@google-cloud/storage";
import * as TextToSpeech from "@google-cloud/text-to-speech";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";

import { Gender, PrismaClient } from "./generated";

functions.cloudEvent(
  "createDialogAudio",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    const { dialogId } = parseCloudEventData<CreateDialogAudioEvent>({
      cloudEvent,
    });

    const textToSpeech = new TextToSpeechClient({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    const prisma = new PrismaClient();

    const storage = new Storage({
      projectId: "daily-vietnamese",
      keyFile: process.env.SERVICE_ACCOUNT,
    });

    await createDialogAudio({
      dialogId,
      textToSpeech,
      prisma,
      storage,
    });
  }
);

type CreateDialogAudioParams = CreateDialogAudioEvent & {
  textToSpeech: TextToSpeechClient;
  prisma: PrismaClient;
  storage: Storage;
};

export async function createDialogAudio({
  dialogId,
  textToSpeech,
  prisma,
  storage,
}: CreateDialogAudioParams) {
  const dialog = await prisma.dialog.findUniqueOrThrow({
    where: {
      id: dialogId,
    },
  });

  const [response] = await textToSpeech.synthesizeSpeech({
    input: { text: dialog.vietnamese },
    voice: {
      languageCode: "vi-VN",
      ssmlGender:
        dialog.gender === Gender.male
          ? TextToSpeech.protos.google.cloud.texttospeech.v1.SsmlVoiceGender
              .MALE
          : TextToSpeech.protos.google.cloud.texttospeech.v1.SsmlVoiceGender
              .FEMALE,
    },
    audioConfig: {
      sampleRateHertz: 24000,
      audioEncoding:
        TextToSpeech.protos.google.cloud.texttospeech.v1.AudioEncoding.LINEAR16,
    },
  });

  if (!response.audioContent) {
    throw new Error("No audio content in response");
  }

  const writeFile = util.promisify(fs.writeFile);

  const audioFile = `${dialog.id}.wav`;

  writeFile(audioFile, response.audioContent, "binary");

  const bucketName = `dialog-audio`;

  const bucket = storage.bucket(bucketName);

  await bucket
    .upload(audioFile, {
      destination: `${dialog.conversationId}/${audioFile}`,
    })
    .catch((err) => {
      console.log(err, "err");
    });

  const gcsUri = `https://storage.googleapis.com/${bucketName}/${dialog.conversationId}/${audioFile}`;

  await prisma.dialog.update({
    where: {
      id: dialog.id,
    },
    data: {
      audioSrc: gcsUri,
    },
  });
}
