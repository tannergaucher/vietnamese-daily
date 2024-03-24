import { prisma } from "../prisma";

export default async function Home() {
  const conversations = await prisma.conversation.findMany();

  return (
    <main>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            <a href={`conversation/${conversation.id}`}>{conversation.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
