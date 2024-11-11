<template>
    <div class="default-layout container">
        <Header @show-search-panel="isShowSearchPanel = true" />
        <Transition name="tr-fade">
            <SearchPanel v-if="isShowSearchPanel" @close-search-panel="isShowSearchPanel = false" />
        </Transition>
        <main class="container">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Header from "@/components/layout/Header.vue"
import Footer from "@/components/layout/Footer.vue"
const SearchPanel = defineAsyncComponent(() => import("@/components/functional/SearchPanel.vue"))
const isShowSearchPanel = ref(false)

const { fetchFavorite } = useFavorite()

onMounted(async () => {
    await fetchFavorite()
})
</script>

<style lang="sass">
.default-layout
    main
        padding-bottom: 120px
@media(max-width: 990px)
    .default-layout
        main
            padding-bottom: 80px
</style>