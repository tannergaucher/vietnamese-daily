"use client";

import { Dialog as DialogModel } from "@/generated";

type Dialog = DialogModel & { audioSrc: string };

export default function DialogList({ dialog }: { dialog: Dialog[] }) {
  return (
    <section>
      <button>Start Conversation</button>
      <ul>
        {dialog.map((dialog) => (
          <li key={dialog.id}>
            <small>
              <em>{dialog.speaker}</em>
            </small>{" "}
            <p className="text-xl">{dialog.vietnamese}</p>
            <audio src={dialog.audioSrc} preload="auto"></audio>
          </li>
        ))}
      </ul>
    </section>
  );
}
