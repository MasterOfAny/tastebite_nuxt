/*
  Warnings:

  - You are about to drop the `_NutritionFactToRecipe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nutrition_facts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `nutrition` to the `recipes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_NutritionFactToRecipe" DROP CONSTRAINT "_NutritionFactToRecipe_A_fkey";

-- DropForeignKey
ALTER TABLE "_NutritionFactToRecipe" DROP CONSTRAINT "_NutritionFactToRecipe_B_fkey";

-- AlterTable
ALTER TABLE "recipes" ADD COLUMN     "nutrition" JSONB NOT NULL;

-- DropTable
DROP TABLE "_NutritionFactToRecipe";

-- DropTable
DROP TABLE "nutrition_facts";
