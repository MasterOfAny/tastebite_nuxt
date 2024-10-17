<template>
    <div
        :class="{ 'recipe-card': true, 'recipe-card_round': props.roundImage, 'recipe-card_quantity': props.withQuantity }">
        <NuxtLink to="#" class="recipe-card__image">
            <img :src="props.recipeInfo?.image" alt="">
        </NuxtLink>
        <Rating v-if="props.withRating" class="recipe-card__rating" :rating="props.recipeInfo?.rating || 2.77" />
        <div class="recipe-card__name-block">
            <NuxtLink to="#" class="recipe-card__name">{{ props.recipeInfo?.name }}</NuxtLink>
            <span class="site-btn site-btn_bw-btn" v-if="props.withQuantity">{{ props.recipeInfo?.quantity + ' ' +
                getNoun(props.recipeInfo?.quantity, 'Recipe', 'Recipes', 'Recipes') }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const Rating = defineAsyncComponent(() => import('@/components/ui/Rating.vue'))
const props = defineProps({
    recipeInfo: {
        type: Object as () => {
            image: string,
            rating: number,
            category: string,
            name: string,
            quantity: number
        },
        default: {}
    },
    withRating: {
        type: Boolean,
        default: false
    },
    withQuantity: {
        type: Boolean,
        default: false
    },
    roundImage: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped lang="sass">
.recipe-card
    display: grid
    &__image
        border: 1px solid transparent
        border-radius: 14px
        transition: border-color 0.3s
        width: 100%
        img
            width: 100%
            height: inherit
            object-fit: cover
            border-radius: 14px
            transition: transform 0.1s
    &__rating
        margin-top: 16px        
    &__name-block
        margin-top: 8px
        display: flex
        align-items: flex-end
        flex-wrap: wrap
        .site-btn
            margin-left: auto
            white-space: nowrap
    &__name
        font-weight: 600
        font-size: 20px
        line-height: 1.4
        text-decoration: none
        color: inherit
        transition: color 0.3s
        & + .site-btn
            margin-top: 20px
    &:hover
        .recipe-card__image
            border-color: var(--color-orange)
            img
                transform: scale(0.95)
        .recipe-card__name
            color: var(--color-orange)
    &_round
        .recipe-card__image
            border-radius: 50%
            img
                border-radius: 50%
                aspect-ratio: 1 / 1
        .recipe-card__name-block
            justify-content: center
    &_quantity
        .recipe-card__image
            height: 332px
            img
                border-radius: 14px 14px 0 0 
        .recipe-card__name-block
            margin-top: 0
            padding: 32px
            border: 1px solid var(--color-gray-other-light)
            border-radius: 0px 0px 12px 12px
@media(max-width: 768px)
    .recipe-card:not(.recipe-card_quantity)
        .recipe-card__name
            font-size: 12px
            line-height: 1.25
    .recipe-card_quantity
        .recipe-card__name
            margin-right: 0
        .recipe-card__image
            height: 242px
        .recipe-card__name-block
            padding: 24px
</style>