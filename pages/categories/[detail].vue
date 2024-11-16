<template>

    <Head>
        <Title>{{ 'Category' + ' ' + route.params.detail }}</Title>
    </Head>
    <div class="category-details">
        <img width="100%" height="297px" src="/images/Header Image.jpg" alt="">
        <div class="container">
            <div class="category-details__content">
                <h1>
                    <span>{{ route.params.detail }}</span>
                    <span>{{ `(${category?.total} ${getNoun(category?.total ?? 0, 'Recipe', 'Recipes', 'Recipes')})`
                        }}</span>
                </h1>
                <div class="category-details__annotation">
                    <p>
                        One thing I learned living in the Canarsie section of Brooklyn, NY was how to cook a good
                        Italian
                        meal. Here is a recipe I created after having this dish in a restaurant. Enjoy!
                    </p>
                    <Select class="category-details__select" placeholder="Sort by" :options="selectOptions"
                        @select="(value) => onSelect(value)" :selectedOption="selectedOption" />
                </div>
                <div
                    :class="{ 'category-details__cards': true, 'category-details__cards_loading': status === 'pending' }">
                    <Card v-for="(item, index) in category?.recipes" :key="index" :recipeInfo="item" path="recipes" />
                </div>
                <Pagination v-if="category?.page + category?.pagesLeft > 1" class="category-details__pagination"
                    :page="category?.page" :pages="category?.page + category?.pagesLeft" />
            </div>
        </div>
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
    let url = `/api/prisma/recipes-by-category/${route.params.detail}`
    const params = new URLSearchParams();
    if (to.query.page) {
        params.append('page', to.query.page as string);
    }
    if (to.query.sort) {
        params.append('sort', to.query.sort as string);
    }
    return `${url}?${params.toString()}`
}
endpoint.value = processEndpoint(route)
const { data: category, status, error } = await useFetch(endpoint, { watch: [endpoint] })

const onSelect = (value: { id: string, value: string }) => {
    selectedOption.value = value
    router.push({ query: { sort: value.id } })
}

</script>

<style scoped lang="sass">
.category-details
    grid-column: left / right
    &__content
        margin-top: 104px
        grid-column: content-start / content-end
    h1
        display: flex
        align-items: baseline
        column-gap: 16px
        span:first-child
            font-family: var(--font-family-secondary)
            font-size: 36px
            line-height: 1.22
            &::first-letter
                text-transform: uppercase
        span:last-child
            font-size: 16px
            font-weight: 400
            line-height: 1.5
    &__annotation
        margin-top: 14px
        display: flex
        align-items: flex-end
        column-gap: 100px
        flex-wrap: wrap
        p
            font-size: 18px
            line-height: 1.56
            flex: 1
    &__cards
        margin-top: 64px
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(255px, 1fr))
        gap: 30px
        transition: opacity 0.3s ease-in-out
    &__cards_loading
        opacity: 0.5
    &__pagination
        margin-top: 160px
@media(max-width: 780px)
    .category-details
        h1
            span:first-child
                font-size: 24px
                line-height: 1.54
            span:last-child
                font-size: 10px
                line-height: 1.6
        &__cards
            grid-template-columns: repeat(auto-fill, minmax(158px, 1fr))
            margin-top: 24px
        &__annotation
            p
                font-size: 10px
                line-height: 1.6
                flex: unset
        &__select
            margin-top: 24px
            margin-left: auto
</style>