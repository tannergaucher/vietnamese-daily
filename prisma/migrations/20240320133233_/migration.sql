/*
  Warnings:

  - You are about to drop the column `postId` on the `Conversation` table. All the data in the column will be lost.
  - You are about to drop the column `korean` on the `Dialog` table. All the data in the column will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Topic` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `vietnamese` to the `Dialog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Conversation" DROP CONSTRAINT "Conversation_postId_fkey";

-- AlterTable
ALTER TABLE "Conversation" DROP COLUMN "postId";

-- AlterTable
ALTER TABLE "Dialog" DROP COLUMN "korean";
ALTER TABLE "Dialog" ADD COLUMN     "vietnamese" STRING NOT NULL;

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Topic";
