/*
  Warnings:

  - Changed the type of `type` on the `ConversationSituation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ConversationSituation" DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL;

-- DropEnum
DROP TYPE "ConversationSituationType";

-- CreateTable
CREATE TABLE "ConversationQuiz" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "comprehensionSection" JSONB NOT NULL,

    CONSTRAINT "ConversationQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ConversationQuiz_conversationId_key" ON "ConversationQuiz"("conversationId");

-- AddForeignKey
ALTER TABLE "ConversationQuiz" ADD CONSTRAINT "ConversationQuiz_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
