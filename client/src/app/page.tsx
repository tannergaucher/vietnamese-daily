import { prisma } from "../prisma";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const conversations = await prisma.conversation.findMany({
    where: {
      published: true,
    },
    include: {
      situation: {
        select: {
          imageSrc: true,
          text: true,
        },
      },
    },
  });

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {conversations.map((conversation) => (
          <Link href={`conversation/${conversation.id}`} key={conversation.id}>
            <div className="border rounded-lg p-4 box-border shadow-lg h-auto">
              {conversation.situation?.imageSrc ? (
                <Image
                  src={conversation.situation.imageSrc}
                  width={1000}
                  height={1000}
                  alt="Conversation Image"
                  className="rounded-lg"
                />
              ) : null}
              <small className="block my-2 text-gray-600 dark:text-gray-300">
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
        ))}
      </div>
    </main>
  );
}
