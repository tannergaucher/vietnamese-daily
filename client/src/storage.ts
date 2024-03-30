import { Storage } from "@google-cloud/storage";

export const storage = new Storage({
  projectId: "vietnamese-daily",
  credentials: {
    client_email: process.env.GCP_CLIENT_EMAIL,
    project_id: process.env.GCP_PROJECT_ID,
    private_key: process.env.GCP_PRIVATE_KEY,
  },
});

export const dialogAudioBucket = storage.bucket("dialog-audio");

export const wordAudioBucket = storage.bucket("word-audio");
