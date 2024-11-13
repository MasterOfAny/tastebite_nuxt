<template>

    <Head>
        <Title>Categories</Title>
    </Head>
    <div class="categories-page">
        <h1>Categories</h1>
        <div class="categories-page__cards">
            <Card v-for="(item, index) in categories" :key="index" :recipeInfo="item" round-image path="categories" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue';

const categories = (await useFetch(`/api/prisma/category/all-categories`)).data.value
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