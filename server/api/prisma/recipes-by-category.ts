import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const category = (getQuery(event).category as string).toLowerCase()
    const res = await prisma.recipe.findMany({
        take: 3,
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