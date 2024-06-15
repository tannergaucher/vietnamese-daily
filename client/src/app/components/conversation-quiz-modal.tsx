"use client";

import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";

import { CreateConversationQuizResponse } from "../../../../cloud-functions/create-conversation-quiz/conversationQuizSchema";

import { Button } from "./button";

interface ConversationQuizModalProps {
  comprensionQuestions: CreateConversationQuizResponse["conversationQuiz"]["comprehensionQuestions"];
}

export function ConversationQuizModal({
  comprensionQuestions,
}: ConversationQuizModalProps) {
  const [open, setOpen] = useState(false);

  console.log(comprensionQuestions);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Quiz</Button>
      <Modal
        open={open}
        setOpen={setOpen}
        comprensionQuestions={comprensionQuestions}
      />
    </>
  );
}

function Modal({
  open,
  setOpen,
  comprensionQuestions,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  comprensionQuestions: CreateConversationQuizResponse["conversationQuiz"]["comprehensionQuestions"];
}) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(
    comprensionQuestions[currentIndex]
  );

  useEffect(() => {
    setCurrentQuestion(comprensionQuestions[currentIndex]);
  }, [currentIndex, comprensionQuestions]);

  return (
    <Transition show={open}>
      <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-bg-1-light dark:bg-bg-1-dark p-4 rounded-lg">
          <Button secondary onClick={() => setOpen(false)}>
            Close
          </Button>
          <div>
            <p>{currentQuestion.question}</p>
            <ul>
              <li>
                <label htmlFor="">
                  {currentQuestion.choices.a}
                  <input
                    type="radio"
                    name="answer"
                    value={currentQuestion.choices.a}
                  />
                </label>
              </li>
              <li>
                <label htmlFor="">
                  {currentQuestion.choices.b}
                  <input
                    type="radio"
                    name="answer"
                    value={currentQuestion.choices.b}
                  />
                </label>
              </li>
              <li>
                <label htmlFor="">
                  {currentQuestion.choices.c}
                  <input
                    type="radio"
                    name="answer"
                    value={currentQuestion.choices.c}
                  />
                </label>
              </li>
              <li>
                <label htmlFor="">
                  {currentQuestion.choices.d}
                  <input
                    type="radio"
                    name="answer"
                    value={currentQuestion.choices.d}
                  />
                </label>
              </li>
            </ul>
          </div>
          <div>
            <Button onClick={() => setCurrentIndex(currentIndex + 1)}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </Transition>
  );
}
