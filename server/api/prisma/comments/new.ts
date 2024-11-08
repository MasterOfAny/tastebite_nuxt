import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const commentId = getQuery(event).comment_id as string

    const forbiddenPatterns = [/</, />/, /'/, /"/, /\\/]
    for (const pattern of forbiddenPatterns) {
        if (pattern.test(body.text)) {
            setResponseStatus(event, 400)
            return { message: 'Forbidden symbols' }
        }
    }
    const comment = await prisma.comment.create({
        data: {
            ...body,
            parentid: commentId,
            likes: 0,
            user_id: event.context.user.id,
        },
        include: {
            user: { select: { user_name: true, photo: true } }
        }
    })

    return { ...comment, userName: comment.user.name, userPhoto: comment.user.photo }
})