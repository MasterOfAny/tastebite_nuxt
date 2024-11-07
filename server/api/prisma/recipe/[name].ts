import { PrismaClient } from "@prisma/client";
import processLink from "@/composables/processLink";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const name = processLink(event.context?.params?.name || '', false)
    try {
        const recipe = await prisma.recipe.findFirst({
            where: { name: { equals: name, mode: 'insensitive' } },
        })
        return recipe
    } catch (error) {
        setResponseStatus(event, 404)
        return { message: 'Recipe not found' }
    }
})

