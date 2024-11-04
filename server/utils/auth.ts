import jwt from 'jsonwebtoken';

export const setTokens = (username: string) => {
    const access_token = jwt.sign({ username: username }, 'secret_key', { expiresIn: '15m' });
    const refresh_token = jwt.sign({ username: username }, 'secret_key', { expiresIn: '7d' });
    return {
        access_token,
        refresh_token
    }
}