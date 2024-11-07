import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const perPageQuery = getQuery(event).per_page as string
    const pageQuery = getQuery(event).page as string
    const category = event.context?.params?.name
    const sort = getQuery(event).sort || 'recent'
    let order: { [key: string]: string } = { created_at: 'desc' }
    if (sort === 'oldest') {
        order = { created_at: 'asc' }
    } else if (sort === 'ratings') {
        order = { rating: 'desc' }
    }
    const recipes = await prisma.recipe.findMany({
        take: parseInt(perPageQuery || '10'),
        skip: (parseInt(pageQuery || '1') - 1) * parseInt(perPageQuery || '10'),
        where: {
            category: { name: { equals: category, mode: 'insensitive' } }
        },
        select: {
            id: true,
            name: true,
            rating: true,
            image: true,
            annotation: true,
            category: {
                select: {
                    name: true,
                    image: true,
                }
            }
        },
        orderBy: order
    })
    const total = await prisma.recipe.count({
        where: {
            category: { name: { equals: category, mode: 'insensitive' } }
        },
    })
    return {
        page: parseInt(pageQuery || '1'),
        total,
        pagesLeft: Math.ceil(total / parseInt(perPageQuery || '10')) - parseInt(pageQuery || '1'),
        perPage: parseInt(perPageQuery || '10'),
        sort: sort,
        recipes,
    }
})

