import React from "react";

import { Card } from "@/app/components/card";
import { Container } from "@/app/components/container";
import { formatDate } from "@/app/utils/format-date";
import { prisma } from "@/prisma";
import { dialogAudioBucket, wordAudioBucket, getSignedUrl } from "@/storage";

import { CreateConversationQuizResponse } from "../../../../../cloud-functions/create-conversation-quiz/conversationQuizSchema";

import { Dialog } from "./dialog";

export default async function Page({ params }: { params: { id: string } }) {
  const conversation = await prisma.conversation.findUnique({
    where: { id: params.id },
    include: {
      conversationQuiz: true,
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
          conversation.situation
            ? {
                src: `https://storage.googleapis.com/conversation-dalee-images/${conversation.situation.id}.webp`,
                width: 2000,
                height: 2000,
                alt: "Conversation Image",
                priority: true,
              }
            : undefined
        }
        small={
          conversation.date
            ? formatDate(conversation.date.toISOString())
            : undefined
        }
        heading={conversation.title}
        subHeading={conversation.situation?.text}
      >
        <Dialog
          dialog={sortedDialog}
          comprehensionQuestions={
            conversation.conversationQuiz
              ?.comprehensionSection as unknown as CreateConversationQuizResponse["conversationQuiz"]["comprehensionQuestions"]
          }
        />
      </Card>
    </Container>
  );
}
