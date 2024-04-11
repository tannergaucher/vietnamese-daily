"use client";

import { useRef, useEffect, useState } from "react";

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
      nextLi.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="my-12">
      <button
        onClick={toggleConversation}
        className="px-6 py-4 mt-6 mb-10 rounded shadow text-xl sticky top-0"
      >
        {isPlaying ? "Pause Conversation" : "Start Conversation"}
      </button>
      {currentDialogWordSrc ? <audio src={currentDialogWordSrc}></audio> : null}
      <ul className="px-4">
        {dialog.map((dialog, index) => (
          <li
            key={dialog.id}
            ref={(li) => {
              liRefs.current[index] = li;
            }}
            className={`transition-colors duration-200 p-4 rounded-lg shadow-md mb-4 
          ${currentPlayingIndex === index ? "bg-gray-700 text-white" : ""}`}
          >
            <small className="text-slate-500">
              <em>{dialog.speaker}</em>
            </small>{" "}
            <p className="text-2xl">
              {dialog.vietnamese.split(" ").map((word, index) => {
                const currentDialogWord = dialog.words.find(
                  (dialogWord) =>
                    dialogWord.vietnamese ===
                    word.trim().toLowerCase().replace(/[.,]/g, "")
                );
                return (
                  <span
                    className="hover:underline cursor-pointer"
                    key={index}
                    onClick={() => {
                      if (currentDialogWord) {
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
              src={dialog.audioSrc}
              preload="auto"
              onEnded={() => playNext(index)}
            ></audio>
          </li>
        ))}
      </ul>
    </section>
  );
}
