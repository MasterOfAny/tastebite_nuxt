# TasteBite site
Food website in nuxt 3 ssr. Using pinia as a store and prisma as ORM with supabase db.
It has account, comments, and search logic.

## Setup and run
```bash
npm install
npm prisma generate
npx prisma migrate dev --name init
npm run dev
```
## Problems
You may encounter server timeout error because of connection to supabase. Needed to just wait when connection will be established (random time) and try again later.
This problem not occurs in dev mode.
## Env variables
```bash
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

SUPABASE_URL=
SUPABASE_KEY=

DATABASE_URL=

PORT=

GOOGLE_CLIENT_ID=

GOOGLE_CLIENT_SECRET=

GOOGLE_OAUTH_URL=

GOOGLE_ACCESS_TOKEN_URL=

GOOGLE_TOKEN_INFO_URL=
```
