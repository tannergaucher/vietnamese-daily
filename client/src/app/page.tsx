import Link from "next/link";

import { Card } from "@/app/components/card";
import { Grid } from "@/app/components/grid";
import { conversationImageBucket, getSignedUrl } from "../storage";
import { prisma } from "../prisma";

export default async function Home() {
  let conversations = await prisma.conversation.findMany({
    where: {
      published: true,
    },
    include: {
      situation: {
        select: {
          id: true,
          imageSrc: true,
          text: true,
        },
      },
    },
  });

  conversations = await Promise.all(
    conversations.map(async (conversation) => {
      if (!conversation.situation) {
        throw new Error("Situation is not found");
      }

      const signedUrl = await getSignedUrl({
        filePath: `${conversation.situation.id}.webp`,
        bucket: conversationImageBucket,
      });
      return {
        ...conversation,
        situation: { ...conversation.situation, imageSrc: signedUrl },
      };
    })
  );

  return (
    <Grid>
      {conversations.map((conversation) => {
        return (
          <Link href={`conversation/${conversation.id}`} key={conversation.id}>
            <Card
              size="medium"
              image={
                conversation.situation?.imageSrc
                  ? {
                      src: conversation.situation.imageSrc,
                      width: 1000,
                      height: 1000,
                      alt: "Conversation Image",
                    }
                  : undefined
              }
              small={conversation.createdAt.toDateString()}
              heading={conversation.title}
              subHeading={conversation.situation?.text}
            />
          </Link>
        );
      })}
    </Grid>
  );
}
