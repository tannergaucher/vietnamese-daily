/*
  Warnings:

  - You are about to drop the column `gender` on the `Dialog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Dialog" DROP COLUMN "gender";

-- DropEnum
DROP TYPE "Gender";
