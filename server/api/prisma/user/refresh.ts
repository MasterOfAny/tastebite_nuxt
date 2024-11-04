import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const refreshToken = getCookie(event, 'refresh_token');

    if (!refreshToken) {
        return { message: 'No refresh token' };
    }

    const storedToken = await prisma.refreshToken.findUnique({
        where: { token: refreshToken }
    });

    if (!storedToken) {
        return { message: 'Invalid refresh token' };
    }

    try {
        const payload = jwt.verify(refreshToken, 'refresh_secret');
        const newAccessToken = jwt.sign({ userId: payload.userId }, 'access_secret', { expiresIn: '15m' });

        setCookie(event, 'access_token', newAccessToken, { httpOnly: true });

        return { message: 'Token refreshed' };
    } catch (error) {
        return { message: 'Invalid refresh token' };
    }
});