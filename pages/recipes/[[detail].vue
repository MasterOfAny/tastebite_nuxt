<template>
    <div>
        Recipe
    </div>
</template>

<script setup lang="ts">
const data = {
    stats: {
        prepTime: 30,
        totalTime: 60,
        servings: 4
    },
    recipeInfo: {
        name: 'Mighty Super Cheesecake',
        trend: 84,
        author: 'Tricia Albert',
        date: 'Jan 15, 2022',
        rating: 5
    },
    ingridients: [
        '400g graham crackers',
        '300g digestive biscuits',
        '200g icing sugar',
        '100g butter',
        '50g grated chocolate',
        '1 tsp vanilla extract',
        '1 tsp salt',
        '1 tsp sugar',
        '2 eggs',
    ],
    nutritionFacts: [
        {
            name: 'Calories',
            value: 300
        },
        {
            name: 'Carbohydrates',
            value: 300
        },
        {
            name: 'Fat',
            value: 300
        },
        {
            name: 'Protein',
            value: 300
        },
        {
            name: 'Fiber',
            value: 300
        },
        {
            name: 'Sugar',
            value: 300
        },
        {
            name: 'Sodium',
            value: 300
        }
    ],
    instructions: [
        'To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.',
        'Pour mixture into a 20cm (8”) tart tin. Use the back of a spoon to firmly press the mixture out across the bottom and sides of the tart tin. Chill for 30 min.',
        'Begin by adding the marshmallows and melted butter into a microwave safe bowl. Microwave for 30 seconds and mix to combine. Set aside.'
    ],
    comments: {
        total: 25,
        page: 1,
        perPage: 5,
        items: [
            {
                author: 'Jelanee Uwaezuoke',
                date: 'Jan 15, 2022',
                text: 'Synth polaroid bitters chillwave pickled. Vegan disrupt tousled, Portland keffiyeh aesthetic food truck sriracha cornhole single-origin coffee church-key roof party.',
                likes: 4,
                replies: [
                    {
                        author: 'Jelanee Uwaezuoke',
                        date: 'Jan 15, 2022',
                        text: 'Synth polaroid bitters chillwave pickled. Vegan disrupt tousled, Portland keffiyeh aesthetic food truck sriracha cornhole single-origin coffee church-key roof party.',
                        likes: 4,
                        replies: []
                    }
                ]
            },
            {
                author: 'Jelanee Uwaezuoke',
                date: 'Jan 15, 2022',
                text: 'Synth polaroid bitters chillwave pickled. Vegan disrupt tousled, Portland keffiyeh aesthetic food truck sriracha cornhole single-origin coffee church-key roof party.',
                likes: 4,
                replies: [
                    {
                        author: 'Jelanee Uwaezuoke',
                        date: 'Jan 15, 2022',
                        text: 'Synth polaroid bitters chillwave pickled. Vegan disrupt tousled, Portland keffiyeh aesthetic food truck sriracha cornhole single-origin coffee church-key roof party.',
                        likes: 4,
                        replies: []
                    }
                ]
            }
        ]
    }

}
</script>

<style scoped></style>