/*
  Warnings:

  - You are about to drop the `_recipesByCollection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_recipesByFavorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `collections` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_recipesByCollection" DROP CONSTRAINT "_recipesByCollection_A_fkey";

-- DropForeignKey
ALTER TABLE "_recipesByCollection" DROP CONSTRAINT "_recipesByCollection_B_fkey";

-- DropForeignKey
ALTER TABLE "_recipesByFavorite" DROP CONSTRAINT "_recipesByFavorite_A_fkey";

-- DropForeignKey
ALTER TABLE "_recipesByFavorite" DROP CONSTRAINT "_recipesByFavorite_B_fkey";

-- DropForeignKey
ALTER TABLE "collections" DROP CONSTRAINT "collections_user_id_fkey";

-- DropTable
DROP TABLE "_recipesByCollection";

-- DropTable
DROP TABLE "_recipesByFavorite";

-- DropTable
DROP TABLE "collections";

-- CreateTable
CREATE TABLE "_UserFavorites" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UserFavorites_AB_unique" ON "_UserFavorites"("A", "B");

-- CreateIndex
CREATE INDEX "_UserFavorites_B_index" ON "_UserFavorites"("B");

-- AddForeignKey
ALTER TABLE "_UserFavorites" ADD CONSTRAINT "_UserFavorites_A_fkey" FOREIGN KEY ("A") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFavorites" ADD CONSTRAINT "_UserFavorites_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
