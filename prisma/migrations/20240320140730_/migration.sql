/*
  Warnings:

  - You are about to drop the column `englishDescription` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the column `vietnameseDescription` on the `Conversation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "englishDescription";
ALTER TABLE "Conversation" DROP COLUMN "vietnameseDescription";
