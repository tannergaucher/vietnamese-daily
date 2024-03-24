import { Storage } from "@google-cloud/storage";

export const storage = new Storage({
  projectId: "vietnamese-daily",
  keyFilename: "service-account.json",
});

export const audioBucket = storage.bucket("dialog-audio");
