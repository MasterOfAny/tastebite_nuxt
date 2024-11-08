<template>
    <meta name="robots" content="noindex, nofollow">
</template>

<script setup lang="ts">
const route = useRoute()
definePageMeta({
    layout: false,
})
onBeforeMount(async () => {
    try {
        await $fetch(`http://localhost:3000/api/google/callback?code=${route.query.code}`)
        const isAuth = useCookie<boolean>('isAuth')
        isAuth.value = true
    } catch (error) {

    }
    window.close()
})
</script>

<style scoped></style>