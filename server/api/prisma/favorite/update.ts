import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const userId = event.context.user.id
    const { recipeId, recipeIds } = await readBody(event)

    try {
        if (recipeId) {
            const existingFavorite = await prisma.recipe.findFirst({
                where: {
                    id: recipeId,
                    favorites: {
                        some: {
                            id: userId
                        }
                    }
                }
            });

            if (existingFavorite) {
                await prisma.recipe.update({
                    where: { id: recipeId },
                    data: {
                        favorites: {
                            disconnect: { id: userId }
                        }
                    }
                });
                return { message: "Recipe removed from favorites." };
            } else {
                await prisma.recipe.update({
                    where: { id: recipeId },
                    data: {
                        favorites: {
                            connect: { id: userId }
                        }
                    }
                });
                return { message: "Recipe added to favorites." };
            }
        } else if (recipeIds && Array.isArray(recipeIds)) {
            for (const id of recipeIds) {
                await prisma.recipe.update({
                    where: { id },
                    data: {
                        favorites: {
                            disconnect: { id: userId }
                        }
                    }
                });
            }
            return { message: "Selected recipes removed from favorites." };
        } else {
            return { message: "No recipe ID provided." };
        }
    } catch (error) {
        console.error("Error updating favorites:", error);
        setResponseStatus(event, 500);
        return {
            message: 'An error occurred while updating favorites.',
        };
    }
});