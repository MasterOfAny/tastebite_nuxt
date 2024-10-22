<template>
    <div class="categories-page">
        <h1>Categories</h1>
        <div class="categories-page__cards">
            <Card v-for="(item, index) in categoriesData" :key="index" :recipeInfo="item" round-image />
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue';
const categoriesData = [
    {
        image: '/images/recipe-img.jpg',
        name: 'Seafood',
    },
    {
        image: '/images/recipe-img.jpg',
        name: 'Soup',
    },
    {
        image: '/images/recipe-img.jpg',
        name: 'Pancakes',
    },
    {
        image: '/images/recipe-img.jpg',
        name: 'Meat',
    },
    {
        image: '/images/recipe-img.jpg',
        name: 'Chicken',
    },
    {
        image: '/images/recipe-img.jpg',
        name: 'Dessert',
    },
    {
        image: '/images/recipe-img.jpg',
        name: 'Dessert',
    }
]
</script>

<style scoped lang="sass">
.categories-page
    grid-column: content-start / content-end
    h1
        font-family: var(--font-family-secondary)
        font-size: 60px
        line-height: 1.2
    &__cards
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(255px, 1fr))
        gap: 30px
        margin-top: 29px
        padding-top: 64px
        border-top: 1px solid var(--color-gray-other-light)
@media(max-width: 780px)
    .categories-page
        h1
            font-size: 24px
            line-height: 1.54
        &__cards
            grid-template-columns: repeat(auto-fill, minmax(158px, 1fr))
            margin-top: 24px
            padding: 0
            border: none
@media(max-width: 390px)
    .categories-page
        &__cards
            grid-template-columns: repeat(auto-fill, minmax(128px, 1fr))

</style>