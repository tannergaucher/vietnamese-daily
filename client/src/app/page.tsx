import { prisma } from "../prisma";
import Link from "next/link";

export default async function Home() {
  const conversations = await prisma.conversation.findMany();

  return (
    <main>
      <ul className="my-10">
        {conversations.map((conversation) => (
          <li
            key={conversation.id}
            className="cursor-pointer hover:bg-gray-700 hover:rounded-lg"
          >
            <small>{conversation.createdAt.toDateString()}</small>
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
