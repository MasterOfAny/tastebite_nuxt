<template>
    <div class="default-layout container">
        <Header @show-search-panel="isShowSearchPanel = true" />
        <LazySearchPanel v-if="isShowSearchPanel" @close-search-panel="isShowSearchPanel = false" />
        <slot />
    </div>
</template>

<script setup lang="ts">
const isShowSearchPanel = ref(true)
</script>

<style lang="sass">
</style>