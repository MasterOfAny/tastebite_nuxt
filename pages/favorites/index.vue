<template>
    <div class="favorites-page">

        <Head>
            <Title>Favorites</Title>
        </Head>
        <div class="favorites-page__header">
            <div class="favorites-page__header-icon">
                <div class="favorites-page__header-favorite">
                    <svg width="22" height="22">
                        <use xlink:href="/images/iconsList.svg#icon-favorite-filled"></use>
                    </svg>
                </div>
                <h1>Favorites</h1>
            </div>
        </div>
        <ClientOnly>
            <div :class="{ 'favorites-page__controls': true, 'favorites-page__controls_loading': loading }">
                <div class="favorites-page__controls-quantity">
                    {{ favorite.favorite?.length + ' ' + getNoun(favorite.favorite?.length, 'Recipe', 'Recipes',
                        'Recipes') }}
                </div>
                <div class="favorites-page__controls-item" @click="isCheckbox = !isCheckbox">
                    <svg width="16" height="16">
                        <use xlink:href="/images/iconsList.svg#icon-edit"></use>
                    </svg>
                    <span>Select</span>
                </div>
                <div class="favorites-page__controls-item" @click="checkAllItems()">
                    <Checkbox name="all" :checked="checkedItems.length === favorite.favorite?.length" />
                    <span>All</span>
                </div>
                <div :class="{ 'favorites-page__controls-item': true, 'not-active': checkedItems.length < 1 }"
                    @click="deleteItems">
                    <svg width="16" height="16">
                        <use xlink:href="/images/iconsList.svg#icon-delete-bin"></use>
                    </svg>
                    <span>Delete</span>
                </div>
            </div>
            <div :class="{ 'favorites-page__cards': true, 'favorites-page__cards_loading': loading }">
                <template v-for="item in favorite.favorite" :key="item?.id">
                    <div class="favorites-page__cards-item">
                        <Checkbox v-if="isCheckbox" :name="item?.id" :checked="checkedItems.includes(item?.id)"
                            @change="checkItem(item?.id)" />
                        <Card :recipeInfo="item" path="recipes" with-rating />
                    </div>
                </template>
            </div>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue';
import Checkbox from '~/components/ui/Checkbox.vue';
import { useFavorite } from '~/stores/favorite';
import { useUser } from '~/stores/user';

const userStore = useUser()
if (!userStore.userData?.id) {
    await navigateTo('/login')
}
const favorite = useFavorite()
const loading = ref(false)
const isCheckbox = ref(false)
const checkedItems = ref([])
const checkItem = (id: string) => {
    if (checkedItems.value.includes(id)) {
        checkedItems.value.splice(checkedItems.value.indexOf(id), 1)
    } else {
        checkedItems.value.push(id)
    }
}
const checkAllItems = () => {
    isCheckbox.value = true
    if (checkedItems.value.length !== favorite.favorite.length) {
        checkedItems.value = favorite.favorite.map(item => item?.id)
    } else {
        checkedItems.value.length = 0
    }
}
const deleteItems = () => {
    loading.value = true
    favorite.updateFavorite({ recipeIds: checkedItems.value })
    loading.value = false
}
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
        &_loading
            pointer-events: none
    &__controls-item
        display: flex
        align-items: center
        column-gap: 8px
        cursor: pointer
        &:deep(.ts-checkbox)
            z-index: -1
        svg
            color: inherit
        &:hover
            color: var(--color-orange)
        &.not-active
            pointer-events: none
            color: var(--color-system-warning)
    &__cards
        margin-top: 64px
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(255px, 1fr))
        gap: 30px
        &_loading
            position: relative
            &::after
                content: ''
                position: absolute
                top: 0
                left: 0
                width: 100%
                height: 100%
                background-color: var(--color-gray-light)
                opacity: 0.5
                z-index: 1
                animation: loading 1s infinite
    &__cards-item
        position: relative
        z-index: 1
        &:deep(.ts-checkbox)
            position: absolute
            top: -10px
            left: -10px
            z-index: 2
@keyframes loading
    0%
        opacity: 0.5
    50%
        opacity: 0.2
    100%
        opacity: 0.5
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