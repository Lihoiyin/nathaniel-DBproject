/*
  Warnings:

  - A unique constraint covering the columns `[content]` on the table `Comment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `content` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "image" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Comment_content_key" ON "Comment"("content");
