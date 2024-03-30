import * as functions from "./create-dialog/node_modules/@google-cloud/functions-framework/build/src";

import { CloudEventData } from "../cloud-function-events";

export function parseCloudEventData<T>({
  cloudEvent,
}: {
  cloudEvent: functions.CloudEvent<CloudEventData>;
}): T {
  if (!cloudEvent.data?.message?.data) {
    throw new Error("Message data is required");
  }

  const messageData = Buffer.from(
    cloudEvent.data.message.data,
    "base64"
  ).toString("utf8");

  return JSON.parse(messageData) as T;
}
