import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getReplies(commentId: string) {
    const replies = await prisma.comment.findMany({
        where: { parentid: commentId },
        include: {
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
            },
            replies: {
                include: {
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
                }
            }
        }
    });

    return replies;
}

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
    } else if (sort === 'ratings') {
        order = { rating: 'desc' };
    }

    const items = await prisma.comment.findMany({
        take: parseInt(perPageQuery || '5'),
        skip: (parseInt(pageQuery || '1') - 1) * parseInt(perPageQuery || '5'),
        where: {
            recipe_id: id,
            parentid: null
        },
        include: {
            replies: {
                include: {
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
                    },
                    replies: {
                        include: {
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
                        }
                    }
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

    await Promise.all(items.map(async (item) => {
        item.replies = await getReplies(item.id);
    }));

    const total = await prisma.comment.count({
        where: {
            recipe_id: id,
            parentid: null
        },
    });

    return {
        page: parseInt(pageQuery || '1'),
        total,
        pagesLeft: Math.ceil(total / parseInt(perPageQuery || '5')) - parseInt(pageQuery || '1'),
        perPage: parseInt(perPageQuery || '5'),
        sort: sort,
        items: items.map(item => ({
            ...item,
            likes: item._count.like,
            replies: item.replies.map(reply => ({
                ...reply,
                likes: reply._count.like,
                replies: reply.replies.map(subReply => ({
                    ...subReply,
                    likes: subReply._count.like
                }))
            }))
        })),
    };
});