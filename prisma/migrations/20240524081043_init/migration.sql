-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "ConversationSituationType" AS ENUM ('AT_THE_RESTAURANT', 'AT_THE_CAFE', 'AT_THE_STREET_FOOD_VENDOR_STALL', 'AT_THE_MARKET', 'ASKING_A_LOCAL_FOR_DIRECTIONS', 'A_HEALTH_RELATED_SITUATION', 'AN_EMERGENCY_SITUATION', 'AT_THE_HOTEL', 'SHOPPING_AT_A_STORE');

-- CreateTable
CREATE TABLE "Conversation" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "date" TIMESTAMP(3),

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConversationSituation" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "typeEnum" "ConversationSituationType",
    "conversationId" TEXT,
    "imageSrc" TEXT,

    CONSTRAINT "ConversationSituation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dialog" (
    "id" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "speaker" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "scene" TEXT,
    "vietnamese" TEXT NOT NULL,
    "audioSrc" TEXT,
    "conversationId" TEXT NOT NULL,

    CONSTRAINT "Dialog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Word" (
    "vietnamese" TEXT NOT NULL,
    "maleSrc" TEXT,
    "femaleSrc" TEXT,

    CONSTRAINT "Word_pkey" PRIMARY KEY ("vietnamese")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DialogToWord" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ConversationSituation_text_key" ON "ConversationSituation"("text");

-- CreateIndex
CREATE UNIQUE INDEX "ConversationSituation_conversationId_key" ON "ConversationSituation"("conversationId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_DialogToWord_AB_unique" ON "_DialogToWord"("A", "B");

-- CreateIndex
CREATE INDEX "_DialogToWord_B_index" ON "_DialogToWord"("B");

-- AddForeignKey
ALTER TABLE "ConversationSituation" ADD CONSTRAINT "ConversationSituation_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dialog" ADD CONSTRAINT "Dialog_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DialogToWord" ADD CONSTRAINT "_DialogToWord_A_fkey" FOREIGN KEY ("A") REFERENCES "Dialog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DialogToWord" ADD CONSTRAINT "_DialogToWord_B_fkey" FOREIGN KEY ("B") REFERENCES "Word"("vietnamese") ON DELETE CASCADE ON UPDATE CASCADE;
