"use client";

import React, { useState } from "react";

import { CreateConversationQuizResponse } from "../../../../../cloud-functions/create-conversation-quiz/conversationQuizSchema";
import { Button } from "../button";

import { Modal } from "./modal";

interface ConversationQuizModalProps {
  comprehensionQuestions: CreateConversationQuizResponse["conversationQuiz"]["comprehensionQuestions"];
}

export function ConversationQuizModal({
  comprehensionQuestions,
}: ConversationQuizModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Quiz</Button>
      <Modal
        open={open}
        setOpen={setOpen}
        comprehensionQuestions={comprehensionQuestions}
      />
    </>
  );
}
