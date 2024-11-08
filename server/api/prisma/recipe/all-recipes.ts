import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const perPageQuery = getQuery(event).per_page as string
    const pageQuery = getQuery(event).page as string
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
        select: {
            id: true,
            name: true,
            image: true,
            trend: true,
        },
        orderBy: order
    });
    const total = await prisma.recipe.count()
    return {
        page: parseInt(pageQuery || '1'),
        total,
        pagesLeft: Math.ceil(total / parseInt(perPageQuery || '10')) - parseInt(pageQuery || '1'),
        perPage: parseInt(perPageQuery || '10'),
        sort: sort,
        items: recipes,
    }
});
