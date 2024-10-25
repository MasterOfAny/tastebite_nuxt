import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seedCategories() {
    try {
        await prisma.category.createMany({
            data: [
                {
                    image: '/images/content/category/dessert.jpeg',
                    name: 'Dessert',
                },
                {
                    image: '/images/content/categoru/meat.jpeg',
                    name: 'Meat',
                },
                {
                    image: '/images/content/category/pasta.jpeg',
                    name: 'Pasta',
                },
                {
                    image: '/images/content/category/Pizza.jpeg',
                    name: 'Pizza',
                },
                {
                    image: '/images/content/category/ramen.jpeg',
                    name: 'Ramen',
                },
                {
                    image: '/images/content/category/salad.jpeg',
                    name: 'Salad',
                },
                {
                    image: '/images/content/category/seafood.jpg',
                    name: 'Seafood',
                },
                {
                    image: '/images/content/category/soup.jpeg',
                    name: 'Soup',
                },
                {
                    image: '/images/content/category/vegan.jpeg',
                    name: 'Vegan',
                },
            ],
        })
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

async function seedRecipes() {
    try {
        await prisma.recipe.createMany({
            data: [
                //seafood
                {
                    image: '/images/content/recipe/seafood/grilled_salmon.webp',
                    video: '21VqeJ_TryY?si=vbJ1JmIRZZIQT8pw',
                    rating: 5,
                    name: 'Honey Soy Grilled Salmon with Edamame',
                    trend: 75,
                    annotation: "The natural richness of salmon and its high amount of Omega-3's makes it a great choice for a healthy meal that doesn't need much added fat. By stuffing a mixture of fresh herbs into the fillets, through a pocket, the fish is infused with bright flavors. A light glaze during the cooking process is the final touch.",
                    ingridients: [
                        '1/4 cup packed cilantro leaves',
                        '2 scallions',
                        '2 teaspoons vegetable oil',
                        '1 teaspoon grated ginger',
                        'Kosher salt and freshly ground pepper',
                        '4 center cut skin-on wild salmon fillets, about 6 ounces each',
                        '2 teaspoons fresh lime juice',
                        '2 teaspoons low-sodium soy sauce',
                        '2 teaspoons honey',
                        '1/4 teaspoon black sesame seeds',
                        '1 1/3 cups cooked edamame',
                        'Lime wedges, optional garnish'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '345'
                        },
                        {
                            name: 'Total Fat',
                            value: '15 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '1.8 grams'
                        },
                        {
                            name: 'Cholesterol',
                            value: '93 milligrams'
                        },
                        {
                            name: 'Sodium',
                            value: '306 milligrams'
                        },
                        {
                            name: 'Carbohydrates',
                            value: '10 grams'
                        },
                        {
                            name: 'Dietary Fiber',
                            value: '3 grams'
                        },
                        {
                            name: 'Protein',
                            value: '39 grams'
                        }
                    ],
                    author_id: "52ae7704-40b6-4709-bc40-c24506e1dd5c",
                    category_id: "ec89ae66-bcff-43dd-9a57-031f1b696029",
                    stats: {
                        prepTime: 20,
                        totalTime: 28,
                        servings: 4
                    },
                    directions: [
                        "Preheat the grill over medium-high direct heat. Oil the grill grates. Finely chop the cilantro and scallion and mix in the oil and ginger. Season with salt and pepper.",
                        "Cut two 3-inch long slits through the skin lengthwise on the bottom of the salmon fillets, going about halfway into the salmon. Evenly stuff the slits with the herb mixture. Season the fish with salt and pepper.",
                        "Stir together the lime juice, soy and honey until smooth. Place the salmon, skin side up, on the grill and cook until well marked, 3 to 4 minutes. Turn the salmon and continue to cook, brushing the tops with the sauce, until the fish is cooked through, about another 3 to 4 minutes. Transfer to a serving plate and sprinkle the tops with the sesame seeds. Serve with edamame and lime wedges.",
                        "Broiler directions: Position an oven rack so that a baking sheet set on the rack is about 4-inches below the heat source. Preheat the broiler. Prepare the salmon as above and place the fillets, skin down, on a foil lined baking sheet coated with cooking spray. Broil, basting 3 to 4 times with the sauce, until just cooked through, about 6 to 7 minutes."
                    ]
                },
                //meat
                {
                    image: '/images/content/recipe/meat/recipe1.jpg',
                    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    rating: 4.5,
                    name: 'Grilled Steak with Roasted Vegetables',
                    trend: 50,
                    annotation: 'A classic grilled steak recipe with a twist of roasted vegetables',
                    ingridients: [
                        '1.5 lbs steak',
                        '2 cloves garlic',
                        '1 cup mixed vegetables',
                        '2 tbsp olive oil',
                        'Salt and pepper to taste'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '300'
                        },
                        {
                            name: 'Total Fat',
                            value: '10 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '1.5 grams'
                        },
                    ],
                    author_id: "52ae7704-40b6-4709-bc40-c24506e1dd5c",
                    category_id: "1bac1056-6e72-4d99-87d8-b530c4f9942c",
                    stats: {
                        prepTime: 20,
                        totalTime: 30,
                        servings: 4
                    },
                    directions: [
                        "Preheat grill to medium-high heat",
                        "Season steak with salt and pepper",
                        "Grill steak for 5-6 minutes per side",
                        "Roast vegetables in the oven for 15-20 minutes"
                    ]
                },
                {
                    image: '/images/content/recipe/meat/recipe2.jpg',
                    video: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
                    rating: 4.2,
                    name: 'Chicken Fajitas with Sauteed Onions and Bell Peppers',
                    trend: 40,
                    annotation: 'A flavorful and spicy chicken fajita recipe with sauteed onions and bell peppers',
                    ingridients: [
                        '1 lb boneless chicken breast',
                        '1/2 cup sliced onions',
                        '1/2 cup sliced bell peppers',
                        '2 cloves garlic',
                        '1 tsp cumin',
                        '1 tsp chili powder'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '350'
                        },
                        {
                            name: 'Total Fat',
                            value: '12 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '2 grams'
                        },
                    ],
                    author_id: "60b6e878-d133-4881-a34e-196a4eccf27a",
                    category_id: "1bac1056-6e72-4d99-87d8-b530c4f9942c",
                    stats: {
                        prepTime: 25,
                        totalTime: 35,
                        servings: 4
                    },
                    directions: [
                        "Heat oil in a large skillet over medium-high heat",
                        "Add chicken and cook until browned",
                        "Add onions and bell peppers and cook until tender",
                        "Season with cumin and chili powder"
                    ]
                },
                {
                    image: '/images/content/recipe/meat/recipe3.jpg',
                    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    rating: 4.8,
                    name: 'Braised Short Ribs with Red Wine and Mushrooms',
                    trend: 60,
                    annotation: 'A hearty and comforting braised short ribs recipe with red wine and mushrooms',
                    ingridients: [
                        '2 lbs short ribs',
                        '1 cup red wine',
                        '2 cups beef broth',
                        '2 tbsp tomato paste',
                        '2 cups mixed mushrooms'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '400'
                        },
                        {
                            name: 'Total Fat',
                            value: '15 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '3 grams'
                        },
                    ],
                    author_id: "52ae7704-40b6-4709-bc40-c24506e1dd5c",
                    category_id: "1bac1056-6e72-4d99-87d8-b530c4f9942c",
                    stats: {
                        prepTime: 30,
                        totalTime: 40,
                        servings: 4
                    },
                    directions: [
                        "Preheat oven to 300°F",
                        "Brown short ribs in a large Dutch oven",
                        "Add red wine, beef broth, and tomato paste",
                        "Cover and braise for 20-25 minutes"
                    ]
                },
                // Pasta
                {
                    image: '/images/content/recipe/pasta/recipe1.jpg',
                    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    rating: 4.5,
                    name: 'Spaghetti Carbonara with Peas and Ham',
                    trend: 50,
                    annotation: 'A classic Italian spaghetti carbonara recipe with peas and ham',
                    ingridients: [
                        '12 oz spaghetti',
                        '4 oz pancetta',
                        '1 cup frozen peas',
                        '2 cloves garlic',
                        '1 cup grated parmesan cheese'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '350'
                        },
                        {
                            name: 'Total Fat',
                            value: '10 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '1.5 grams'
                        },
                    ],
                    author_id: "60b6e878-d133-4881-a34e-196a4eccf27a",
                    category_id: "453e17b6-7e7b-45c5-90a9-117f109f5c0c",
                    stats: {
                        prepTime: 20,
                        totalTime: 30,
                        servings: 4
                    },
                    directions: [
                        "Cook spaghetti in boiling water until al dente",
                        "In a large skillet, cook pancetta until crispy",
                        "Add frozen peas and cook until tender",
                        "In a large bowl, combine cooked spaghetti, pancetta, and peas"
                    ]
                },
                {
                    image: '/images/content/recipe/pasta/recipe2.jpg',
                    video: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
                    rating: 4.2,
                    name: 'Fettuccine Alfredo with Chicken and Mushrooms',
                    trend: 40,
                    annotation: 'A rich and creamy fettuccine alfredo recipe with chicken and mushrooms',
                    ingridients: [
                        '12 oz fettuccine',
                        '1 lb boneless chicken breast',
                        '2 cups mixed mushrooms',
                        '2 cloves garlic',
                        '1 cup grated parmesan cheese'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '400'
                        },
                        {
                            name: 'Total Fat',
                            value: '15 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '3 grams'
                        },
                    ],
                    author_id: "52ae7704-40b6-4709-bc40-c24506e1dd5c",
                    category_id: "453e17b6-7e7b-45c5-90a9-117f109f5c0c",
                    stats: {
                        prepTime: 25,
                        totalTime: 35,
                        servings: 4
                    },
                    directions: [
                        "Cook fettuccine in boiling water until al dente",
                        "In a large skillet, cook chicken and mushrooms until tender",
                        "In a large bowl, combine cooked fettuccine, chicken, and mushrooms"
                    ]
                },
                {
                    image: '/images/content/recipe/pasta/recipe3.jpg',
                    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    rating: 4.8,
                    name: 'Spaghetti Bolognese with Ground Beef and Tomatoes',
                    trend: 60,
                    annotation: 'A classic Italian spaghetti bolognese recipe with ground beef and tomatoes',
                    ingridients: [
                        '12 oz spaghetti',
                        '1 lb ground beef',
                        '2 cups chopped tomatoes',
                        '2 cloves garlic',
                        '1 cup grated parmesan cheese'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '450'
                        },
                        {
                            name: 'Total Fat',
                            value: '18 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '4 grams'
                        },
                    ],
                    author_id: "60b6e878-d133-4881-a34e-196a4eccf27a",
                    category_id: "453e17b6-7e7b-45c5-90a9-117f109f5c0c",
                    stats: {
                        prepTime: 30,
                        totalTime: 40,
                        servings: 4
                    },
                    directions: [
                        "Cook spaghetti in boiling water until al dente",
                        "In a large skillet, cook ground beef until browned",
                        "Add chopped tomatoes and cook until tender",
                        "In a large bowl, combine cooked spaghetti, ground beef",
                    ],
                },
                // Soup
                {
                    image: '/images/content/recipe/soup/recipe1.jpg',
                    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    rating: 4.5,
                    name: 'Creamy Tomato Soup with Basil and Mozzarella',
                    trend: 50,
                    annotation: 'A creamy and flavorful tomato soup recipe with basil and mozzarella',
                    ingridients: [
                        '2 cups chopped tomatoes',
                        '1 cup chicken broth',
                        '1/2 cup heavy cream',
                        '2 cloves garlic',
                        '1/4 cup chopped fresh basil'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '200'
                        },
                        {
                            name: 'Total Fat',
                            value: '10 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '2 grams'
                        },
                    ],
                    author_id: "52ae7704-40b6-4709-bc40-c24506e1dd5c",
                    category_id: "545b0a86-2c1a-4d90-a2ed-b35ab39ca266",
                    stats: {
                        prepTime: 20,
                        totalTime: 30,
                        servings: 4
                    },
                    directions: [
                        "In a large pot, sauté garlic and onions until tender",
                        "Add chopped tomatoes and chicken broth",
                        "Bring to a boil and simmer until soup is heated through",
                        "Stir in heavy cream and chopped basil"
                    ]
                },
                {
                    image: '/images/content/recipe/soup/recipe2.jpg',
                    video: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
                    rating: 4.2,
                    name: 'Butternut Squash Soup with Coconut Milk and Spices',
                    trend: 40,
                    annotation: 'A creamy and comforting butternut squash soup recipe with coconut milk and spices',
                    ingridients: [
                        '1 medium butternut squash',
                        '2 cups chicken broth',
                        '1/2 cup coconut milk',
                        '2 cloves garlic',
                        '1 tsp ground cumin'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '250'
                        },
                        {
                            name: 'Total Fat',
                            value: '12 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '3 grams'
                        },
                    ],
                    author_id: "60b6e878-d133-4881-a34e-196a4eccf27a",
                    category_id: "545b0a86-2c1a-4d90-a2ed-b35ab39ca266",
                    stats: {
                        prepTime: 25,
                        totalTime: 35,
                        servings: 4
                    },
                    directions: [
                        "Preheat oven to 400°F",
                        "Roast butternut squash until tender",
                        "In a large pot, sauté garlic and onions until tender",
                        "Add roasted squash and chicken broth"
                    ]
                },
                {
                    image: '/images/content/recipe/soup/recipe3.jpg',
                    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    rating: 4.8,
                    name: 'French Onion Soup with Caramelized Onions and Gruyère',
                    trend: 60,
                    annotation: 'A classic French onion soup recipe with caramelized onions and Gruyère',
                    ingridients: [
                        '3 large onions',
                        '2 cups beef broth',
                        '1/2 cup dry white wine',
                        '2 cloves garlic',
                        '1 cup grated Gruyère cheese'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '300'
                        },
                        {
                            name: 'Total Fat',
                            value: '15 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '4 grams'
                        },
                    ],
                    author_id: "52ae7704-40b6-4709-bc40-c24506e1dd5c",
                    category_id: "545b0a86-2c1a-4d90-a2ed-b35ab39ca266",
                    stats: {
                        prepTime: 30,
                        totalTime: 40,
                        servings: 4
                    },
                    directions: [
                        "In a large pot, caramelize onions until tender",
                        "Add beef broth and white wine",
                        "Bring to a boil and simmer until soup is heated through",
                        "Top with grated Gruyère cheese"
                    ]
                },
                // Dessert
                {
                    image: '/images/content/recipe/dessert/recipe1.jpg',
                    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    rating: 4.5,
                    name: 'Chocolate Lava Cake with Vanilla Ice Cream',
                    trend: 50,
                    annotation: 'A rich and decadent chocolate lava cake recipe with vanilla ice cream',
                    ingridients: [
                        '2 cups all-purpose flour',
                        '1 cup granulated sugar',
                        '6 oz best-quality bittersweet chocolate',
                        '4 large eggs',
                        '1 tsp pure vanilla extract'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '400'
                        },
                        {
                            name: 'Total Fat',
                            value: '20 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '10 grams'
                        },
                    ],
                    author_id: "60b6e878-d133-4881-a34e-196a4eccf27a",
                    category_id: "56267a65-289d-4d09-8f95-19837a5ed48d",
                    stats: {
                        prepTime: 25,
                        totalTime: 35,
                        servings: 4
                    },
                    directions: [
                        "Preheat oven to 425°F",
                        "In a medium bowl, whisk together flour and sugar",
                        "Melt chocolate in a double boiler",
                        "Whisk together eggs and vanilla extract"
                    ]
                },
                {
                    image: '/images/content/recipe/dessert/recipe2.jpg',
                    video: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
                    rating: 4.2,
                    name: 'Cheesecake with Strawberry Sauce and Whipped Cream',
                    trend: 40,
                    annotation: 'A creamy and indulgent cheesecake recipe with strawberry sauce and whipped cream',
                    ingridients: [
                        '1 1/2 cups graham cracker crumbs',
                        '1/2 cup granulated sugar',
                        '16 oz cream cheese',
                        '4 large eggs',
                        '1 tsp pure vanilla extract'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '500'
                        },
                        {
                            name: 'Total Fat',
                            value: '30 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '15 grams'
                        },
                    ],
                    author_id: "52ae7704-40b6-4709-bc40-c24506e1dd5c",
                    category_id: "56267a65-289d-4d09-8f95-19837a5ed48d",
                    stats: {
                        prepTime: 30,
                        totalTime: 40,
                        servings: 4
                    },
                    directions: [
                        "Preheat oven to 350°F",
                        "In a medium bowl, mix together graham cracker crumbs and sugar",
                        "In a large bowl, beat cream cheese until smooth",
                        "Add eggs one at a time, beating well after each addition"
                    ],
                },
                {
                    image: '/images/content/recipe/dessert/recipe3.jpg',
                    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                    rating: 4.8,
                    name: 'Tiramisu with Ladyfingers and Espresso',
                    trend: 60,
                    annotation: 'A classic Italian tiramisu recipe with ladyfingers and espresso',
                    ingridients: [
                        '12-16 ladyfingers',
                        '1 cup strong brewed espresso',
                        '8 oz mascarpone cheese',
                        '1/2 cup granulated sugar',
                        '2 large egg yolks'
                    ],
                    nutrition: [
                        {
                            name: 'Calories',
                            value: '350'
                        },
                        {
                            name: 'Total Fat',
                            value: '20 grams'
                        },
                        {
                            name: 'Saturated Fat',
                            value: '10 grams'
                        },
                    ],
                    author_id: "60b6e878-d133-4881-a34e-196a4eccf27a",
                    category_id: "56267a65-289d-4d09-8f95-19837a5ed48d",
                    stats: {
                        prepTime: 25,
                        totalTime: 35,
                        servings: 4
                    },
                    directions: [
                        "In a large bowl, combine espresso and sugar",
                        "Dip ladyfingers into espresso mixture",
                        "In a separate bowl, beat mascarpone cheese until smooth",
                        "Add egg yolks one at a time, beating well after each addition"
                    ]
                }
            ]
        });
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

