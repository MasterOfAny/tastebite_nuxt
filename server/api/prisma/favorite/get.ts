import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const userId = event.context.user.id;

    try {
        const favoriteRecipes = await prisma.recipe.findMany({
            where: {
                favorites: {
                    some: {
                        id: userId
                    }
                }
            },
            select: {
                id: true,
                name: true,
                image: true,
                rating: true,
            }
        });

        return favoriteRecipes
    } catch (error) {
        console.error("Error fetching favorite recipes:", error);
        setResponseStatus(event, 500);
        return {
            message: 'An error occurred while fetching favorite recipes.',
        };
    }
});