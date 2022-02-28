/*
  Warnings:

  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Records` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_likedBooksId_fkey";

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_recordsId_fkey";

-- DropForeignKey
ALTER TABLE "Records" DROP CONSTRAINT "Records_userId_fkey";

-- DropTable
DROP TABLE "Book";

-- DropTable
DROP TABLE "Records";

-- CreateTable
CREATE TABLE "BookRecords" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BookRecords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LikedBook" (
    "id" SERIAL NOT NULL,
    "bookId" TEXT NOT NULL,
    "likedBooksId" INTEGER,

    CONSTRAINT "LikedBook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookRecord" (
    "id" SERIAL NOT NULL,
    "bookId" TEXT NOT NULL,
    "recordsId" INTEGER,

    CONSTRAINT "BookRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BookRecords_userId_key" ON "BookRecords"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "LikedBook_bookId_key" ON "LikedBook"("bookId");

-- CreateIndex
CREATE UNIQUE INDEX "BookRecord_bookId_key" ON "BookRecord"("bookId");

-- AddForeignKey
ALTER TABLE "BookRecords" ADD CONSTRAINT "BookRecords_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikedBook" ADD CONSTRAINT "LikedBook_likedBooksId_fkey" FOREIGN KEY ("likedBooksId") REFERENCES "LikedBooks"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookRecord" ADD CONSTRAINT "BookRecord_recordsId_fkey" FOREIGN KEY ("recordsId") REFERENCES "BookRecords"("id") ON DELETE SET NULL ON UPDATE CASCADE;
