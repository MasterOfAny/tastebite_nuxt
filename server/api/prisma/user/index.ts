import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import { setTokens } from '~/server/utils/auth';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { name, email, password } = body;
    const handleError = (status: number, message: string) => {
        setResponseStatus(event, status);
        return { message };
    };

    const handleSignIn = async () => {
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return handleError(404, 'User not found. Wrong email.');

        const isPasswordValid = await bcrypt.compare(password, user.hash);
        if (!isPasswordValid) return { message: 'Wrong password.' };

        const { access_token, refresh_token } = setTokens(user.id);
        await prisma.refreshToken.create({
            data: {
                token: refresh_token,
                userId: user.id
            }
        });
        setCookie(event, 'access_token', access_token, { httpOnly: true });
        setCookie(event, 'refresh_token', refresh_token, { httpOnly: true });
        return { message: 'signed in successfully.' };
    };

    const handleSignUp = async () => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email: email,
                hash: hashedPassword,
                newsletter: false,
                photo: '',
                name: name,
                user_name: '',
                accounts: []
            }
        });
        const { access_token, refresh_token } = setTokens(user.id);
        await prisma.refreshToken.create({
            data: {
                token: refresh_token,
                userId: user.id
            }
        });
        setCookie(event, 'access_token', access_token, { httpOnly: true });
        setCookie(event, 'refresh_token', refresh_token, { httpOnly: true });
        return { message: 'signed in successfully.' };
    };

    try {
        return name ? await handleSignUp() : await handleSignIn();
    } catch (error) {
        return handleError(500, 'An error occurred. Try again later.');
    }

})