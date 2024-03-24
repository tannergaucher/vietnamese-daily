/*
  Warnings:

  - Added the required column `gender` to the `Dialog` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- AlterTable
ALTER TABLE "Dialog" ADD COLUMN     "gender" "Gender" NOT NULL;
