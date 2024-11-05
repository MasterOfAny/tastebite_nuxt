import { PrismaClient } from '@prisma/client';
import { setTokens } from '~/server/utils/auth';

const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const GOOGLE_ACCESS_TOKEN_URL = process.env.GOOGLE_ACCESS_TOKEN_URL;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;


const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { code } = getQuery(event)
    const data = {
        code,

        client_id: GOOGLE_CLIENT_ID,

        client_secret: GOOGLE_CLIENT_SECRET,

        redirect_uri: "http://localhost:3000/google-redirect",

        grant_type: "authorization_code",
    };

    const response = await fetch(GOOGLE_ACCESS_TOKEN_URL ?? '', {
        method: "POST",

        body: JSON.stringify(data),
    });

    const access_token_data = await response.json()
    const { id_token } = access_token_data
    const token_info_response = await fetch(
        `${process.env.GOOGLE_TOKEN_INFO_URL}?id_token=${id_token}`
    );
    setCookie(event, "google_token", access_token_data.access_token)
    const googleUser = await token_info_response.json()
    let user = await prisma.user.findUnique({
        where: { email: googleUser.email }
    });

    if (!user) {
        user = await prisma.user.create({
            data: {
                name: googleUser.name,
                user_name: googleUser.name,
                email: googleUser.email,
                newsletter: false,
                hash: '',
                photo: googleUser.picture,
                accounts: ['google']
            }
        });
    }

    const { access_token, refresh_token } = setTokens(user.id);

    await prisma.refreshToken.create({
        data: {
            token: refresh_token,
            userId: user.id
        }
    });
    setCookie(event, "access_token", access_token, { httpOnly: true })
    setCookie(event, 'refresh_token', refresh_token, { httpOnly: true });
    return
})