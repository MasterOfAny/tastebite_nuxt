import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    if (body.google) {

    } else {
        const { name: bodyName, email: bodyEmail, password: bodyPassword } = body
        const hashedPassword = await bcrypt.hash(bodyPassword, 10)
        const res = await prisma.user.create({
            data: {
                email: bodyEmail,
                hash: hashedPassword,
                newsletter: false,
                photo: '',
                name: bodyName,
                user_name: '',
                accounts: [],
            }
        })
        return res
    }
})