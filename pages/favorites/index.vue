<template>
    <div class="favorites-page">
        <div class="favorites-page__header">
            <div class="favorites-page__header-icon">
                <div class="favorites-page__header-favorite">
                    <svg width="22" height="22">
                        <use xlink:href="/images/iconsList.svg#icon-favorite-filled"></use>
                    </svg>
                </div>
                <h1>Favorites</h1>
            </div>
            <Select class="category-details__select" placeholder="Sort by" :options="selectOptions"
                @select="(value) => selectedOption = value" :selectedOption="selectedOption" />
        </div>
        <ClientOnly>
            <div class="favorites-page__controls">
                <div class="favorites-page__controls-quantity">
                    98 Recipes
                </div>
                <div class="favorites-page__controls-item">
                    <svg width="16" height="16">
                        <use xlink:href="/images/iconsList.svg#icon-edit"></use>
                    </svg>
                    <span>Select</span>
                </div>
                <div class="favorites-page__controls-item">
                    <Checkbox name="all">All</Checkbox>
                </div>
                <div class="favorites-page__controls-item">
                    <svg width="16" height="16">
                        <use xlink:href="/images/iconsList.svg#icon-delete-bin"></use>
                    </svg>
                    <span>Delete</span>
                </div>
            </div>
            <div class="favorites-page__cards">
                <Card v-for="(item, index) in favorites" :key="index" :recipeInfo="item" path="recipes" />
            </div>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue';
import Select from '~/components/ui/Select.vue';
import Checkbox from '~/components/ui/Checkbox.vue';
const favorites = ref([])
onMounted(async () => {
    favorites.value = await $fetch('/api/prisma/favorite/get')
    console.log(favorites.value);
})
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
.favorites-page
    grid-column: content-start / content-end
    &__header
        display: flex
        justify-content: space-between
    &__header-icon
        display: flex
        align-items: center
        column-gap: 16px
    &__header-favorite
        width: 44px
        height: 44px
        border-radius: 50%
        background-color: var(--color-orange)
        color: var(--color-white)
        display: flex
        justify-content: center
        align-items: center
        svg
            color: inherit
    h1
        font-family: var(--font-family-secondary)
        font-size: 36px
        line-height: 1.22
    &__controls
        margin-top: 32px
        padding-top: 34px
        border-top: 1px solid var(--color-gray-other-light)
        display: flex
        column-gap: 40px
        align-items: center
    &__controls-item
        display: flex
        align-items: center
        column-gap: 8px
        cursor: pointer
        svg
            color: inherit
        &:hover
            color: var(--color-orange)
    &__cards
        margin-top: 64px
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(255px, 1fr))
        gap: 30px
@media(max-width: 780px)
    .favorites-page
        h1
            font-size: 24px
            line-height: 1.54
        &__header-favorite
            width: 24px
            height: 24px
            svg
                width: 12px
                height: 12px
        &__controls
            margin-top: 13px
            padding-top: 16px
            font-size: 10px
            line-height: 1.6
            column-gap: 24px
            svg
                width: 12px
                height: 12px
        &__cards
            grid-template-columns: repeat(auto-fill, minmax(158px, 1fr))
            margin-top: 24px
@media(max-width: 390px)
    .favorites-page
        &__cards
            grid-template-columns: repeat(auto-fill, minmax(128px, 1fr))
</style>