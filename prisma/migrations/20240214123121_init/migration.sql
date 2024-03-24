/*
  Warnings:

  - You are about to drop the column `topicId` on the `Dialog` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Topic" DROP CONSTRAINT "Topic_id_fkey";

-- DropIndex
DROP INDEX "Dialog_topicId_key";

-- AlterTable
ALTER TABLE "Dialog" DROP COLUMN "topicId";
