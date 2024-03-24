/*
  Warnings:

  - Added the required column `englishDescription` to the `Conversation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Conversation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vietnameseDescription` to the `Conversation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Conversation" ADD COLUMN     "englishDescription" STRING NOT NULL;
ALTER TABLE "Conversation" ADD COLUMN     "title" STRING NOT NULL;
ALTER TABLE "Conversation" ADD COLUMN     "vietnameseDescription" STRING NOT NULL;
