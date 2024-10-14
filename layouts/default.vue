<template>
    <div class="default-layout container">
        <Header @show-search-panel="isShowSearchPanel = true" />
        <Transition name="tr-fade">
            <SearchPanel v-if="isShowSearchPanel" @close-search-panel="isShowSearchPanel = false" />
        </Transition>
        <main>
            <slot />
        </main>
    </div>
</template>

<script setup lang="ts">
import Header from "@/components/layout/Header.vue"
const SearchPanel = defineAsyncComponent(() => import("@/components/functional/SearchPanel.vue"))
const isShowSearchPanel = ref(false)
</script>

<style lang="sass">
</style>