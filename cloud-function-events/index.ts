import * as functions from "@google-cloud/functions-framework";

import { ConversationSituationType } from "./generated";

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

export interface CreateConversationSituationEvent {
  fromFetchFail?: boolean;
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

export interface CreateConversationImageEvent {
  conversationSituationId: string;
}

export interface IndexContentEvent {
  conversationId: string;
}

export interface ContentHit {
  objectID: string;
  title: string;
  date: string;
  situation: string;
  situationId: string;
  type: string;
  text: string;
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

export function getConversationTypeFromEnum(type: ConversationSituationType) {
  switch (type) {
    case ConversationSituationType.AT_THE_RESTAURANT:
      return "at the restaurant";
    case ConversationSituationType.AT_THE_CAFE:
      return "at the cafe";
    case ConversationSituationType.AT_THE_STREET_FOOD_VENDOR_STALL:
      return "at the street food vendor stall";
    case ConversationSituationType.AT_THE_MARKET:
      return "at the market";
    case ConversationSituationType.ASKING_A_LOCAL_FOR_DIRECTIONS:
      return "asking a local for directions";
    case ConversationSituationType.A_HEALTH_RELATED_SITUATION:
      return "a health related situation";
    case ConversationSituationType.AN_EMERGENCY_SITUATION:
      return "an emergency situation";
    case ConversationSituationType.AT_THE_HOTEL:
      return "at the hotel";
    case ConversationSituationType.SHOPPING_AT_A_STORE:
      return "shopping at a store";
  }
}
