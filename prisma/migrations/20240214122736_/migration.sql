-- CreateTable
CREATE TABLE "Post" (
    "id" STRING NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" STRING NOT NULL,
    "description" STRING NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conversation" (
    "id" STRING NOT NULL,
    "postId" STRING NOT NULL,

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dialog" (
    "id" STRING NOT NULL,
    "index" INT4 NOT NULL,
    "speaker" STRING NOT NULL,
    "scene" STRING,
    "korean" STRING NOT NULL,
    "audioSrc" STRING,
    "conversationId" STRING NOT NULL,
    "topicId" STRING,

    CONSTRAINT "Dialog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" STRING NOT NULL,
    "type" STRING NOT NULL,
    "theme" STRING NOT NULL,
    "topic" STRING NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Dialog_topicId_key" ON "Dialog"("topicId");

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dialog" ADD CONSTRAINT "Dialog_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_id_fkey" FOREIGN KEY ("id") REFERENCES "Dialog"("topicId") ON DELETE RESTRICT ON UPDATE CASCADE;
