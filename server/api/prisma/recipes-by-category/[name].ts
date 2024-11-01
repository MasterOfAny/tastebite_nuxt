import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const perPageQuery = getQuery(event).per_page as string
    const orderQuery = getQuery(event).order as string
    const pageQuery = getQuery(event).page as string
    const category = event.context?.params?.name
    const [dbCount, res] = await Promise.all([
        prisma.recipe.count({
            where: {
                category: { name: { equals: category, mode: 'insensitive' } }
            },
        }),
        prisma.recipe.findMany({
            ...(perPageQuery ? { take: parseInt(perPageQuery || '10'), skip: (parseInt(pageQuery || '1') - 1) * parseInt(perPageQuery || '10') } : {}),
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
            },
            orderBy: {
                created_at: 'desc'
            }
        })
    ])
    return {
        page: parseInt(pageQuery || '1'),
        total: dbCount,
        pagesLeft: Math.ceil(dbCount / parseInt(perPageQuery || '10')) - parseInt(pageQuery || '1'),
        perPage: parseInt(perPageQuery || '10'),
        sort: 'recent',
        recipes: res
    }
})
