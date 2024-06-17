"use client";

import React, { useState } from "react";

import { CreateConversationQuizResponse } from "../../../../../cloud-functions/create-conversation-quiz/conversationQuizSchema";
import { Button } from "../button";

import { Modal } from "./modal";

interface ConversationQuizModalProps {
  comprehensionQuestions?: CreateConversationQuizResponse["conversationQuiz"]["comprehensionQuestions"];
}

export function ConversationQuizModal({
  comprehensionQuestions,
}: ConversationQuizModalProps) {
  const [open, setOpen] = useState(false);

  if (!comprehensionQuestions) {
    return null;
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        secondary
        className="w-full h-20 mt-8"
      >
        Quiz
      </Button>
      <Modal
        open={open}
        setOpen={setOpen}
        comprehensionQuestions={comprehensionQuestions}
      />
    </>
  );
}
