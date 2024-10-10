<template>
    <header class="header container">
        <div class="header-content">
            <NuxtLink to="/" class="header-logo-link">
                <svg class="header-logo" width="160" height="50">
                    <use xlink:href="/images/iconsList.svg#logo"></use>
                </svg>
            </NuxtLink>
            <nav class="header-nav">
                <ul class="nav-list">
                    <li class="nav-list__item">
                        <NuxtLink to="#" class="nav-list__link">Recipes</NuxtLink>
                    </li>
                    <li class="nav-list__item">
                        <NuxtLink to="#" class="nav-list__link">Categories</NuxtLink>
                    </li>
                    <li class="nav-list__item">
                        <NuxtLink to="#" class="nav-list__link">Ingredients</NuxtLink>
                    </li>
                    <li class="nav-list__item">
                        <NuxtLink to="#" class="nav-list__link">About us</NuxtLink>
                    </li>
                </ul>
            </nav>
            <svg class="header-search">
                <use xlink:href="/images/iconsList.svg#icon-search"></use>
            </svg>
            <div class="header-profile">
                <svg class="header-profile__no-auth">
                    <use xlink:href="/images/iconsList.svg#icon-user-no-auth"></use>
                </svg>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped lang="sass">
.header 
    grid-column: left / right
    height: 120px
.header-content
    display: flex
    flex-direction: row
    align-items: center
    grid-column: content-start / content-end
.nav-list
    list-style-type: none
    display: flex
    column-gap: 48px 
    &__item
        

</style>