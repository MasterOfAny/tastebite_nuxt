import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
    const accessToken = getCookie(event, 'access_token');

    try {
        const payload = jwt.verify(accessToken, 'secret_key');
        event.context.user = { id: payload?.userId };
    } catch (error) {
        const refreshToken = getCookie(event, 'refresh_token');
        if (refreshToken) {
            try {
                const payload = jwt.verify(refreshToken, 'secret_key') as { id: string };
                const newAccessToken = jwt.sign({ userId: payload.id }, 'secret_key', { expiresIn: '15m' });
                setCookie(event, 'access_token', newAccessToken, { httpOnly: true });
                event.context.user = { id: payload.userId };
            } catch (error) {
                console.log('Invalid refresh token')
            }
        } else {
            console.log('Refresh token is missing');
        }
    }
});

