<template>
</template>

<script setup lang="ts">
const route = useRoute()
definePageMeta({
    layout: false,
})
onBeforeMount(async () => {
    try {
        const res = await $fetch(`http://localhost:3000/api/google/callback?code=${route.query.code}`)
        /*    await $fetch('/api/prisma/user', {
               method: 'POST',
               body: {
                   google: res
               }
           }) */
        console.log(res);

    } catch (error) {

    }
    //window.close()
})
</script>

<style scoped></style>