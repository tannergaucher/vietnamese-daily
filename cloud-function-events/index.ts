import * as functions from "@google-cloud/functions-framework";

export { functions };

export enum Topic {
  CreateConversationImage = "create-conversation-image",
  CreateConversationSituation = "create-conversation-situation",
  CreateDialog = "create-dialog",
  CreateDialogAudio = "create-dialog-audio",
  CreateWord = "create-word",
  CreateWordAudio = "create-word-audio",
  FetchConversationDialogsForCreatingAudio = "fetch-conversation-dialogs-for-creating-audio",
  FetchSituationForCreatingDialog = "fetch-situation-for-creating-dialog",
  FetchDialogWordsForCreating = "fetch-dialog-words-for-creating",
  FetchUsersForDailyEmail = "fetch-users-for-daily-email",
  IndexContent = "index-content",
  SendDailyEmail = "send-daily-email",
  SendConfirmationEmail = "send-confirmation-email",
}

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

export interface SendConfirmationEmailEvent {
  email: string;
}

export interface SendDailyEmailEvent {
  email: string;
  subject: string;
  html: string;
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

export interface CreateConversationQuiz {
  conversationId: string;
}

export interface IndexContentEvent {
  conversationId?: string;
  publishedAt?: Date;
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

export type ConversationSituationType =
  | "AT_THE_CAFE"
  | "AT_THE_RESTAURANT"
  | "AT_THE_STREET_FOOD_VENDOR_STALL"
  | "AT_THE_MARKET"
  | "ASKING_A_LOCAL_FOR_DIRECTIONS"
  | "A_HEALTH_RELATED_SITUATION"
  | "AN_EMERGENCY_SITUATION"
  | "AT_THE_HOTEL"
  | "SHOPPING_AT_A_STORE";

export const CONVERSATION_SITUATION_TYPES: ConversationSituationType[] = [
  "AT_THE_CAFE",
  "AT_THE_RESTAURANT",
  "AT_THE_STREET_FOOD_VENDOR_STALL",
  "AT_THE_MARKET",
  "ASKING_A_LOCAL_FOR_DIRECTIONS",
  "A_HEALTH_RELATED_SITUATION",
  "AN_EMERGENCY_SITUATION",
  "AT_THE_HOTEL",
  "SHOPPING_AT_A_STORE",
];

export function getConversationTypeFromEnum(type: ConversationSituationType) {
  switch (type) {
    case "AT_THE_RESTAURANT":
      return "at the restaurant";
    case "AT_THE_CAFE":
      return "at the cafe";
    case "AT_THE_STREET_FOOD_VENDOR_STALL":
      return "at the street food vendor stall";
    case "AT_THE_MARKET":
      return "at the market";
    case "ASKING_A_LOCAL_FOR_DIRECTIONS":
      return "asking a local for directions";
    case "A_HEALTH_RELATED_SITUATION":
      return "a health related situation";
    case "AN_EMERGENCY_SITUATION":
      return "an emergency situation";
    case "AT_THE_HOTEL":
      return "at the hotel";
    case "SHOPPING_AT_A_STORE":
      return "shopping at a store";
  }
}
