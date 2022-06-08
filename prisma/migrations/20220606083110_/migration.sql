/*
  Warnings:

  - You are about to drop the column `like` on the `PostLike` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[postId]` on the table `PostLike` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "PostLike" DROP COLUMN "like";

-- CreateIndex
CREATE UNIQUE INDEX "PostLike_postId_key" ON "PostLike"("postId");
