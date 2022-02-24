/*
  Warnings:

  - You are about to drop the column `likes` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `records` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "likes",
DROP COLUMN "records";

-- CreateTable
CREATE TABLE "LikedBooks" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "LikedBooks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Records" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookToLikedBooks" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_BookToRecords" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "LikedBooks_userId_key" ON "LikedBooks"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Records_userId_key" ON "Records"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Book_bookId_key" ON "Book"("bookId");

-- CreateIndex
CREATE UNIQUE INDEX "_BookToLikedBooks_AB_unique" ON "_BookToLikedBooks"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToLikedBooks_B_index" ON "_BookToLikedBooks"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_BookToRecords_AB_unique" ON "_BookToRecords"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToRecords_B_index" ON "_BookToRecords"("B");

-- AddForeignKey
ALTER TABLE "LikedBooks" ADD CONSTRAINT "LikedBooks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Records" ADD CONSTRAINT "Records_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToLikedBooks" ADD FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToLikedBooks" ADD FOREIGN KEY ("B") REFERENCES "LikedBooks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToRecords" ADD FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToRecords" ADD FOREIGN KEY ("B") REFERENCES "Records"("id") ON DELETE CASCADE ON UPDATE CASCADE;
