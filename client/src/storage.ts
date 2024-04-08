import { Storage } from "@google-cloud/storage";

if (
  !process.env.GCP_CLIENT_EMAIL ||
  !process.env.GCP_PROJECT_ID ||
  !process.env.GCP_PRIVATE_KEY
) {
  throw new Error(
    "Please provide GCP_CLIENT_EMAIL, GCP_PROJECT_ID, GCP_PRIVATE_KEY in .env file"
  );
}

export const storage = new Storage({
  projectId: "vietnamese-daily",
  credentials: {
    client_email: process.env.GCP_CLIENT_EMAIL,
    project_id: process.env.GCP_PROJECT_ID,
    private_key: `${Buffer.from(process.env.GCP_PRIVATE_KEY, "base64").toString(
      "utf8"
    )}`
      .split(String.raw`\n`)
      .join("\n"),
  },
});

export const dialogAudioBucket = storage.bucket("dialog-audio");

export const wordAudioBucket = storage.bucket("word-audio");
