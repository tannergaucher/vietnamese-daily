"use client";

import { Field, Label, Radio, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
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
        <div className="bg-bg-2-light dark:bg-bg-2-dark p-4 rounded-lg">
          <div className="flex justify-end">
            <Button secondary onClick={() => setOpen(false)}>
              <XIcon className="h-5 w-5" />
            </Button>
          </div>
          <div className="mx-8">
            <h2 className="text-2xl font-semibold text-gray-700 my-6">
              {currentQuestion.question}
            </h2>
            <RadioGroup className="grid grid-cols-2 gap-4">
              {Object.entries(currentQuestion.choices).map(([key, value]) => (
                <Field
                  key={key}
                  className="flex items-center gap-2 bg-bg-1-light dark:bg-bg-1-dark rounded shadow p-4"
                >
                  <label className="flex items-center gap-2 w-full">
                    <Radio
                      value={value}
                      className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
                    >
                      <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                    </Radio>
                    <Label>{value}</Label>
                  </label>
                </Field>
              ))}
            </RadioGroup>
            <Button
              onClick={() => setCurrentIndex(currentIndex + 1)}
              className="w-full my-6 flex justify-center items-center"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </Transition>
  );
}
