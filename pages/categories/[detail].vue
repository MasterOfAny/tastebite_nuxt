<template>
    <div class="category-details">
        <img src="/images/Header Image.jpg" alt="">
        <div class="container">
            <div class="category-details__content">
                <h1>
                    <span>Deserts</span>
                    <span>(98 Recipes)</span>
                </h1>
                <div class="category-details__annotation">
                    <p>
                        One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good
                        Italian
                        meal. Here is a recipe I created after having this dish in a restaurant. Enjoy!
                    </p>
                    <Select class="category-details__select" placeholder="Sort by" :options="selectOptions"
                        @select="(value) => selectedOption = value" :selectedOption="selectedOption" />
                </div>
                <div class="category-details__cards">
                    <Card v-for="(item, index) in [...fakeData, ...fakeData, ...fakeData]" :key="index"
                        :recipeInfo="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue';
import Select from '~/components/ui/Select.vue';
//const route = useRoute()
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
const selectOptions = [
    {
        id: '1',
        value: 'Most Recent'
    },
    {
        id: '2',
        value: 'Oldest'
    },
    {
        id: '3',
        value: 'Ratings'
    },
]
const selectedOption = ref(selectOptions[0])
</script>

<style scoped lang="sass">
.category-details
    grid-column: left / right
    &__content
        margin-top: 104px
        grid-column: content-start / content-end
    h1
        display: flex
        align-items: baseline
        column-gap: 16px
        span:first-child
            font-family: var(--font-family-secondary)
            font-size: 36px
            line-height: 1.22
        span:last-child
            font-size: 16px
            font-weight: 400
            line-height: 1.5
    &__annotation
        margin-top: 14px
        display: flex
        align-items: flex-end
        column-gap: 100px
        flex-wrap: wrap
        p
            font-size: 18px
            line-height: 1.56
            flex: 1
    &__cards
        margin-top: 64px
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(255px, 1fr))
        gap: 30px
@media(max-width: 780px)
    .category-details
        h1
            span:first-child
                font-size: 24px
                line-height: 1.54
            span:last-child
                font-size: 10px
                line-height: 1.6
        &__cards
            grid-template-columns: repeat(auto-fill, minmax(158px, 1fr))
            margin-top: 24px
        &__annotation
            p
                font-size: 10px
                line-height: 1.6
                flex: unset
        &__select
            margin-top: 24px
            margin-left: auto
</style>