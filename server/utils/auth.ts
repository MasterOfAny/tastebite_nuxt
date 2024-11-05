import jwt from 'jsonwebtoken';

export const setTokens = (id: string) => {
    const access_token = jwt.sign({ id: id }, 'secret_key', { expiresIn: '1h' });
    const refresh_token = jwt.sign({ id: id }, 'secret_key', { expiresIn: '7d' });
    return {
        access_token,
        refresh_token
    }
}