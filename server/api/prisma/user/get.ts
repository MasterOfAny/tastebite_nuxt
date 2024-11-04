import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!event.context.user) {
        return { error: 'Not authenticated' };
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: event.context.user.id },
        });

        if (!user) {
            return { error: 'User not found' };
        }

        return { user };
    } catch (error) {
        return { error: 'Error fetching user data' };
    }
});