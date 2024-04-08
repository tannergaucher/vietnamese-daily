import { prisma } from "@/prisma";
import { dialogAudioBucket, wordAudioBucket } from "@/storage";

import DialogList from "./dialog-list";

export default async function Page({ params }: { params: { id: string } }) {
  const conversation = await prisma.conversation.findUnique({
    where: { id: params.id },
    include: {
      dialog: {
        include: {
          words: true,
        },
      },
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

      return {
        ...dialog,
        audioSrc: signedUrl,
        words: await Promise.all(
          dialog.words.map(async (word) => {
            const [signedUrl] = await wordAudioBucket
              .file(`${dialog.gender}/${word.vietnamese}.wav`)
              .getSignedUrl({
                action: "read",
                expires: Date.now() + 1000 * 60 * 60,
              });

            return {
              ...word,
              signedUrl,
            };
          })
        ),
      };
    });

  const sortedDialog = await Promise.all(sortedDialogPromises);

  return (
    <main>
      <h5 className="p-4">{new Date(conversation.createdAt).toDateString()}</h5>
      <h2 className="px-4 py-8 text-3xl font-semibold">{conversation.title}</h2>
      <DialogList dialog={sortedDialog} />
    </main>
  );
}
