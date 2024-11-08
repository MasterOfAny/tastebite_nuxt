<template>
    <section class="content-section">
        <div class="hero-card">
            <NuxtLink :to="`/recipes/${processLink(randomRecipe?.name, true)}`" class="hero-card__image">
                <img :src="randomRecipe?.image || '/images/no-image.svg'" alt="">
            </NuxtLink>
            <div class="hero-card__text">
                <div class="hero-card__text-content">
                    <div class="hero-card__text-trend">
                        <svg width="20" height="20">
                            <use xlink:href="/images/iconsList.svg#icon-trending-up"></use>
                        </svg>
                        <span>
                            {{ randomRecipe?.trend }}% would make this again
                        </span>
                    </div>
                    <NuxtLink to="#" class="hero-card__text-title">{{ randomRecipe?.name }}</NuxtLink>
                    <p class="hero-card__text-p">
                        {{ randomRecipe?.annotation }}
                    </p>
                    <div class="hero-card__text-arrow">
                        <svg width="20" height="20">
                            <use xlink:href="/images/iconsList.svg#icon-arrow"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="content-section ">
        <h2 class="content-section__header">Super Delicious</h2>
        <div class="content-section__cards grid-scroll">
            <Card class="content-section__card" v-for="(item, index) in randomRecipes" :key="index" :recipeInfo="item"
                withRating path="recipes" />
        </div>
    </section>
    <section class="content-section">
        <h2 class="content-section__header">Sweet Tooth</h2>
        <div class="content-section__cards grid-scroll">
            <Card class="content-section__card" v-for="(item, index) in recipesByCategory?.recipes" :key="index"
                :recipeInfo="item" withRating path="recipes" />
        </div>
    </section>
    <section class="content-section">
        <h2 class="content-section__header">Popular categories</h2>
        <div class="content-section__cards popular-categories">
            <Card class="content-section__card" v-for="(item, index) in randomCategories" :key="index"
                :recipeInfo="item" roundImage path="categories" />
        </div>
    </section>
    <section class="content-section newsletter-section">
        <Newsletter />
    </section>
    <!--  <section class="content-section">
        <h2 class="content-section__header">Hand-Picked Collections</h2>
        <div class="content-section__cards hand-picked">
            <Card class="content-section__card" v-for="(item, index) in []" :key="index"
                :recipeInfo="item" withQuantity />
        </div>
    </section> -->
    <section class="content-section">
        <h2 class="content-section__header">Latest Recipes</h2>
        <div class="content-section__cards latest-recipes">
            <Card class="content-section__card" v-for="(item, index) in allRecipes" :key="index" :recipeInfo="item"
                path="recipes" />
        </div>
        <button class="site-btn site-btn_bw-btn latest-recipes-load-more-btn">Load More</button>
    </section>
</template>

<script setup lang="ts">
import Card from "@/components/ui/Card.vue"
import processLink from "@/composables/processLink";
import Newsletter from "~/components/functional/Newsletter.vue";
import type { Category, Recipe } from "~/types/types";

const requests = await Promise.all([
    useFetch('/api/prisma/recipe/random-recipes'),
    useFetch('/api/prisma/recipe/random-recipes?count=3'),
    useFetch('/api/prisma/recipe/recipes-by-category/dessert?per_page=3'),
    useFetch('/api/prisma/category/random-categories?count=6'),
    useFetch('/api/prisma/recipe/all-recipes'),
])

const [randomRecipe, randomRecipes, recipesByCategory, randomCategories, allRecipes] = (requests).map((res) => res.data.value) as [Recipe, Recipe[], Recipe[], Category[], Recipe[],]

</script>

<style scoped lang="sass">
.main-page
    padding-bottom: 120px        
