const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const GOOGLE_ACCESS_TOKEN_URL = process.env.GOOGLE_ACCESS_TOKEN_URL;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;


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
    setCookie(event, "access_token", access_token_data.access_token, { path: "/" })
    setResponseStatus(event, token_info_response.status)
    return (await token_info_response.json());
})