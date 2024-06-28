"use client";

import React, { useRef, useEffect, useState } from "react";

import { Button } from "@/app/components/button";
import { DialogQuiz } from "@/app/components/dialog-quiz";
import { Dialog as DialogModel, Word as WordModel } from "@/generated";

import { CreateConversationQuizResponse } from "../../../../../cloud-functions/create-conversation-quiz/conversationQuizSchema";

type Word = WordModel & { signedUrl: string };

type Dialog = DialogModel & { audioSrc: string; words: Word[] };

export function Dialog({
  dialog,
  loading,
  comprehensionQuestions,
}: {
  dialog: Dialog[];
  loading?: boolean;
  comprehensionQuestions?: CreateConversationQuizResponse["conversationQuiz"]["comprehensionQuestions"];
}) {
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(
    null
  );

  const [src, setSrc] = useState<string | undefined>(undefined);

  const toggleConversation = () => {
    if (currentPlayingIndex === null) {
      setCurrentPlayingIndex(0);
      setSrc(dialog[0].audioSrc);
      return;
    }

    if (currentPlayingIndex === dialog.length - 1) {
      setCurrentPlayingIndex(null);
      setSrc(undefined);
      return;
    }

    if (currentPlayingIndex !== null) {
      setCurrentPlayingIndex(currentPlayingIndex + 1);
      setSrc(dialog[currentPlayingIndex + 1].audioSrc);
      return;
    }
  };

  return (
    <section>
      <audio
        src={src}
        autoPlay
        onEnded={() => {
          toggleConversation();
        }}
      ></audio>
      <Button
        disabled={loading}
        onClick={toggleConversation}
        className="w-full h-20 rounded-none"
      >
        Play
      </Button>
      {currentPlayingIndex !== null && (
        <>
          <small>{dialog[currentPlayingIndex].speaker}:</small>
          <h2>{dialog[currentPlayingIndex].vietnamese}</h2>
        </>
      )}
    </section>
  );
}
