import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const id = event.context?.params?.id;
    const perPageQuery = getQuery(event).per_page as string;
    const pageQuery = getQuery(event).page as string;
    const sort = getQuery(event).sort || 'recent';
    let order: { [key: string]: string } = { created_at: 'desc' };

    if (sort === 'oldest') {
        order = { created_at: 'asc' };
    } else if (sort === 'helpful') {
        order = { likes: 'desc' };
    }

    const items = await prisma.comment.findMany({
        take: parseInt(perPageQuery || '10'),
        skip: (parseInt(pageQuery || '1') - 1) * parseInt(perPageQuery || '10'),
        where: {
            recipe_id: id,
            parentid: null
        },
        select: {
            id: true,
            created_at: true,
            text: true,
            rating: true,
            recipe_id: true,
            replies: {
                select: {
                    user: {
                        select: {
                            user_name: true,
                            photo: true,
                        }
                    },
                    created_at: true,
                    text: true,
                    rating: true,
                }
            },
            user: {
                select: {
                    user_name: true,
                    photo: true,
                }
            },
            _count: {
                select: {
                    like: true
                }
            }
        },
        orderBy: order
    });

    const total = await prisma.comment.count({
        where: { recipe_id: id },
    });

    return {
        page: parseInt(pageQuery || '1'),
        total,
        pagesLeft: Math.ceil(total / parseInt(perPageQuery || '10')) - parseInt(pageQuery || '1'),
        perPage: parseInt(perPageQuery || '10'),
        sort: sort,
        items: items.map(item => ({
            ...item,
            likes: item._count.like
        })),
    };
});