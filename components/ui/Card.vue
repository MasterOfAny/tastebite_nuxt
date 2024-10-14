<template>
    <div class="recipe-card">
        <div class="recipe-card__image">
            <img :src="props.recipeInfo?.image" alt="">
        </div>
        <Rating v-if="props.withRating" class="recipe-card__rating" :rating="props.recipeInfo?.rating || 2.77" />
        <div class="recipe-card__name-block">
            <span class="recipe-card__name">{{ props.recipeInfo?.name }}</span>
            <span class="site-btn site-btn_bw-btn" v-if="props.withQuantity">{{ props.recipeInfo?.quantity }}</span>
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
})
</script>

<style scoped lang="sass">
.recipe-card
    display: grid
    &__image
        img
            object-fit: cover
            border-radius: 14px
    &__rating
        margin-top: 16px
    &__name-block
        margin-top: 8px
        display: flex
        justify-content: space-between
        align-items: flex-end
    &__name
        font-weight: 600
        font-size: 20px
        line-height: 1.4
</style>