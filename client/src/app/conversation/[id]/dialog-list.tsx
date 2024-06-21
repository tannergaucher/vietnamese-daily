"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/app/components/button";
import { Dialog as DialogModel, Word as WordModel } from "@/generated";

type Word = WordModel & { signedUrl: string };

type Dialog = DialogModel & { audioSrc: string; words: Word[] };

export function DialogList({
  dialog,
  loading,
  conversationQuiz,
}: {
  dialog: Dialog[];
  loading?: boolean;
  conversationQuiz: React.ReactNode;
}) {
  const [index, setIndex] = useState<null | number>(null);

  const [currentDialog, setCurrentDialog] = useState<null | Dialog>(null);

  useEffect(() => {
    if (index !== null) {
      setCurrentDialog(dialog[index]);
    }
  }, [index, dialog]);

  useEffect(() => {
    if (currentDialog) {
      const audio = new Audio(currentDialog.audioSrc);
      audio.play();

      audio.onended = () => {
        setIndex((prevIndex) => {
          if (prevIndex === null) {
            return 0;
          }

          return prevIndex + 1;
        });
      };
    }
  }, [currentDialog]);

  return (
    <section>
      <Button
        disabled={loading}
        onClick={() => {
          setIndex((prevIndex) => {
            if (prevIndex === null) {
              return 0;
            }

            return prevIndex + 1;
          });
        }}
        className="w-full h-20 rounded-none sticky top-0 z-10"
      >
        {currentDialog ? "Pause Conversation" : "Start Conversation"}
      </Button>
      {currentDialog ? (
        <>
          <p className="text-2xl font-semibold mt-10">
            {currentDialog.vietnamese}
          </p>
        </>
      ) : null}

      {conversationQuiz}
    </section>
  );
}
