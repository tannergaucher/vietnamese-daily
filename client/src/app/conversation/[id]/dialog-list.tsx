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
    setCurrentPlayingIndex(0);

    const audio = audioRefs.current[0];
    if (audio) {
      audio.play();
    }
  };

  const playNext = (index: number) => {
    setCurrentPlayingIndex(index + 1);

    const nextAudio = audioRefs.current[index + 1];
    if (nextAudio) {
      nextAudio.play();
    }

    const nextLi = liRefs.current[index + 1];
    if (nextLi) {
      nextLi.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
      <button
        onClick={startConversation}
        className="mx-4 px-6 py-4 mb-8 bg-green-500 text-white rounded shadow hover:bg-green-600 active:bg-green-700 focus:outline-none"
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
              setCurrentPlayingIndex(index);
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
                audio.play();
              }
            }}
          >
            <small>
              <em>{dialog.speaker}</em>
            </small>{" "}
            <p className="text-xl">{dialog.vietnamese}</p>
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