async function seedComments() {
    try {
        await prisma.comment.createMany({
            data: [
                {
                    text: 'Delicious! We love garlic so I minced a few cloves along with a half of a serrano pepper, substituted black caraway seeds, a little more honey, coconut aminos, mineral salt, evo, and sweet onions. So flavorful!',
                    user_id: "0b4838e5-a00a-4690-b9c2-805e102e808a",
                    recipe_id: "c30e21b8-b405-4a44-8167-d1bcaa44eb92",
                    likes: 0,
                    rating: 5,

                },
            ]
        });

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

async function seedUsers() {
    try {
        await prisma.user.createMany({
            data: [
                /* {
                    name: "Maria",
                    user_name: "tara",
                    email: "tara@gmail.com",
                    hash: "",
                    newsletter: false
                }, */
                {
                    name: "Emily",
                    user_name: "emilychen",
                    email: "emilychen@yahoo.com",
                    hash: "",
                    newsletter: false
                },
                {
                    name: "David",
                    user_name: "davidlee",
                    email: "davidlee@hotmail.com",
                    hash: "",
                    newsletter: true
                },
                {
                    name: "Sophia",
                    user_name: "sophia123",
                    email: "sophia123@gmail.com",
                    hash: "",
                    newsletter: false
                },
                {
                    name: "Jackson",
                    user_name: "jacksonj",
                    email: "jacksonj@aol.com",
                    hash: "",
                    newsletter: true
                },
                {
                    name: "Ava",
                    user_name: "ava88",
                    email: "ava88@yahoo.com",
                    hash: "",
                    newsletter: false
                },
                {
                    name: "Ethan",
                    user_name: "ethan23",
                    email: "ethan23@gmail.com",
                    hash: "",
                    newsletter: true
                },
                {
                    name: "Lily",
                    user_name: "lily90",
                    email: "lily90@hotmail.com",
                    hash: "",
                    newsletter: false
                },
                {
                    name: "Noah",
                    user_name: "noah11",
                    email: "noah11@aol.com",
                    hash: "",
                    newsletter: true
                },
                {
                    name: "Mia",
                    user_name: "mia22",
                    email: "mia22@yahoo.com",
                    hash: "",
                    newsletter: false
                },
                {
                    name: "Lucas",
                    user_name: "lucas33",
                    email: "lucas33@gmail.com",
                    hash: "",
                    newsletter: true
                },
                {
                    name: "Isabella",
                    user_name: "isabella44",
                    email: "isabella44@hotmail.com",
                    hash: "",
                    newsletter: false
                },
                {
                    name: "Mason",
                    user_name: "mason55",
                    email: "mason55@aol.com",
                    hash: "",
                    newsletter: true
                },
                {
                    name: "Charlotte",
                    user_name: "charlotte66",
                    email: "charlotte66@yahoo.com",
                    hash: "",
                    newsletter: false
                },
                {
                    name: "Alexander",
                    user_name: "alexander77",
                    email: "alexander77@gmail.com",
                    hash: "",
                    newsletter: true
                },
                {
                    name: "Amelia",
                    user_name: "amelia88",
                    email: "amelia88@hotmail.com",
                    hash: "",
                    newsletter: false
                },
                {
                    name: "Gabriel",
                    user_name: "gabriel99",
                    email: "gabriel99@aol.com",
                    hash: "",
                    newsletter: true
                },
                {
                    name: "Harper",
                    user_name: "harper00",
                    email: "harper00@yahoo.com",
                    hash: "",
                    newsletter: false
                },
                {
                    name: "Benjamin",
                    user_name: "benjamin11",
                    email: "benjamin11@gmail.com",
                    hash: "",
                    newsletter: true
                },
                {
                    name: "Evelyn",
                    user_name: "evelyn22",
                    email: "evelyn22@hotmail.com",
                    hash: "",
                    newsletter: false
                },
                {
                    name: "Logan",
                    user_name: "logan33",
                    email: "logan33@aol.com",
                    hash: "",
                    newsletter: true
                }
                /* {
                    name: "recipeAuthor",
                    user_name: "recipeAuthor1",
                    email: "recipe1@gmail.com",
                    hash: "",
                    newsletter: false
                },
                {
                    name: "recipeAuthor",
                    user_name: "recipeAuthor2",
                    email: "recipe2@gmail.com",
                    hash: "",
                    newsletter: false
                }, */
            ]
        });

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

/* async function seedRecipes() {
    try {
        await prisma.recipe.create({
            data: {
                image: '',
                rating: 5,
                name: 'Mighty Super Cheesecake',
                category: 'Dessert',
                quantity: 177
            },
        });

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
} */

//seedUsers();
seedComments();
//seedCategories();
//seedRecipes();