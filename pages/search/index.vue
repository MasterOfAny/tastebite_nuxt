<template>
    <div class="search-page">

        <Head>
            <Title>"{{ route.query.search }}" {{ recipes?.total + ' ' + getNoun(recipes?.total, 'recipe', 'recipes',
                'recipes') }} </Title>
        </Head>
        <h1>"{{ route.query.search }}" {{ recipes?.total + ' ' + getNoun(recipes?.total, 'recipe', 'recipes', 'recipes')
            }} </h1>
        <Select class="search-page__select" placeholder="Sort by" :options="selectOptions"
            @select="(value) => onSelect(value)" :selectedOption="selectedOption" />
        <div class="search-page__cards">
            <Card v-for="item in recipes?.items" :key="item?.id" :recipeInfo="item" />
        </div>
        <Pagination v-if="recipes?.page + recipes?.pagesLeft > 1" class="search-page__pagination" :page="recipes?.page"
            :pages="recipes?.page + recipes?.pagesLeft" />
    </div>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue';
import { getNoun } from '@/composables/getNoun';
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
    let url = `/api/prisma/search/page`
    const params = new URLSearchParams();
    if (to.query.search) {
        params.append('search', to.query.search as string);
    }
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
.search-page
    grid-column: content-start / content-end
    h1
        font-family: var(--font-family-secondary)
        font-size: 36px
        line-height: 1.22
        text-align: center
    &__cards
        margin-top: 40px
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(255px, 1fr))
        gap: 30px
    &__pagination
        margin-top: 80px
    &__select
        margin-top: 40px
@media(max-width: 780px)
    .search-page
        h1
            font-size: 24px
            line-height: 1.54
        &__cards
            grid-template-columns: repeat(auto-fill, minmax(158px, 1fr))
            margin-top: 24px
@media(max-width: 390px)
    .search-page
        &__cards
            grid-template-columns: repeat(auto-fill, minmax(128px, 1fr))
</style>