/*
  Warnings:

  - The `directions` column on the `recipes` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "recipes" DROP COLUMN "directions",
ADD COLUMN     "directions" TEXT[];
