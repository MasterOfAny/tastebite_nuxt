<template>
    <div class="search-panel container">
        <div class="search-panel-content">
            <div class="search-panel__top">
                <input class="search-panel__input tb-input" type="text" placeholder="Search..." @input="search" />
                <Loading v-if="loading && results?.length === 0" />
                <svg class="search-panel__close" width="20" height="20" @click="emit('closeSearchPanel')">
                    <use xlink:href="/images/iconsList.svg#icon-close"></use>
                </svg>
            </div>
            <div class="search-panel__results">
                <div class="results-item" v-for="item in results?.categories">
                    <NuxtLink :to="`/categories/${processLink(item?.name, true)}`" target="_blank">
                        {{ item?.name }}
                    </NuxtLink>
                </div>
                <div class="results-item" v-for="item in results?.recipes">
                    <div class="results-item__image-container">
                        <img v-if="item.image" class="results-item__image" :src="item.image" alt="">
                        <div v-else class="results-item__no-image" />
                    </div>
                    <NuxtLink :to="`/recipes/${processLink(item?.name, true)}`" target="_blank"
                        class="results-item__info">
                        <div class="results-item__name">{{ item?.name }}</div>
                        <div class="results-item__category">{{ item?.category?.name }}</div>
                    </NuxtLink>
                </div>
                <Button v-if="results?.recipes?.length > 0" class="search-panel__results-btn site-btn_bw-btn"
                    @click="router.push(`/search?search=${searchQuery}`)">
                    See all {{ results?.recipes?.length + ' ' + getNoun(results?.recipes?.length, 'recipe', 'recipes',
                        'recipes') }}
                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const Button = defineAsyncComponent(() => import('~/components/ui/Button.vue'))
const Loading = defineAsyncComponent(() => import('~/components/ui/Loading.vue'))
import processLink from '@/composables/processLink';
import { getNoun } from '@/composables/getNoun';
const emit = defineEmits({
    closeSearchPanel() { return null }
})

const router = useRouter()
const results = ref([])
const searchQuery = ref('')
const loading = ref(false)
let abortController = new AbortController()

const search = async (e: Event) => {
    results.value.length = 0
    abortController.abort('cancel)');
    abortController = new AbortController()
    searchQuery.value = (e.target as HTMLInputElement).value;
    try {
        loading.value = true
        results.value = await $fetch(`/api/prisma/search?search=${searchQuery.value}`, {
            signal: abortController.signal,
        });
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Abort')
        } else {
            console.error('request error', error)
        }
    }
    loading.value = false
}
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
        border-bottom: 1px solid var(--color-gray-dark)
        padding: 10px 24px 10px 0
        font-size: 18px
        flex: 1
    &__close
        cursor: pointer
        position: absolute
        right: 0
    &:deep(.loading-icon)
        position: absolute
        right: 40px
        z-index: 1
        circle
            stroke: var(--color-gray-dark)
    &__results
        margin-top: 20px
        max-height: 600px
        overflow-y: auto
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
    a
        text-decoration: none
        width: 100%
        &:hover
            color: var(--color-orange)

</style>