-- CreateTable
CREATE TABLE "collections" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_recipesByCollection" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_recipesByCollection_AB_unique" ON "_recipesByCollection"("A", "B");

-- CreateIndex
CREATE INDEX "_recipesByCollection_B_index" ON "_recipesByCollection"("B");

-- AddForeignKey
ALTER TABLE "_recipesByCollection" ADD CONSTRAINT "_recipesByCollection_A_fkey" FOREIGN KEY ("A") REFERENCES "collections"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_recipesByCollection" ADD CONSTRAINT "_recipesByCollection_B_fkey" FOREIGN KEY ("B") REFERENCES "recipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
