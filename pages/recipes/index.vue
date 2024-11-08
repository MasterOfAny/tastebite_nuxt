<template>
    <div class="recipes-page">
        <h1>Recipes</h1>
        <Select class="recipes-page__select" placeholder="Sort by" :options="selectOptions"
            @select="(value) => onSelect(value)" :selectedOption="selectedOption" />
        <div :class="{ 'recipes-page__cards': true, 'recipes-page__cards_loading': status === 'pending' }">
            <Card v-for="(item, index) in recipes?.items" :key="index" :recipeInfo="item" path="recipes" />
        </div>
        <Pagination class="recipes-page__pagination" :page="recipes?.page"
            :pages="recipes?.page + recipes?.pagesLeft" />
    </div>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue';
import Select from '~/components/ui/Select.vue';
import type { RouteLocationNormalized } from 'vue-router';
const Pagination = defineAsyncComponent(() => import('~/components/ui/Pagination.vue'))

onBeforeRouteUpdate((to, from) => {
    endpoint.value = processEndpoint(to)
})
const route = useRoute()
const router = useRouter()
const selectOptions = [
    {
        id: 'recent',
        value: 'Most Recent'
    },
    {
        id: 'oldest',
        value: 'Oldest'
    },
    {
        id: 'ratings',
        value: 'Ratings'
    },
]
const selectedOption = ref(route.query.sort ? selectOptions.find(option => option.id === route.query.sort) : selectOptions[0])
const endpoint = ref('')
const processEndpoint = (to: RouteLocationNormalized) => {
    let url = `/api/prisma/recipe/all-recipes`
    const params = new URLSearchParams();
    if (to.query.page) {
        params.append('page', to.query.page as string);
    }
    if (selectedOption.value?.id) {
        params.append('sort', selectedOption.value.id);
    }
    return `${url}?${params.toString()}`;
}
endpoint.value = processEndpoint(route)
const { data: recipes, status, error } = await useFetch(endpoint, { watch: [endpoint] })

const onSelect = (value: { id: string, value: string }) => {
    selectedOption.value = value
    router.push({ query: { sort: value.id } })
}
</script>

<style scoped lang="sass">
.recipes-page
    grid-column: content-start / content-end
    h1
        font-family: var(--font-family-secondary)
        font-size: 60px
        line-height: 1.2
    &__select
        margin-top: 29px
    &__cards
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(255px, 1fr))
        gap: 30px
        margin-top: 40px
        &_loading
            opacity: 0.5
    &__pagination
        margin-top: 120px
@media(max-width: 780px)
    .recipes-page
        h1
            font-size: 24px
            line-height: 1.54
        &__cards
            grid-template-columns: repeat(auto-fill, minmax(158px, 1fr))
            margin-top: 24px
@media(max-width: 390px)
    .recipes-page
        &__cards
            grid-template-columns: repeat(auto-fill, minmax(128px, 1fr))
</style>