.content-section
    grid-column: content-start / content-end
    &+.content-section
        margin-top: 64px
    &__header
        font-family: var(--font-family-secondary)
        font-size: 36px
        line-height: 1.22
    &__cards
        margin-top: 40px
        &.grid-scroll
            column-gap: 30px
            .content-section__card
                min-width: 264px
        &.popular-categories
            display: grid
            grid-template-columns: repeat(auto-fit, minmax(89px,1fr))
            gap: 30px
        &.hand-picked
            display: flex
            flex-wrap: wrap
            margin-left: -15px
            margin-right: -15px
            .content-section__card
                width: 50%
                padding: 15px
        &.latest-recipes
            display: flex
            flex-wrap: wrap
            margin-left: -15px
            margin-right: -15px
            .content-section__card
                width: 25%
                padding: 15px
.latest-recipes-load-more-btn
    margin: 80px auto 0
.hero-card
    display: flex
    flex-wrap: wrap
    &__image
        width: 100%
        img
            width: 100%
            height: 100%
            border-radius: 14px 14px 0 0
    &__text
        position: relative        
        display: grid
        align-items: center
        background-color: var(--color-light-blue)
        padding: 30px 40px
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
        transition: color 0.3s 
        text-decoration: none
    &__text-p
        font-size: 18px
        line-height: 1.56
        display: -webkit-box
        -webkit-line-clamp: 5
        -webkit-box-orient: vertical
        overflow: hidden
        text-overflow: ellipsis
    &__text-arrow
        position: absolute
        right: 20px
        bottom: 20px       
        transition:  background-color 0.3s 
    &:hover
        .hero-card__text-title
            color: var(--color-orange)
        .hero-card__text-arrow
            display: flex
            justify-content: center
            align-items: center
            width: 40px
            height: 40px
            border-radius: 50%
            background-color: var(--color-white)
            right: 10px
            bottom: 14px
            svg
                color: var(--color-orange)
.newsletter-section
    grid-column: left / right
.newsletter
    padding: 104px 0 110px 0
    &:deep(.newsletter-content)
        max-width: 553px
        margin: 0 auto
    &:deep(.newsletter__title)
        font-weight: 700
        font-size: 76px
        line-height: 1.13
        text-align: center
    &:deep(.newsletter__text)
        margin-top: 16px
        font-size: 24px
        line-height: 1.58
        text-align: center
    &:deep(.newsletter__files)
        margin-top: 21px
        font-size: 12px
        line-height: 1.25
        text-align: center
    &:deep(form)
        margin-top: 24px
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
    .content-section
        &__cards
            margin-top: 24px
            &.latest-recipes
                .content-section__card
                    width: 33.33%
    .latest-recipes-load-more-btn
        margin-top: 40px
@media(max-width: 768px)
    .content-section
        &__header
            font-size: 24px
            line-height: 1.54
        &+.content-section
            margin-top: 56px
        &__cards
            margin-top: 24px
            &.hand-picked
                margin-left: -8px
                margin-right: -8px
                .content-section__card
                    padding: 8px
                    width: 100%
            &.latest-recipes
                margin-left: -8px
                margin-right: -8px
                .content-section__card
                    padding: 8px
                    width: 50%
    .newsletter
        padding: 56px 21px
        &:deep(.newsletter-content)
            max-width: 320px
        &:deep(.newsletter__title)
            font-size: 36px
            line-height: 1.22
        &:deep(.newsletter__text)
            margin-top: 8px
            font-size: 16px
            line-height: 1.5
            font-weight: 300
        &:deep(.newsletter__files)
            margin-top: 16px
            font-size: 10px
            line-height: 1.6
        &:deep(form)
            margin-top: 15px    
            display: grid
            gap: 13px
        &:deep(.newsletter__input)
            border-radius: 4px
            padding: 13px 13px 13px 48px
            height: 48px
        &:deep(.newsletter__btn)
            width: 100%
            padding: 0
            height: 48px
            border-color: transparent
        &:deep(.newsletter__input-container svg)
            display: block
</style>