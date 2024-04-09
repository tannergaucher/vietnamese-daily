import { prisma } from "../prisma";
import Link from "next/link";

export default async function Home() {
  const conversations = await prisma.conversation.findMany({
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
      <ul className="my-10">
        {conversations.map((conversation) => (
          <li
            key={conversation.id}
            className="cursor-pointer hover:bg-gray-700 hover:rounded-lg"
          >
            {conversation.situation?.imageSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={conversation.situation.imageSrc}
                alt="Conversation Image"
              />
            ) : null}
            <small className="m-4">
              {conversation.createdAt.toDateString()}
            </small>
            <Link
              href={`conversation/${conversation.id}`}
              className="block p-4 transition-colors duration-200 hover:text-white text-3xl"
            >
              {conversation.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
