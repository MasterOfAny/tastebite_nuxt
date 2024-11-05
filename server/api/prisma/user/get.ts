import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const full = getQuery(event).full
    if (!event.context.user) {
        return { message: 'Not authenticated' };
    }

    let select = {
        id: true,
        photo: true,
        name: true,
        user_name: true,
    }

    if (full) {
        select = {
            id: true,
            photo: true,
            name: true,
            user_name: true,
            created_at: true,
            updated_at: true,
            email: true,
        }
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: event.context.user.id },
            select: select
        });

        if (!user) {
            setResponseStatus(event, 404)
            return { message: 'User not found' };
        }

        return user;
    } catch (error) {
        setResponseStatus(event, 500)
        return { message: 'Error fetching user data' };
    }
});