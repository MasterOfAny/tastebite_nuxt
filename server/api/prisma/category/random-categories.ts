import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const countQuery = parseInt(getQuery(event).count as string) || 1;
    const dbCount = await prisma.category.count();
    const count = Math.min(countQuery, dbCount);
    const skip = Math.floor(Math.random() * (dbCount - count));
    return prisma.category.findMany({
        take: count,
        skip,
    });
});

