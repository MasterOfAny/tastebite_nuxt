-- CreateTable
CREATE TABLE "Recipes" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Recipes_pkey" PRIMARY KEY ("id")
);
