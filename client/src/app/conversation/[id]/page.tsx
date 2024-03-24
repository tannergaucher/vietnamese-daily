import { useState } from "react";

import { prisma } from "@/prisma";
import { audioBucket } from "@/storage";

import DialogList from "./dialog-list";

export default async function Page({ params }: { params: { id: string } }) {
  const conversation = await prisma.conversation.findUnique({
    where: { id: params.id },
    include: {
      dialog: true,
    },
  });

  if (!conversation) {
    return <div>Conversation not found</div>;
  }

  const sortedDialogPromises = conversation.dialog
    .sort((a, b) => a.index - b.index)
    .map(async (dialog) => {
      const [signedUrl] = await audioBucket
        .file(`${conversation.id}/${dialog.id}.wav`)
        .getSignedUrl({
          action: "read",
          expires: Date.now() + 1000 * 60 * 60,
        });

      return { ...dialog, audioSrc: signedUrl };
    });

  const sortedDialog = await Promise.all(sortedDialogPromises);

  return (
    <main>
      <h2 className="px-4 py-12 text-3xl font-semibold">
        {conversation.title}
      </h2>
      <DialogList dialog={sortedDialog} />
    </main>
  );
}
