<template>
    <div class="main-page">
        <div class="hero-card">
            <div class="hero-card__image">
                <img src="/images/main-hero.jpg" alt="">
            </div>
            <div class="hero-card__text">
                <div class="hero-card__text-content">
                    <div class="hero-card__text-trend">
                        <svg width="20" height="20">
                            <use xlink:href="/images/iconsList.svg#icon-trending-up"></use>
                        </svg>
                        <span>
                            85% would make this again
                        </span>
                    </div>
                    <h3 class="hero-card__text-title">Mighty Super Cheesecake</h3>
                    <p class="hero-card__text-p">
                        Look no further for a creamy and ultra smooth classic cheesecake recipe! no one can deny its
                        simple
                        decadence.
                    </p>
                    <div class="hero-card__text-arrow">
                        <svg width="20" height="20">
                            <use xlink:href="/images/iconsList.svg#icon-arrow"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <section class="content-section">
            <h2 class="content-section__header">Super Delicious</h2>
            <div class="content-section__cards">
                <Card v-for="item in fakeData" :key="item.name" :recipeInfo="item" withRating />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Card from "@/components/ui/Card.vue"
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
        rating: 4.6,
        name: 'Mighty Super Cheesecake',
        category: 'Dessert',
        quantity: 18
    },
    {
        image: '/images/recipe-img.jpg',
        rating: 4.6,
        name: 'Mighty Super Cheesecake',
        category: 'Dessert',
        quantity: 66
    },
]

</script>

<style scoped lang="sass">
.hero-card
    display: flex
    flex-wrap: wrap
    &__image
        width: 100%
        img
            width: 100%
            border-radius: 14px 14px 0 0
    &__text
        position: relative        
        display: grid
        align-items: center
        background-color: var(--color-light-blue)
        padding: 0 40px
    &__text-content
        display: grid
        row-gap: 12px
    &__text-trend
        display: flex
        align-items: center
        column-gap: 8px
        span
            font-weight: 500
            font-size: 14px
            line-height: 1.29
    &__text-title
        font-family: var(--font-family-secondary)
        font-size: 45px
        line-height: 1.24
    &__text-p
        font-size: 18px
        line-height: 1.56
    &__text-arrow
        position: absolute
        right: 20px
        bottom: 20px
.content-section
    &__cards
        display: flex
        column-gap: 30px
@media(min-width: 990px)
    .hero-card
        &__image
            border-radius: 14px 0 0 14px
            flex: 0 0 auto
            width: 58%
        &__text
            flex: 0 0 auto
            width: 42%
@media(max-width: 990px)
    .hero-card
        &__text
            padding: 32px
            border-radius: 0 0 14px 14px
        &__text-arrow
            background-color: var(--color-white)
            display: flex
            justify-content: center
            align-items: center
            width: 32px
            height: 32px
            border-radius: 50%
            svg
                width: 12px
                height: 12px

    
</style>