-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateTable
CREATE TABLE "Conversation" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOL NOT NULL DEFAULT false,
    "date" TIMESTAMP(3),

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversationSituation" (
    "id" STRING NOT NULL,
    "text" STRING NOT NULL,
    "type" STRING NOT NULL,
    "conversationId" STRING,
    "imageSrc" STRING,

    CONSTRAINT "ConversationSituation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversationQuiz" (
    "id" STRING NOT NULL,
    "conversationId" STRING NOT NULL,
    "comprehensionSection" JSONB NOT NULL,

    CONSTRAINT "ConversationQuiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dialog" (
    "id" STRING NOT NULL,
    "index" INT4 NOT NULL,
    "speaker" STRING NOT NULL,
    "gender" "Gender" NOT NULL,
    "scene" STRING,
    "vietnamese" STRING NOT NULL,
    "audioSrc" STRING,
    "conversationId" STRING NOT NULL,

    CONSTRAINT "Dialog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Word" (
    "vietnamese" STRING NOT NULL,
    "maleSrc" STRING,
    "femaleSrc" STRING,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("vietnamese")
);

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "email" STRING NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DialogToWord" (
    "A" STRING NOT NULL,
    "B" STRING NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ConversationSituation_text_key" ON "ConversationSituation"("text");

-- CreateIndex
CREATE UNIQUE INDEX "ConversationSituation_conversationId_key" ON "ConversationSituation"("conversationId");

-- CreateIndex
CREATE UNIQUE INDEX "ConversationQuiz_conversationId_key" ON "ConversationQuiz"("conversationId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_DialogToWord_AB_unique" ON "_DialogToWord"("A", "B");

-- CreateIndex
CREATE INDEX "_DialogToWord_B_index" ON "_DialogToWord"("B");

-- AddForeignKey
ALTER TABLE "ConversationSituation" ADD CONSTRAINT "ConversationSituation_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConversationQuiz" ADD CONSTRAINT "ConversationQuiz_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dialog" ADD CONSTRAINT "Dialog_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DialogToWord" ADD CONSTRAINT "_DialogToWord_A_fkey" FOREIGN KEY ("A") REFERENCES "Dialog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DialogToWord" ADD CONSTRAINT "_DialogToWord_B_fkey" FOREIGN KEY ("B") REFERENCES "Word"("vietnamese") ON DELETE CASCADE ON UPDATE CASCADE;
