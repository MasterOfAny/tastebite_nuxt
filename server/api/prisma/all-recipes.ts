import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    return prisma.recipe.findMany({
        select: {
            id: true,
            name: true,
            image: true,
            trend: true,
        }
    });
});
