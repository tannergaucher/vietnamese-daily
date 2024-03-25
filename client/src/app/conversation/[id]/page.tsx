import { prisma } from "@/prisma";
import { dialogAudioBucket, wordAudioBucket } from "@/storage";

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
      const [signedUrl] = await dialogAudioBucket
        .file(`${conversation.id}/${dialog.id}.wav`)
        .getSignedUrl({
          action: "read",
          expires: Date.now() + 1000 * 60 * 60,
        });

      return { ...dialog, audioSrc: signedUrl };
    });

  const sortedDialog = await Promise.all(sortedDialogPromises);

  const dialogIds = sortedDialog.map((dialog) => dialog.id);

  const words = await prisma.word.findMany({
    where: {
      dialog: {
        every: {
          id: {
            in: dialogIds,
          },
        },
      },
    },
  });

  // get signed urls for dialog words
  const wordPromises = words.map(async (word) => {
    const [maleSignedUrl] = await wordAudioBucket
      .file(`male/${word.vietnamese}.wav`)
      .getSignedUrl({
        action: "read",
        expires: Date.now() + 1000 * 60 * 60,
      });

    const [femaleSignedUrl] = await wordAudioBucket
      .file(`female/${word.vietnamese}.wav`)
      .getSignedUrl({
        action: "read",
        expires: Date.now() + 1000 * 60 * 60,
      });

    return { ...word, maleSrc: maleSignedUrl, femaleSrc: femaleSignedUrl };
  });

  const dialogWords = await Promise.all(wordPromises);

  return (
    <main>
      <h5 className="p-4">{new Date(conversation.createdAt).toDateString()}</h5>
      <h2 className="px-4 py-8 text-3xl font-semibold">{conversation.title}</h2>
      <DialogList dialog={sortedDialog} dialogWords={dialogWords} />
    </main>
  );
}
