import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const countQuery = getQuery(event).count as string;
    const count = Math.min(parseInt(countQuery || '1'), await prisma.recipe.count());
    const res = await prisma.recipe.findMany({
        take: count,
        select: {
            id: true,
            name: true,
            rating: true,
            image: true,
            annotation: true,
            trend: true,
        },
        orderBy: {
            created_at: 'desc'
        },
        skip: Math.floor(Math.random() * (await prisma.recipe.count() - count))
    });
    return count === 1 ? res[0] : res;
});

