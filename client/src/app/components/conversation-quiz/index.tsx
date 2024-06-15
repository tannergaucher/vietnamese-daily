import { useParams } from "next/navigation";

import { prisma } from "../../../prisma";

import { ConversationQuizModal } from "./conversation-quiz-modal";

export function ConversationQuiz() {
  // get conversation id from params
  const { id } = useParams();

  if (!id) {
    return null;
  }

  const conversationQuiz = prisma.conversationQuiz.findUniqueOrThrow({
    where: {
      id: "sdfsdf",
    },
  });

  console.log(conversationQuiz);

  return (
    <div>
      <ConversationQuizModal />
    </div>
  );
}
