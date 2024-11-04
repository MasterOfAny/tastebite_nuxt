import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const accessToken = getCookie(event, 'access_token');

    if (!accessToken) {
        return;
    }

    try {
        const payload = jwt.verify(accessToken, 'access_secret');
        const user = await prisma.user.findUnique({
            where: { id: payload.userId }
        });

        if (user) {
            event.context.user = { id: user.id };
        }
    } catch (error) {
    }
});