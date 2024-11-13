import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const searchQuery = getQuery(event).search;

    const [categories, recipes] = await Promise.all([
        prisma.category.findMany({
            where: {
                name: {
                    contains: searchQuery,
                    mode: 'insensitive',
                },
            },
            select: {
                name: true
            }
        }),
        prisma.recipe.findMany({
            where: {
                name: {
                    contains: searchQuery,
                    mode: 'insensitive',
                },
            },
            select: {
                name: true,
                image: true,
                category: {
                    select: {
                        name: true
                    }
                }
            }
        }),
    ]);

    return { categories, recipes };
})