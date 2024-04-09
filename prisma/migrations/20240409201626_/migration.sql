/*
  Warnings:

  - A unique constraint covering the columns `[text]` on the table `ConversationSituation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ConversationSituation_text_key" ON "ConversationSituation"("text");
