"use client";

import React, { useRef, useEffect, useState } from "react";

import { Button } from "@/app/components/button";
import { Dialog as DialogModel, Word as WordModel } from "@/generated";

type Word = WordModel & { signedUrl: string };

type Dialog = DialogModel & { audioSrc: string; words: Word[] };

export default function DialogList({ dialog }: { dialog: Dialog[] }) {
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(
    null
  );

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentDialogWordSrc, setCurrentDialogWordSrc] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (currentDialogWordSrc) {
      const audio = new Audio(currentDialogWordSrc);
      audio.load();
      audio.play();
      audio.addEventListener("ended", () => {
        setCurrentDialogWordSrc(null);
      });
    }
  }, [currentDialogWordSrc]);

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const liRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, dialog.length);
  }, [dialog]);

  const toggleConversation = () => {
    const audio = audioRefs.current[currentPlayingIndex ?? 0];

    if (currentPlayingIndex === null) {
      setCurrentPlayingIndex(0);
    }

    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = (index: number) => {
    const nextAudio = audioRefs.current[index + 1];

    if (nextAudio) {
      setCurrentPlayingIndex(index + 1);
      nextAudio.play();
    } else {
      setIsPlaying(false);
      setCurrentPlayingIndex(null);
    }

    const nextLi = liRefs.current[index + 1];

    if (nextLi) {
      nextLi.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
  };

  return (
    <section>
      {currentDialogWordSrc ? <audio src={currentDialogWordSrc}></audio> : null}
      <Button onClick={toggleConversation} className="w-full h-20 rounded-none">
        {isPlaying ? "Pause Conversation" : "Start Conversation"}
      </Button>
      <ul>
        {dialog.map((d, index) => (
          <div key={d.id}>
            <li
              ref={(li) => {
                liRefs.current[index] = li;
              }}
              className={`transition-colors duration-200 py-4 px-3
          ${
            currentPlayingIndex === index
              ? "bg-bg-2-light text-white dark:bg-bg-2-dark dark:text-text-color-dark"
              : ""
          }`}
            >
              <small className="dark:text-slate-200">
                <em>{d.speaker}</em>
              </small>{" "}
              <p className="text-2xl">
                {d.vietnamese.split(" ").map((word, index) => {
                  const currentDialogWord = d.words.find(
                    (dialogWord) =>
                      dialogWord.vietnamese ===
                      word.trim().toLowerCase().replace(/[.,]/g, "")
                  );
                  return (
                    <span
                      className="hover:underline cursor-pointer"
                      key={index}
                      onClick={() => {
                        if (currentDialogWord && !isPlaying) {
                          setCurrentDialogWordSrc(currentDialogWord.signedUrl);
                        }
                      }}
                    >
                      {word}{" "}
                    </span>
                  );
                })}
              </p>
              <audio
                ref={(audio) => {
                  audioRefs.current[index] = audio;
                }}
                src={d.audioSrc}
                preload="auto"
                onEnded={() => playNext(index)}
              ></audio>
            </li>
            {index === dialog.length - 1 ? null : (
              <hr className="dark:border-accent-1-dark" />
            )}
          </div>
        ))}
      </ul>
    </section>
  );
}
