import * as functions from "@google-cloud/functions-framework";

export { functions };

export interface CloudEventData {
  message: {
    data: string;
  };
}

export interface CreateDialogAudioEvent {
  dialogId: string;
}

export interface CreateDialogEvent {
  situationId: string;
}

export interface CreateWordAudioEvent {
  vietnamese: string;
  dialogId: string;
}

export interface CreateWordEvent {
  vietnamese: string;
  dialogId: string;
}

export interface FetchConversationDialogsForCreatingAudioEvent {
  conversationId: string;
}

export interface FetchDialogWordsForCreatingEvent {
  dialogId: string;
}

export interface FetchUsersForDailyEmailEvent {
  conversationId: string;
}

export interface PublishConversationEvent {
  conversationId: string;
}

export interface SendConfirmationEmailEvent {
  email: string;
}

export interface SendDailyEmailEvent {
  email: string;
  conversationId: string;
}

export interface FetchConversationDialogsForCreatingAudioEvent {
  conversationId: string;
}

export interface FetchDialogWordsForCreatingEvent {
  dialogId: string;
}

export interface CreateWordEvent {
  vietnamese: string;
  dialogId: string;
}

export interface CreateWordAudioEvent {
  vietnamese: string;
  dialogId: string;
}

export interface PublishConversationEvent {
  conversationId: string;
}

export interface FetchUsersForDailyEmailEvent {
  conversationId: string;
}

export interface SendDailyEmailEvent {
  email: string;
  conversationId: string;
}

export interface CreateDialogEvent {
  situationId: string;
}

export interface CreateDialogAudioEvent {
  dialogId: string;
}

export interface SendConfirmationEmailEvent {
  email: string;
}

export interface HandleEmailSignupRequestBody {
  email: string;
}

export function parseCloudEventData<T>({
  cloudEvent,
}: {
  cloudEvent: functions.CloudEvent<CloudEventData>;
}): T {
  if (!cloudEvent.data?.message?.data) {
    throw new Error("Message data is required");
  }

  return JSON.parse(
    Buffer.from(cloudEvent.data.message.data, "base64").toString("utf8")
  ) as T;
}
