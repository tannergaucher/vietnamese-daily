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
      <div className="grid grid-cols-3 gap-4 p-4">
        {conversations.map((conversation, index) => (
          <div
            className="border border-gray-300 rounded p-4 box-border"
            key={conversation.id}
          >
            <Link href={`conversation/${conversation.id}`}>
              {conversation.situation?.imageSrc ? (
                <Image
                  src={conversation.situation.imageSrc}
                  width={1000}
                  height={1000}
                  alt="Conversation Image"
                />
              ) : null}
              <small>{conversation.createdAt.toDateString()}</small>
              <h2>{conversation.title}</h2>
              <p>{conversation.situation?.text}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
