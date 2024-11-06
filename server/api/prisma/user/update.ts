import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import fs from 'fs'
import path from 'path'
import formidable from 'formidable';

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const form = formidable()

    // Возвращаем Promise для работы с form
    return new Promise((resolve, reject) => {
        form.parse(event.node.req, async (err, fields, files) => {
            if (err) {
                reject(err)
            } else {
                const id = event.context.user.id
                const { name, user_name, email, password, newsletter } = fields
                const photo = files.photo && files.photo.length > 0 ? files.photo[0] : null
                const updateData: any = {}
                if (photo) {
                    const uploadPath = path.join(process.cwd(), 'public', 'photos', id)
                    const filePath = path.join(uploadPath, `${Date.now()}_${photo.newFilename}`)

                    if (!fs.existsSync(uploadPath)) {
                        fs.mkdirSync(uploadPath, { recursive: true })
                    }

                    const stream = fs.createWriteStream(filePath)
                    const fileStream = fs.createReadStream(photo.filepath)
                    fileStream.pipe(stream)

                    updateData.photo = `/photos/${id}/${path.basename(filePath)}`
                }
                if (name) updateData.name = name[0]
                if (email) updateData.email = email[0]
                if (user_name) updateData.user_name = user_name[0]
                if (newsletter) updateData.newsletter = newsletter[0] === 'true'
                if (password) {
                    const hashedPassword = await bcrypt.hash(password[0], 10)
                    updateData.hash = hashedPassword
                }
                try {
                    const updatedUser = await prisma.user.update({
                        where: { id },
                        data: updateData,
                        select: {
                            id: true,
                            name: true,
                            user_name: true,
                            email: true,
                            photo: true,
                            newsletter: true,
                            created_at: true,
                            updated_at: true
                        }
                    });
                    resolve(updatedUser);
                } catch (error) {
                    setResponseStatus(event, 500)
                    resolve({ message: 'An error occurred while updating the user' })
                }
            }
        });
    });
});