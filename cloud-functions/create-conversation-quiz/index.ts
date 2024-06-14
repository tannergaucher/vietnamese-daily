type CreateConversationQuizParams = {
  dialogId: string;
};

export function createConversationQuiz({}: CreateConversationQuizParams) {
  // query the conversation by id
  // take that conversation, write to a json file
  // attach that json file to the chatgpt assistant conversation
  // prompt the assitant to create a quiz based on the conversation content
  // save the quiz to the database
}
