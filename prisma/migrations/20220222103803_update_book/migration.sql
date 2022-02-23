/*
  Warnings:

  - You are about to drop the column `bookId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `saleInHk` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Categorie` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AuthorToBook` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_BookToCategorie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AuthorToBook" DROP CONSTRAINT "_AuthorToBook_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToBook" DROP CONSTRAINT "_AuthorToBook_B_fkey";

-- DropForeignKey
ALTER TABLE "_BookToCategorie" DROP CONSTRAINT "_BookToCategorie_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToCategorie" DROP CONSTRAINT "_BookToCategorie_B_fkey";

-- DropIndex
DROP INDEX "Book_bookId_key";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "bookId",
DROP COLUMN "desc",
DROP COLUMN "image",
DROP COLUMN "price",
DROP COLUMN "saleInHk",
DROP COLUMN "title",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Book_id_seq";

-- DropTable
DROP TABLE "Author";

-- DropTable
DROP TABLE "Categorie";

-- DropTable
DROP TABLE "_AuthorToBook";

-- DropTable
DROP TABLE "_BookToCategorie";
