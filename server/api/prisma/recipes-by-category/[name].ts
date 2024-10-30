import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const countQuery = getQuery(event).count as string;
    const category = event.context?.params?.name
    const dbCount = await prisma.recipe.count()
    const count = Math.min(parseInt(countQuery || '1'), dbCount)
    const skip = Math.max(0, Math.floor(Math.random() * (dbCount - count)))
    const res = await prisma.recipe.findMany({
        ...(countQuery ? { take: count, skip: skip } : {}),
        where: {
            category: { name: { equals: category, mode: 'insensitive' } }
        },
        include: {
            category: {
                select: {
                    name: true,
                    image: true,
                }
            }
        }
    })
    return res || { error: 'not-found' }
})