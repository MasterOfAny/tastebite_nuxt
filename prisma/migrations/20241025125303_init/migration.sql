/*
  Warnings:

  - Added the required column `directions` to the `recipes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stats` to the `recipes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recipes" ADD COLUMN     "directions" JSONB NOT NULL,
ADD COLUMN     "stats" JSONB NOT NULL;
