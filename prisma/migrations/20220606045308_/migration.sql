/*
  Warnings:

  - You are about to drop the `Follows` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Follows" DROP CONSTRAINT "Follows_followerId_fkey";

-- DropForeignKey
ALTER TABLE "Follows" DROP CONSTRAINT "Follows_userId_fkey";

-- DropTable
DROP TABLE "Follows";

-- CreateTable
CREATE TABLE "Follow" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "followerId" TEXT NOT NULL,

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Follow_userId_followerId_key" ON "Follow"("userId", "followerId");

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
