import { prisma } from "@/prisma";
import {
  dialogAudioBucket,
  wordAudioBucket,
  getSignedUrl,
  conversationImageBucket,
} from "@/storage";
import Image from "next/image";

import DialogList from "./dialog-list";

export default async function Page({ params }: { params: { id: string } }) {
  const conversation = await prisma.conversation.findUnique({
    where: { id: params.id },
    include: {
      situation: {
        select: {
          id: true,
          imageSrc: true,
          text: true,
        },
      },
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

  if (conversation.situation) {
    conversation.situation.imageSrc = await getSignedUrl({
      filePath: `${conversation.situation.id}.webp`,
      bucket: conversationImageBucket,
    });
  }

  const sortedDialogPromises = conversation.dialog
    .sort((a, b) => a.index - b.index)
    .map(async (dialog) => {
      return {
        ...dialog,
        audioSrc: await getSignedUrl({
          bucket: dialogAudioBucket,
          filePath: `${conversation.id}/${dialog.id}.wav`,
        }),
        words: await Promise.all(
          dialog.words.map(async (word) => {
            return {
              ...word,
              signedUrl: await getSignedUrl({
                bucket: wordAudioBucket,
                filePath: `${dialog.gender}/${word.vietnamese}.wav`,
              }),
            };
          })
        ),
      };
    });

  const sortedDialog = await Promise.all(sortedDialogPromises);

  return (
    <div className="container mx-auto mb-12">
      <p className="mt-6 mx-4 text-gray-600 dark:text-gray-300 text-sm">
        <time>{new Date(conversation.createdAt).toDateString()}</time>
      </p>
      <h2 className="px-4 py-6 text-4xl font-bold">{conversation.title}</h2>
      <h3 className="px-4  mb-12 text-lg text-gray-600 dark:text-gray-300">
        {conversation.situation?.text}
      </h3>
      {conversation.situation?.imageSrc ? (
        <Image
          src={conversation.situation?.imageSrc}
          width={1536}
          height={1536}
          alt="Situation image"
        />
      ) : null}
      <DialogList dialog={sortedDialog} />
    </div>
  );
}
