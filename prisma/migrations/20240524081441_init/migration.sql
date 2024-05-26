/*
  Warnings:

  - You are about to drop the column `typeEnum` on the `ConversationSituation` table. All the data in the column will be lost.
  - Changed the type of `type` on the `ConversationSituation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ConversationSituation" DROP COLUMN "typeEnum",
DROP COLUMN "type",
ADD COLUMN     "type" "ConversationSituationType" NOT NULL;
