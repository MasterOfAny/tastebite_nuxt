import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const countQuery = getQuery(event).count as string;
    const dbCount = await prisma.category.count()
    const count = Math.min(parseInt(countQuery || '1'), dbCount)
    const skip = Math.max(0, Math.floor(Math.random() * (dbCount - count)))
    const res = await prisma.category.findMany({
        take: count,
        skip: skip,
    });
    if (count === 1) {
        return res[0]
    } else {
        return res
    }
})
