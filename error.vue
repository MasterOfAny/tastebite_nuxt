<template>

    <Head>
        <Title>404 Page not found</Title>
    </Head>
    <NuxtLayout is="default">
        <div class="error-page">
            <h1>404 Page not found</h1>
            <p>The page you're looking for seems to have disappeared! Maybe you typed in the URL incorrectly; why don't
                you check the web address again? If you bookmarked the page, try our search to find what you're looking
                for.</p>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
.error-page
    grid-column: content-start / content-end
    h1
        margin-top: 100px
        text-align: center
    p
        margin: 20px auto 0
        max-width: 600px
        line-height: 1.4
</style>