import * as fs from "fs";
import * as util from "util";
import * as functions from "@google-cloud/functions-framework";
import * as TextToSpeech from "@google-cloud/text-to-speech";
import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import { Storage } from "@google-cloud/storage";

import { Gender, PrismaClient } from "./generated";

interface CloudEventData {
  message: {
    data: string;
  };
}

functions.cloudEvent(
  "createDialogAudio",
  async (cloudEvent: functions.CloudEvent<CloudEventData>) => {
    if (!cloudEvent.data?.message?.data) {
      throw new Error("Message data is required");
    }

    const messageData = Buffer.from(
      cloudEvent.data.message.data,
      "base64"
    ).toString("utf8");

    const parsedData = JSON.parse(messageData);

    const textToSpeech = new TextToSpeechClient({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    const prisma = new PrismaClient();

    const storage = new Storage({
      projectId: "daily-vietnamese",
      keyFilename: "./service-account.json",
    });

    await createDialogAudio({
      dialogId: parsedData.dialogId,
      textToSpeech,
      prisma,
      storage,
    });
  }
);

export async function createDialogAudio({
  dialogId,
  textToSpeech,
  prisma,
  storage,
}: {
  dialogId: string;
  textToSpeech: TextToSpeechClient;
  prisma: PrismaClient;
  storage: Storage;
}) {
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

  const gcsUrl = `https://storage.googleapis.com/${bucketName}/${dialog.conversationId}/${audioFile}`;

  await prisma.dialog.update({
    where: {
      id: dialog.id,
    },
    data: {
      audioSrc: gcsUrl,
    },
  });
}
