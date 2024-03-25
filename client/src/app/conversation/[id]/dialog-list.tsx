"use client";

import { useRef, useEffect, useState } from "react";

import { Dialog as DialogModel } from "@/generated";

type Dialog = DialogModel & { audioSrc: string };

export default function DialogList({ dialog }: { dialog: Dialog[] }) {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(
    null
  );

  const [isPlaying, setIsPlaying] = useState(false);

  const toggleConversation = () => {
    const audio = audioRefs.current[currentPlayingIndex ?? 0];
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, dialog.length);
  }, [dialog]);

  const playNext = (index: number) => {
    const nextAudio = audioRefs.current[index + 1];
    if (nextAudio) {
      setCurrentPlayingIndex(index + 1);
      nextAudio.play();
    }

    const nextLi = liRefs.current[index + 1];

    if (nextLi) {
      nextLi.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="mb-8">
      <button
        onClick={toggleConversation}
        className="mx-4 px-6 py-4 mt-6 mb-10 bg-vietnam-red text-white rounded shadow hover:bg-white hover:text-black focus:outline-none text-xl"
      >
        {isPlaying ? "Pause Conversation" : "Start Conversation"}
      </button>
      <ul>
        {dialog.map((dialog, index) => (
          <li
            key={dialog.id}
            ref={(li) => {
              liRefs.current[index] = li;
            }}
            className={`cursor-pointer transition-colors duration-200 p-4 rounded-lg shadow-md mb-4 
          ${currentPlayingIndex === index ? "bg-gray-700 text-white" : ""}`}
          >
            <small className="text-slate-500">
              <em>{dialog.speaker}</em>
            </small>{" "}
            <p className="text-2xl">
              {dialog.vietnamese.split(" ").map((word, index) => (
                <span key={index}>{word} </span>
              ))}
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
