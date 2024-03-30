-- AlterTable
ALTER TABLE "Conversation" ADD COLUMN     "date" TIMESTAMP(3);
ALTER TABLE "Conversation" ADD COLUMN     "published" BOOL NOT NULL DEFAULT false;
