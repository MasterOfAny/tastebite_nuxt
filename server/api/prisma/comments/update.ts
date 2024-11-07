import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const userId = event.context.user.id;
    const commentId = getQuery(event).comment_id as string;

    const existingLike = await prisma.like.findFirst({
        where: {
            user_id: userId,
            comment_id: commentId
        }
    });

    if (existingLike) {
        // Удаление лайка
        await prisma.like.delete({
            where: {
                id: existingLike.id
            }
        });

        return { message: "Like removed" };
    }

    // Добавление нового лайка
    await prisma.like.create({
        data: {
            user_id: userId,
            comment_id: commentId
        }
    });

    return { message: "Like added" };
});