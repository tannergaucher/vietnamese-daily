import { prisma } from "@/prisma";
import {
  dialogAudioBucket,
  wordAudioBucket,
  getSignedUrl,
  conversationImageBucket,
} from "@/storage";

import { Container } from "@/components/container";
import { Card } from "@/components/card";

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
    <Container>
      <Card
        size="large"
        image={
          conversation.situation?.imageSrc
            ? {
                src: conversation.situation.imageSrc,
                width: 2000,
                height: 2000,
                alt: "Conversation Image",
              }
            : undefined
        }
        small={new Date(conversation.createdAt).toDateString()}
        heading={conversation.title}
        subHeading={conversation.situation?.text}
      >
        <DialogList dialog={sortedDialog} />
      </Card>
    </Container>
  );
}
