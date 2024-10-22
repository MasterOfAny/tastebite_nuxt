<template>
    <div class="search-page">
        <h1>"Desert" - 180 resipes</h1>
        <div class="search-page__cards">
            <Card v-for="(item, index) in [...fakeData, ...fakeData, ...fakeData]" :key="index" :recipeInfo="item" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue';
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
        name: 'Mighty Super Cheesecake',
        category: 'Dessert',
        quantity: 66
    },
]
</script>

<style scoped lang="sass">
.search-page
    grid-column: content-start / content-end
    h1
        font-family: var(--font-family-secondary)
        font-size: 36px
        line-height: 1.22
        text-align: center
    &__cards
        margin-top: 40px
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(255px, 1fr))
        gap: 30px
@media(max-width: 780px)
    .search-page
        h1
            font-size: 24px
            line-height: 1.54
        &__cards
            grid-template-columns: repeat(auto-fill, minmax(158px, 1fr))
            margin-top: 24px
@media(max-width: 390px)
    .search-page
        &__cards
            grid-template-columns: repeat(auto-fill, minmax(128px, 1fr))
</style>