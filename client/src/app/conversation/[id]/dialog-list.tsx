"use client";

import { useRef, useEffect } from "react";

import { Dialog as DialogModel } from "@/generated";

type Dialog = DialogModel & { audioSrc: string };

export default function DialogList({ dialog }: { dialog: Dialog[] }) {
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  useEffect(() => {
    audioRefs.current = audioRefs.current.slice(0, dialog.length);
  }, [dialog]);

  const startConversation = () => {
    const audio = audioRefs.current[0];
    if (audio) {
      audio.play();
    }
  };

  const playNext = (index: number) => {
    const nextAudio = audioRefs.current[index + 1];
    if (nextAudio) {
      nextAudio.play();
    }
  };

  return (
    <section>
      <button onClick={startConversation}>Start Conversation</button>
      <ul>
        {dialog.map((dialog, index) => (
          <li key={dialog.id}>
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
