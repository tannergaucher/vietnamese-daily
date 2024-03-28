-- CreateTable
CREATE TABLE "ConversationSituation" (
    "id" STRING NOT NULL,
    "text" STRING NOT NULL,
    "conversationId" STRING,

    CONSTRAINT "ConversationSituation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConversationSituation_conversationId_key" ON "ConversationSituation"("conversationId");

-- AddForeignKey
ALTER TABLE "ConversationSituation" ADD CONSTRAINT "ConversationSituation_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
