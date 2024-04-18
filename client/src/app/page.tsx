import Link from "next/link";
import Image from "next/image";

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
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2">
        {conversations.map((conversation) => {
          console.log(conversation.situation?.imageSrc);
          return (
            <Link
              href={`conversation/${conversation.id}`}
              key={conversation.id}
              className="hover:text-accent-2-light dark:hover:text-accent-1-dark"
            >
              <div className="border border-bg-1-light dark:border-accent-1-dark dark:hover:border-accent-1-dark rounded-lg p-3 box-border shadow-lg h-auto">
                {conversation.situation?.imageSrc ? (
                  <Image
                    src={conversation.situation.imageSrc}
                    width={1000}
                    height={1000}
                    alt="Conversation Image"
                    className="rounded-lg"
                  />
                ) : null}
                <small className="block  mt-3 mb-2 text-gray-600 dark:text-gray-300">
                  {conversation.createdAt.toDateString()}
                </small>
                <h2 className="text-2xl font-semibold mb-2">
                  {conversation.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {conversation.situation?.text}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
