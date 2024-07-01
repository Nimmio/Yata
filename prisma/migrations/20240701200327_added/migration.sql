-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_groupId_fkey";

-- AlterTable
ALTER TABLE "Todo" ALTER COLUMN "groupId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
