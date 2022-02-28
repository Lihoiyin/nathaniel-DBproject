/*
  Warnings:

  - You are about to drop the column `recordsId` on the `BookRecord` table. All the data in the column will be lost.
  - You are about to drop the column `likedBooksId` on the `LikedBook` table. All the data in the column will be lost.
  - You are about to drop the `BookRecords` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LikedBooks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookRecord" DROP CONSTRAINT "BookRecord_recordsId_fkey";

-- DropForeignKey
ALTER TABLE "BookRecords" DROP CONSTRAINT "BookRecords_userId_fkey";

-- DropForeignKey
ALTER TABLE "LikedBook" DROP CONSTRAINT "LikedBook_likedBooksId_fkey";

-- DropForeignKey
ALTER TABLE "LikedBooks" DROP CONSTRAINT "LikedBooks_userId_fkey";

-- AlterTable
ALTER TABLE "BookRecord" DROP COLUMN "recordsId",
ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "LikedBook" DROP COLUMN "likedBooksId",
ADD COLUMN     "userId" INTEGER;

-- DropTable
DROP TABLE "BookRecords";

-- DropTable
DROP TABLE "LikedBooks";

-- AddForeignKey
ALTER TABLE "LikedBook" ADD CONSTRAINT "LikedBook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRecord" ADD CONSTRAINT "BookRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
