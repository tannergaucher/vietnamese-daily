import { Storage } from "@google-cloud/storage";

export const storage = new Storage({
  projectId: "vietnamese-daily",
  keyFilename: "service-account.json",
});

export const dialogAudioBucket = storage.bucket("dialog-audio");

export const wordAudioBucket = storage.bucket("word-audio");
