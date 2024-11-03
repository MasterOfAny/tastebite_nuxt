import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { email: bodyEmail, password: bodyPassword } = body
    const user = await prisma.user.findUnique({
        where: { email: bodyEmail },
    })
    if (!user) return null
    const isPasswordValid = await bcrypt.compare(bodyPassword, user.hash)
    if (!isPasswordValid) return null
    return { user }
})
