<template>
    <div class="recipe-page">
        <section>
            <div class="page-top">
                <div class="page-top__actions-panel">
                    <div class="page-top__trend">
                        <svg width="24" height="24">
                            <use xlink:href="/images/iconsList.svg#icon-trending-up"></use>
                        </svg>
                        <span>
                            {{ recipe?.trend }}% would make this again
                        </span>
                    </div>
                    <div class="page-top__actions">
                        <svg width="32" height="32">
                            <use xlink:href="/images/iconsList.svg#icon-print"></use>
                        </svg>
                        <svg width="32" height="32" @click="handleFavorite">
                            <use xlink:href="/images/iconsList.svg#icon-bookmark"></use>
                        </svg>
                    </div>
                </div>
                <h1>{{ recipe?.name }}</h1>
                <div class="page-top__info">
                    <div class="page-top__author page-top__info_flex">
                        <div class="author-avatar">
                            <img width="32" height="32" :src="recipe?.author?.image" alt="">
                        </div>
                        <span>{{ recipe?.author?.name }}</span>
                    </div>
                    <div class="page-top__date page-top__info_flex">
                        <svg width="16" height="16">
                            <use xlink:href="/images/iconsList.svg#icon-calendar"></use>
                        </svg>
                        <time datetime="">{{ recipe?.date }}</time>
                    </div>
                    <a href="#comments" class="page-top__comments page-top__info_flex">
                        <svg width="16" height="16">
                            <use xlink:href="/images/iconsList.svg#icon-comment"></use>
                        </svg>
                        <span>{{ recipe?.comments?.total }}</span>
                    </a>
                    <div class="page-top__rating">
                        <Rating :rating="recipe?.rating" />
                    </div>
                </div>
            </div>
            <div class="page-recipe">
                <div class="page-recipe__annotation">
                    <p>
                        {{ recipe?.annotation }}
                    </p>
                </div>
                <div class="page-recipe__media">
                    <img v-if="!recipe?.video && recipe?.image" width="600" height="380" :src="recipe.image" alt="">
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
                                <span>{{ recipe?.stats?.prepTime }} min</span>
                            </div>
                            <div class="recipe-time__item">
                                <span>total time</span>
                                <span>{{ recipe?.stats?.totalTime }} min</span>
                            </div>
                            <div class="recipe-time__item">
                                <span>servings</span>
                                <span>{{ recipe?.stats?.servings }} min</span>
                            </div>
                        </div>
                        <div class="recipe-ingridients">
                            <h2 class="recipe-page__minor-header">Ingridients</h2>
                            <div class="recipe-ingridients__list">
                                <div v-for="(item, index) in recipe?.ingridients" class="recipe-ingridients__item">
                                    <Checkbox :name="'ing-' + index" self-checked>
                                        {{ item }}
                                    </Checkbox>
                                </div>
                            </div>
                        </div>
                        <div class="recipe-instructions">
                            <h2 class="recipe-page__minor-header">Instructions</h2>
                            <ol class="recipe-instructions__list">
                                <li v-for="(item, index) in recipe?.directions" :key="index"
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
                                    <div v-for="fact in recipe?.nutritionFacts" :key="fact.name"
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
                                    :recipe-info="item" two-columns with-rating path="recipe" />
                            </div>
                        </div>
                        <Newsletter />
                    </div>
                </div>
            </div>
        </section>
        <section id="comments" class="comments-block">
            <div class="comments-block__header">
                <h2>Comments</h2>
                <span v-if="comments?.total">({{ comments?.total }})</span>
            </div>
            <CommentForm :recipe-id="recipe?.id" />
            <template v-if="comments?.items">
                <Select :options="selectOptions" placeholder="Sort by" @select="(value) => selectedOption = value"
                    :selected-option="selectedOption" />
                <div class="comments-block__list">
                    <Comment v-for="(item, index) in comments?.items" :key="index" :comment="item"
                        class="comments-block__list-item" />
                </div>
            </template>
        </section>
    </div>
</template>

<script setup lang="ts">
import Rating from '~/components/ui/Rating.vue';
import Checkbox from '~/components/ui/Checkbox.vue';
import Newsletter from '~/components/functional/Newsletter.vue';
import Card from '~/components/ui/Card.vue';
import CommentForm from '~/components/functional/CommentForm.vue';
const Select = defineAsyncComponent(() => import('~/components/ui/Select.vue'))
const Comment = defineAsyncComponent(() => import('~/components/ui/Comment.vue'))

const route = useRoute()
const selectOptions = [
    { id: 'recent', value: 'Most Recent' },
    { id: 'helpful', value: 'Most Helpful' },
    { id: 'oldest', value: 'Oldest' },
    { id: 'ratings', value: 'Ratings' },
]
const selectedOption = ref(selectOptions[0])
const { data: recipe } = await useFetch(`/api/prisma/recipe/${route.params.detail}`)
const { data: comments } = await useFetch(`/api/prisma/comments/${recipe.value?.id}`)

const handleFavorite = async () => {
    await $fetch(`/api/prisma/favorite/update`, {
        method: 'POST',
        body: {
            recipeId: recipe.value?.id
        }
    })
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
    &__rating
        display: flex
        align-items: center
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
        border-color: var(--color-orange)
    .newsletter__files
        margin-top: 16px
        font-size: 10px
        line-height: 1.6
        max-width: 213px
    .newsletter__input-container svg
        display: block
.comments-block
    margin-top: 120px
    &__header
        display: flex
        align-items: flex-end
        column-gap: 16px
        h2
            font-family: var(--font-family-secondary)
            font-size: 60px
            line-height: 1.2
        span
            font-size: 24px
            line-height: 1.58
    &__list
        margin-left: -48px
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
    .comments-block
        margin-top: 40px
        &__header
            h2
                font-size: 30px
                line-height: 1.23
            span
                font-size: 12px
                line-height: 1.25
        &__list
            margin-left: -16px

</style>