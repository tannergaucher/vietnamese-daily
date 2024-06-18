import React from "react";

import { Card } from "@/app/components/card";
import { Container } from "@/app/components/container";
import { Gender } from "@/generated";

import { DialogList } from "./dialog-list";

export default function Loading() {
  return (
    <Container>
      <Card
        heading="Loading Conversation..."
        size="large"
        image={{
          src: "https://storage.googleapis.com/conversation-dalee-images/37043f3c-ed4c-4b55-86f2-57e7d8faf14f.webp",
          width: 2000,
          height: 2000,
          alt: "Loading",
          priority: true,
        }}
      >
        <DialogList
          loading
          dialog={[
            {
              id: "sdsdf0",
              index: 0,
              speaker: "Speaker 1",
              gender: Gender.male,
              scene: "sdf",
              vietnamese: "...",
              audioSrc: "sdf",
              conversationId: "sdf",
              words: [],
            },
            {
              id: "sdsdf1",
              index: 1,
              speaker: "Speaker 2",
              gender: Gender.male,
              scene: "sdf",
              vietnamese: "...",
              audioSrc: "sdf",
              conversationId: "sdf",
              words: [],
            },
            {
              id: "sdsdf2",
              index: 2,
              speaker: "Speaker 1",
              gender: Gender.male,
              scene: "sdf",
              vietnamese: "...",
              audioSrc: "sdf",
              conversationId: "sdf",
              words: [],
            },
            {
              id: "sdsdf3",
              index: 3,
              speaker: "Speaker 2",
              gender: Gender.male,
              scene: "sdf",
              vietnamese: "...",
              audioSrc: "sdf",
              conversationId: "sdf",
              words: [],
            },
            {
              id: "sdsdf4",
              index: 4,
              speaker: "Speaker 1",
              gender: Gender.male,
              scene: "sdf",
              vietnamese: "...",
              audioSrc: "sdf",
              conversationId: "sdf",
              words: [],
            },
          ]}
        />
      </Card>
    </Container>
  );
}
