import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedRecipes() {
    try {
        await prisma.recipes.create({
            data: {
                image: '',
                rating: 5,
                name: 'Mighty Super Cheesecake',
                category: 'Dessert',
                quantity: 177
            },
        });
        await prisma.recipes.create({
            data: {
                image: '',
                rating: 5,
                name: 'Mighty Super Cheesecake 2',
                category: 'Dessert',
                quantity: 177
            },
        });
        await prisma.recipes.create({
            data: {
                image: '',
                rating: 5,
                name: 'Mighty Super Cheesecake 3',
                category: 'Dessert',
                quantity: 177
            },
        });
    }
    catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

seedRecipes();