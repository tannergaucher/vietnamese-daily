import { Field, Label, Radio, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

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

  const [answer, setAnswer] = useState<string | null>(null);

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setCurrentQuestion(comprehensionQuestions[currentIndex]);
  }, [currentIndex, comprehensionQuestions]);

  const { width, height } = useWindowSize();

  return (
    <>
      {showConfetti ? (
        <div className="fixed top-0 left-0 z-50">
          <Confetti width={width} height={height} />
        </div>
      ) : null}
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
              <RadioGroup
                className="grid grid-cols-2 gap-4"
                value={answer}
                onChange={(value) => {
                  setAnswer(value as string);
                }}
              >
                {Object.entries(currentQuestion.choices).map(([key, value]) => (
                  <Field
                    key={key}
                    className="flex items-center gap-2 bg-bg-1-light dark:bg-bg-1-dark rounded shadow"
                  >
                    <Label className="flex items-center gap-2 w-full p-4 hover:cursor-pointer">
                      <Radio
                        value={key}
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
                disabled={answer !== currentQuestion.answer}
                onClick={() => {
                  if (currentIndex === comprehensionQuestions.length - 1) {
                    setOpen(false);
                    setShowConfetti(true);
                  } else {
                    setCurrentIndex((prev) => prev + 1);
                    setAnswer(null);
                  }
                }}
                className="w-full my-6 flex justify-center items-center"
              >
                {currentIndex === comprehensionQuestions.length - 1
                  ? "Finish"
                  : "Next"}
              </Button>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
