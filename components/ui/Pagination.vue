<template>
    <div class="pagination">
        <NuxtLink v-if="props.page > 1"
            :to="{ name: route.name, params: route.params, query: { ...route.query, page: props.page - 1 } }"
            class="pagination__item">
            prev
        </NuxtLink>

        <template v-for="page in items" :key="page">
            <NuxtLink v-if="page !== 0"
                :to="{ name: route.name, params: route.params, query: { ...route.query, page } }"
                :class="{ 'pagination__item': true, 'pagination__item_active': page === props.page }">
                {{ page }}
            </NuxtLink>
            <div v-else class="pagination__item not-active">...</div>
        </template>

        <NuxtLink v-if="props.page < props.pages"
            :to="{ name: route.name, params: route.params, query: { ...route.query, page: props.page + 1 } }"
            class="pagination__item">
            next
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    page: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
})

const route = useRoute()

const middlePart = (): number[] => {
    const pagesArray: number[] = []
    if (props.pages <= 5) {
        for (let i = 2; i <= props.pages; i++) {
            pagesArray.push(i)
        }
    } else {
        if (props.page > 4) pagesArray.push(0)
        const start = Math.max(2, props.page - 2)
        const end = Math.min(props.pages - 1, props.page + 4)
        for (let i = start; i <= end; i++) {
            pagesArray.push(i)
        }
        if (props.page < props.pages - 6) pagesArray.push(0)
    }
    return pagesArray
}

const items = computed<number[]>(() => {
    if (props.pages > 1)
        return [1, ...middlePart(), props.pages]
    else
        return [1]
})

</script>

<style scoped lang="sass">
.pagination
    display: flex
    gap: 10px
    &__item
        display: flex
        align-items: center
        justify-content: center
        padding: 8px 13px
        border-radius: 5px
        background-color: var(--color-gray-other-light)
        text-decoration: none
        color: #333
        font-weight: 500
        &_active
            background-color: var(--color-orange)
            color: #fff
        &:hover:not(.not-active)
            background-color: var(--color-orange)
</style>