export interface CreateConversationQuizResponse {
  conversationQuiz: {
    comprehensionQuestions: [
      {
        index: 1;
        question: string;
        answer: "a" | "b" | "c" | "d";
        choices: {
          a: string;
          b: string;
          c: string;
          d: string;
        };
      },
      {
        index: 2;
        question: string;
        answer: "a" | "b" | "c" | "d";
        choices: {
          a: string;
          b: string;
          c: string;
          d: string;
        };
      },
      {
        index: 3;
        question: string;
        answer: "a" | "b" | "c" | "d";
        choices: {
          a: string;
          b: string;
          c: string;
          d: string;
        };
      },
      {
        index: 4;
        question: string;
        answer: "a" | "b" | "c" | "d";
        choices: {
          a: string;
          b: string;
          c: string;
          d: string;
        };
      }
    ];
  };
}
