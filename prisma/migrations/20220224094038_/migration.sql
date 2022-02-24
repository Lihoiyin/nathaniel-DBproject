/*
  Warnings:

  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LikedBooks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Records` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BookToLikedBooks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BookToRecords` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LikedBooks" DROP CONSTRAINT "LikedBooks_userId_fkey";

-- DropForeignKey
ALTER TABLE "Records" DROP CONSTRAINT "Records_userId_fkey";

-- DropForeignKey
ALTER TABLE "_BookToLikedBooks" DROP CONSTRAINT "_BookToLikedBooks_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToLikedBooks" DROP CONSTRAINT "_BookToLikedBooks_B_fkey";

-- DropForeignKey
ALTER TABLE "_BookToRecords" DROP CONSTRAINT "_BookToRecords_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToRecords" DROP CONSTRAINT "_BookToRecords_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "likes" TEXT[],
ADD COLUMN     "records" TEXT[];

-- DropTable
DROP TABLE "Book";

-- DropTable
DROP TABLE "LikedBooks";

-- DropTable
DROP TABLE "Records";

-- DropTable
DROP TABLE "_BookToLikedBooks";

-- DropTable
DROP TABLE "_BookToRecords";
