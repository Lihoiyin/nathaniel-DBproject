/*
  Warnings:

  - You are about to drop the `_BookToLikedBooks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BookToRecords` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BookToLikedBooks" DROP CONSTRAINT "_BookToLikedBooks_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToLikedBooks" DROP CONSTRAINT "_BookToLikedBooks_B_fkey";

-- DropForeignKey
ALTER TABLE "_BookToRecords" DROP CONSTRAINT "_BookToRecords_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToRecords" DROP CONSTRAINT "_BookToRecords_B_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "likedBooksId" INTEGER,
ADD COLUMN     "recordsId" INTEGER;

-- DropTable
DROP TABLE "_BookToLikedBooks";

-- DropTable
DROP TABLE "_BookToRecords";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_likedBooksId_fkey" FOREIGN KEY ("likedBooksId") REFERENCES "LikedBooks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_recordsId_fkey" FOREIGN KEY ("recordsId") REFERENCES "Records"("id") ON DELETE SET NULL ON UPDATE CASCADE;
