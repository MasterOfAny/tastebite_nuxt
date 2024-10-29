import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const countQuery = getQuery(event).count as string;
    const dbCount = await prisma.recipe.count()
    const count = Math.min(parseInt(countQuery || '1'), dbCount)
    const skip = Math.max(0, Math.floor(Math.random() * (dbCount - count)))
    const res = await prisma.recipe.findMany({
        take: count,
        skip: skip,
        orderBy: {
            created_at: 'desc'
        }
    });
    if (count === 1) {
        return res[0]
    } else {
        return res
    }
})
