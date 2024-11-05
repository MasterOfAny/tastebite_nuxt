import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const accessToken = getCookie(event, 'access_token');
    const refreshToken = getCookie(event, 'refresh_token');

    if (!accessToken) {
        return;
    }

    try {
        const payload = jwt.verify(accessToken, 'secret_key');
        const user = await prisma.user.findUnique({ where: { id: payload?.id } });
        if (user) {
            event.context.user = { id: user.id };
        }
    } catch (error) {
        if (refreshToken) {
            try {
                const payload = jwt.verify(refreshToken, 'secret_key') as { id: string };
                const newAccessToken = jwt.sign({ userId: payload.id }, 'secret_key', { expiresIn: '15m' });
                setCookie(event, 'access_token', newAccessToken, { httpOnly: true });
                const user = await prisma.user.findUnique({ where: { id: payload?.id } });
                if (user) {
                    event.context.user = { id: user.id };
                }
            } catch (error) {
                console.log('Invalid refresh token')
            }
        } else {
            console.log('Refresh token is missing');
        }
    }
});
