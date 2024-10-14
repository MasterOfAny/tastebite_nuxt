<template>
    <div class="search-panel container">
        <div class="search-panel-content">
            <div class="search-panel__top">
                <input class="search-panel__input" type="text" placeholder="Search..." />
                <svg class="search-panel__close" width="20" height="20" @click="emit('closeSearchPanel')">
                    <use xlink:href="/images/iconsList.svg#icon-close"></use>
                </svg>
            </div>
            <div class="search-panel__results">
                <div class="results-item" v-for="item in fakeData">
                    <div
                        :class="{ 'results-item__image-container': true, 'results-item__image-container-category': item.type === 'category' }">
                        <img v-if="item.image" class="results-item__image" :src="item.image" alt="">
                        <div v-else class="results-item__no-image" />
                    </div>
                    <div class="results-item__info">
                        <div class="results-item__name">{{ item.name }}</div>
                        <div class="results-item__category">{{ item?.category || item.type }}</div>
                    </div>
                </div>
                <Button class="search-panel__results-btn site-btn_bw-btn">See all 343 results</Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '../ui/Button.vue';
const emit = defineEmits({
    closeSearchPanel() { return null }
})

const fakeData = [
    {
        type: 'category',
        image: '',
        name: 'cake',
    },
    {
        type: 'recipe',
        image: '',
        name: 'almond cinnamon',
        category: 'sponge cake'
    },
    {
        type: 'recipe',
        image: '',
        name: 'almond cinnamon',
        category: 'sponge cake'
    },
    {
        type: 'recipe',
        image: '',
        name: 'almond cinnamon',
        category: 'sponge cake'
    },
    {
        type: 'recipe',
        image: '',
        name: 'almond cinnamon',
        category: 'sponge cake'
    },
    {
        type: 'recipe',
        image: '',
        name: 'almond cinnamon',
        category: 'sponge cake'
    }
]
</script>

<style scoped lang="sass">
.search-panel
    position: fixed
    left: 0
    right: 0
    background-color: var(--color-gray-light)
    z-index: 1
    &__top
        position: relative
        display: flex
        align-items: center
    &__input
        outline: none
        border: none
        border-bottom: 1px solid var(--color-gray-dark)
        background-color: transparent
        padding: 10px 24px 10px 0
        font-size: 18px
        flex: 1
    &__close
        cursor: pointer
        position: absolute
        right: 0
    &__results
        margin-top: 20px
    &__results-btn
        margin: 24px auto
.search-panel-content
    grid-column: content-start / content-end
    padding: 50px 0 24px 0
.results-item
    display: flex
    align-items: center
    column-gap: 12px
    padding: 16px 0
    border-bottom: 1px solid var(--color-gray-other-light)
    &__image-container
        width: 65px
        border-radius: 2px
    &__image-container .results-item__image,
    &__image-container .results-item__no-image
        width: 65px
        height: 49px
        background-color: var(--color-gray-dark)
    .results-item__image-container-category .results-item__image,
    .results-item__image-container-category .results-item__no-image
        width: 65px
        height: 65px
        border-radius: 50%

</style>