export interface CloudEventData {
  message: {
    data: string;
  };
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
