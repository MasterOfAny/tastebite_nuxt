<template>
</template>

<script setup lang="ts">
const route = useRoute()
const userAuth = useCookie<Number>('userAuth')
definePageMeta({
    layout: false,
})
onBeforeMount(async () => {
    try {
        const res = await $fetch(`http://localhost:3000/api/google/callback?code=${route.query.code}`)
        await $fetch('/api/prisma/user/save', {
            method: 'POST',
            body: {
                google: res
            }
        })
        userAuth.value = 1
    } catch (error) {

    }
    window.close()
})
</script>

<style scoped></style>