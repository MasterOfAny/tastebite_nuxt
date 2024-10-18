<template>
    <div class="recipe-page">
        <div class="page-top">
            <div class="page-top__actions-panel">
                <div class="page-top__trend">
                    <svg width="24" height="24">
                        <use xlink:href="/images/iconsList.svg#icon-trending-up"></use>
                    </svg>
                    <span>
                        {{ data.recipeInfo?.trend }}% would make this again
                    </span>
                </div>
                <div class="page-top__actions">
                    <svg width="32" height="32">
                        <use xlink:href="/images/iconsList.svg#icon-print"></use>
                    </svg>
                    <svg width="32" height="32">
                        <use xlink:href="/images/iconsList.svg#icon-bookmark"></use>
                    </svg>
                </div>
            </div>
            <h1>{{ data.recipeInfo?.name }}</h1>
            <div class="page-top__info">
                <div class="page-top__author page-top__info_flex">
                    <div class="author-avatar">
                        <img width="32" height="32" :src="data.recipeInfo?.author?.image" alt="">
                    </div>
                    <span>{{ data.recipeInfo?.author?.name }}</span>
                </div>
                <div class="page-top__date page-top__info_flex">
                    <svg width="16" height="16">
                        <use xlink:href="/images/iconsList.svg#icon-calendar"></use>
                    </svg>
                    <time datetime="">{{ data.recipeInfo?.date }}</time>
                </div>
                <a href="#comments" class="page-top__comments page-top__info_flex">
                    <svg width="16" height="16">
                        <use xlink:href="/images/iconsList.svg#icon-comment"></use>
                    </svg>
                    <span>{{ data.comments?.total }}</span>
                </a>
                <div class="page-top__rating">
                    <Rating :rating="data.recipeInfo?.rating" />
                </div>
            </div>
        </div>
        <div class="page-recipe">
            <div class="page-recipe__annotation">
                <p>
                    {{ data.recipeInfo?.annotation }}
                </p>
            </div>
            <div class="page-recipe__media">
                <img v-if="!data.recipeInfo?.video && data.recipeInfo?.image" width="600" height="380"
                    :src="data.recipeInfo.image" alt="">
                <!--  <iframe v-else width="560" height="315"
                    src="https://www.youtube.com/embed/fZ13nRpZIAU?si=mxX5I4Fyg01yHunn" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
            </div>
            <div class="page-recipe__content container">
                <div class="page-recipe__column-left">
                    <div class="recipe-time">
                        <div class="recipe-time__item">
                            <span>prep time</span>
                            <span>{{ data.stats?.prepTime }} min</span>
                        </div>
                        <div class="recipe-time__item">
                            <span>total time</span>
                            <span>{{ data.stats?.totalTime }} min</span>
                        </div>
                        <div class="recipe-time__item">
                            <span>servings</span>
                            <span>{{ data.stats?.servings }} min</span>
                        </div>
                    </div>
                    <div class="recipe-ingridients">
                        <h2 class="recipe-page__minor-header">Ingridients</h2>
                        <div class="recipe-ingridients__list">
                            <div v-for="(item, index) in data.ingridients" class="recipe-ingridients__item">
                                <Checkbox :name="'ing-' + index" self-checked>
                                    {{ item }}
                                </Checkbox>
                            </div>
                        </div>
                    </div>
                    <div class="recipe-instructions">
                        <h2 class="recipe-page__minor-header">Instructions</h2>
                        <ol class="recipe-instructions__list">
                            <li v-for="(item, index) in data.instructions" :key="index"
                                class="recipe-instructions__item">
                                {{ item }}
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="page-recipe__column-right">
                    <div class="recipe-nutrition">
                        <div class="recipe-nutrition__content">
                            <h2 class="recipe-page__minor-header">Nutrition Facts</h2>
                            <div class="recipe-nutrition__facts">
                                <div v-for="fact in data.nutritionFacts" :key="fact.name"
                                    class="recipe-nutrition__fact">
                                    <span>
                                        {{ fact.name }}
                                    </span>
                                    <span>
                                        {{ fact.value }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fresh-recipes">
                        <h2 class="recipe-page__minor-header">Fresh Recipes</h2>
                        <div class="fresh-recipes__list">
                            <Card v-for="item in fakeData" :key="item?.name" class="fresh-recipes__item"
                                :recipe-info="item" two-columns with-rating />
                        </div>
                    </div>
                    <Newsletter />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Rating from '~/components/ui/Rating.vue';
import Checkbox from '~/components/ui/Checkbox.vue';
import Newsletter from '~/components/functional/Newsletter.vue';
import Card from '~/components/ui/Card.vue';
const data = {
    stats: {
        prepTime: 30,
        totalTime: 60,
        servings: 4
    },
    recipeInfo: {
        name: 'Mighty Super Cheesecake',
        annotation: 'One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good Italian meal. Here is a recipe I created after having this dish in a restaurant. Enjoy!',
        image: '/images/recipe-img.jpg',
        video: 'https://www.youtube.com/watch?v=4Q2r5q4u4q4',
        trend: 84,
        author: {
            name: 'Tricia Albert',
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        },
        date: 'Jan 15, 2022',
        rating: 4.5
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
            value: '300 g'
        },
        {
            name: 'Carbohydrates',
            value: '300 mg'
        },
        {
            name: 'Fat',
            value: '300 mg'
        },
        {
            name: 'Protein',
            value: '300 g'
        },
        {
            name: 'Fiber',
            value: '300 mg'
        },
        {
            name: 'Sugar',
            value: '300 mg'
        },
        {
            name: 'Sodium',
            value: '300 mg'
        }
    ],
    instructions: [
        'To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.',
        'Pour mixture into a 20cm (8”) tart tin. Use the back of a spoon to firmly press the mixture out across the bottom and sides of the tart tin. Chill for 30 min.',
        'Begin by adding the marshmallows and melted butter into a microwave safe bowl. Microwave for 30 seconds and mix to combine. Set aside.',
        'Next, add the gelatine and water to a small mixing bowl and mix to combine. Microwave for 30 seconds.',
        'To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.',
        'Pour mixture into a 20cm (8”) tart tin. Use the back of a spoon to firmly press the mixture out across the bottom and sides of the tart tin. Chill for 30 min.',
        'Begin by adding the marshmallows and melted butter into a microwave safe bowl. Microwave for 30 seconds and mix to combine. Set aside.',
        'Next, add the gelatine and water to a small mixing bowl and mix to combine. Microwave for 30 seconds.'
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
const fakeData = [
    {
        image: '/images/recipe-img.jpg',
        rating: 4.6,
        name: 'Mighty Super Cheesecake',
        category: 'Dessert',
        quantity: 177
    },
    {
        image: '/images/recipe-img.jpg',
        rating: 3.2,
        name: 'Mighty Super Cheesecake',
        category: 'Dessert',
        quantity: 18
    },
    {
        image: '/images/recipe-img.jpg',
        rating: 2.5,
        name: 'Chocolate and Banana Jar Cake Chocolate and Banana Jar Cake',
        category: 'Dessert',
        quantity: 66
    },
]
</script>

<style scoped lang="sass">
.recipe-page
    grid-column: content-start / content-end
    &__minor-header
        font-family: var(--font-family-secondary)
        font-size: 30px
        line-height: 1.23
.page-top
    &__actions-panel
        display: flex
        justify-content: space-between
        align-items: center
    &__trend
        display: flex
        align-items: center
        column-gap: 12px
        span
            font-weight: 500
            font-size: 14px
            line-height: 1.29
    &__actions
        display: grid
        grid-auto-flow: column
        gap: 32px
    &__info
        padding: 32px 0
        border-bottom: 1px solid var(--color-gray-other-light)
        display: flex
        flex-wrap: wrap
        column-gap: 32px
        &>*
            margin: 6px 0
    &__info_flex
        display: flex
        align-items: center
        column-gap: 6px
        font-size: 12px
        line-height: 1.25
        text-decoration: none
    .author-avatar
        width: 32px
        height: 32px
        border-radius: 50%
        overflow: hidden
.page-recipe
    margin-top: 24px
    &__annotation
        font-size: 18px
        line-height: 1.56
    &__content
        margin-top: 57px
    &__column-left
        grid-column: 1/10
        padding-right: 64px
        border-right: 1px solid var(--color-gray-other-light)
    &__column-right
        grid-column: 10/14
.recipe-time
    display: flex
    align-items: center
    &__item
        display: grid
        padding-right: 24px
        &:not(:first-child)
            padding: 0 24px
        &+.recipe-time__item
            border-left: 1px solid var(--color-gray-other-light)
        span:first-child
            font-size: 12px
            line-height: 1.25
            color: var(--color-gray-dark)
            text-transform: uppercase
        span:last-child
            font-size: 14px
            line-height: 1.64
            text-transform: uppercase
.recipe-nutrition        
    &__content
        border-radius: 12px
        padding: 40px 18px
        background-color: var(--color-gray-light)
    &__facts
        margin-top: 28px
        display: grid
        gap: 8px
    &__fact
        padding: 4px 0
        display: flex
        justify-content: space-between
        &:not(:last-child)
            border-bottom: 1px solid var(--color-gray-other-light)
        span:first-child
            font-weight: 300
            line-height: 1.5
        span:last-child
            line-height: 1.5
.recipe-ingridients
    margin-top: 40px
    &__list
        margin-top: 32px
        display: grid
        gap: 24px
    &__item
        font-size: 18px
        line-height: 1.56
        &:deep(.ts-checkbox_checked)
            label
                text-decoration: line-through
                color: var(--color-gray-dark)
.recipe-instructions
    margin-top: 80px
    &__list
        margin-top: 38px
        display: grid
        gap: 36px
        list-style-type: none
        counter-reset: list-counter
    &__item
        font-size: 18px
        line-height: 1.56
        counter-increment: list-counter
        display: flex
        column-gap: 16px
        &::before
            content: counter(list-counter)
            font-size: 14px
            font-weight: 500
            line-height: 1
            background-color: var(--color-orange)
            min-width: 24px
            height: 24px
            border-radius: 50%
            display: flex
            align-items: center
            justify-content: center
            color: var(--color-white)
.fresh-recipes
    margin-top: 48px
    &__list
        margin-top: 32px
        display: grid
        gap: 32px
.page-recipe__column-right:deep(.newsletter)
    margin-top: 64px
    padding: 56px 20px
    text-align: center
    border-radius: 6px
    .newsletter__title
        font-size: 36px
        line-height: 1.22
    .newsletter__text
        margin-top: 8px
        font-weight: 300
        line-height: 1.5
    form
        margin-top: 15px
        display: grid
        gap: 13px
    .newsletter__input
        height: 48px
        padding: 13px 13px 13px 48px
    .newsletter__btn
        height: 48px
        width: 100%
    .newsletter__files
        margin-top: 16px
        font-size: 10px
        line-height: 1.6
        max-width: 213px
    .newsletter__input-container svg
        display: block
@media(max-width: 1170px)
    .page-recipe
        &__column-left
            padding-right: 32px
        &__column-right
            grid-column: 10/15
@media(max-width: 780px)
    .recipe-page
        &__minor-header
            font-size: 24px
            line-height: 1.54
    .page-recipe
        &__column-left
            grid-column: left / right
            padding-right: 0    
            border: none
        &__column-right
            grid-column: left / right
            margin-top: 40px
    .page-top
        &__trend
            svg
                width: 16px
                height: 16px
            span
                font-size: 10px
                line-height: 1.6
        &__actions
            column-gap: 16px
            svg
                width: 16px
                height: 16px
        h1
            margin-top: 8px
            font-size: 30px
            line-height: 1.23
        &__info
            padding: 16px 0
            column-gap: 24px
        &__info_flex
            font-size: 10px
            line-height: 1.6
            svg
                width: 12px
                height: 12px
    .page-recipe
        margin-top: 16px
        &__annotation
            font-size: 10px
            line-height: 1.6
        &__content
            margin-top: 16px
    .recipe-time
        &__item
            padding-right: 16px
            &:not(:first-child)
                padding: 0 16px
            span:first-child
                font-size: 10px
                line-height: 1.6
            span:last-child
                font-size: 12px
                line-height: 1.25
    .recipe-ingridients
        margin-top: 32px
        &__list
            margin-top: 16px
    .recipe-instructions
        margin-top: 32px
        &__list
            margin-top: 16px
            gap: 24px
        &__item
            font-size: 14px
            line-height: 1.64
            column-gap: 8px
            &::before
                min-width: 18px
                height: 18px
                font-size: 10px
                line-height: 1.6
    .fresh-recipes
        margin-top: 40px
    .page-recipe__column-right:deep(.newsletter)
        margin-top: 40px

</style>