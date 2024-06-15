"use client";

import { Field, Label, Radio, RadioGroup, Transition } from "@headlessui/react";
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
          <RadioGroup>
            <h2>{currentQuestion.question}</h2>
            {Object.entries(currentQuestion.choices).map(([key, value]) => (
              <Field key={key} className="flex items-center gap-2">
                <Radio
                  value={value}
                  className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
                >
                  <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                </Radio>
                <Label>{value}</Label>
              </Field>
            ))}
          </RadioGroup>
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
