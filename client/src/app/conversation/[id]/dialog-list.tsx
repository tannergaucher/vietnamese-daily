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

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, dialog.length);
  }, [dialog]);

  const startConversation = () => {
    const audio = audioRefs.current[0];
    if (audio) {
      setCurrentPlayingIndex(0);
      audio.play();
    }
  };

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
        onClick={startConversation}
        className="mx-4 px-6 py-4 mt-6 mb-10 bg-vietnam-red text-white rounded shadow hover:bg-white hover:text-black focus:outline-none text-xl"
      >
        Start Conversation
      </button>
      <ul>
        {dialog.map((dialog, index) => (
          <li
            ref={(li) => {
              liRefs.current[index] = li;
            }}
            className={`cursor-pointer transition-colors duration-200 p-4 rounded-lg shadow-md mb-4 
          ${
            currentPlayingIndex === index
              ? "bg-gray-700 text-white"
              : "hover:bg-gray-700 hover:text-white"
          }`}
            key={dialog.id}
            onClick={() => {
              if (currentPlayingIndex === index) {
                const audio = audioRefs.current[index];

                if (audio) {
                  audio.paused ? audio.play() : audio.pause();
                }
              } else {
                // Pause and reset all other audios
                audioRefs.current.forEach((audio, audioIndex) => {
                  if (audio && audioIndex !== index) {
                    audio.pause();
                    audio.currentTime = 0;
                  }
                });

                // Play the clicked audio
                const audio = audioRefs.current[index];
                if (audio) {
                  setCurrentPlayingIndex(index);
                  audio.play();
                }
              }
            }}
          >
            <small className="text-slate-500">
              <em>{dialog.speaker}</em>
            </small>{" "}
            <p className="text-2xl">{dialog.vietnamese}</p>
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
