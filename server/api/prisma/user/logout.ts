import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const refreshToken = getCookie(event, 'refresh_token');

    if (refreshToken) {
        await prisma.refreshToken.delete({
            where: { token: refreshToken }
        });
    }

    deleteCookie(event, 'access_token');
    deleteCookie(event, 'refresh_token');

    return { message: 'Logged out successfully' };
});