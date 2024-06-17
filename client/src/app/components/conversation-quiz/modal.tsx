import { Field, Label, Radio, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";

import { CreateConversationQuizResponse } from "../../../../../cloud-functions/create-conversation-quiz/conversationQuizSchema";
import { Button } from "../button";

export function Modal({
  open,
  setOpen,
  comprehensionQuestions,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  comprehensionQuestions: CreateConversationQuizResponse["conversationQuiz"]["comprehensionQuestions"];
}) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(
    comprehensionQuestions[currentIndex]
  );

  useEffect(() => {
    setCurrentQuestion(comprehensionQuestions[currentIndex]);
  }, [currentIndex, comprehensionQuestions]);

  return (
    <Transition show={open}>
      <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-bg-1-light dark:bg-bg-1-dark p-4 rounded-lg">
          <div className="flex justify-end">
            <Button secondary onClick={() => setOpen(false)}>
              <XIcon className="h-5 w-5" />
            </Button>
          </div>
          <div className="mx-8">
            <h2 className="text-2xl font-semibold my-6">
              {currentQuestion.question}
            </h2>
            <RadioGroup className="grid grid-cols-2 gap-4">
              {Object.entries(currentQuestion.choices).map(([key, value]) => (
                <Field
                  key={key}
                  className="flex items-center gap-2 bg-bg-1-light dark:bg-bg-1-dark rounded shadow"
                >
                  <Label className="flex items-center gap-2 w-full p-4 hover:cursor-pointer">
                    <Radio
                      value={value}
                      className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-accent-2-light"
                    >
                      <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                    </Radio>
                    {value}
                  </Label>
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
