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
        },
      },
    },
  });

  return (
    <main>
      {conversations.map((conversation) => (
        <Link href={`conversation/${conversation.id}`} key={conversation.id}>
          {conversation.situation?.imageSrc ? (
            <Image
              src={conversation.situation.imageSrc}
              width={1000}
              height={1000}
              alt="Conversation Image"
            />
          ) : // <img
          //   src={conversation.situation.imageSrc}
          //   alt="Conversation Image"
          // />
          null}
          <small className="m-4">{conversation.createdAt.toDateString()}</small>
          {conversation.title}
        </Link>
      ))}
    </main>
  );
}
