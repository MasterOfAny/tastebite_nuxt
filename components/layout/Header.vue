<template>
    <header class="header container">
        <div class="header-content">
            <NuxtLink to="/" class="header-logo-link">
                <svg class="header-logo" width="160" height="50">
                    <use xlink:href="/images/iconsList.svg#logo"></use>
                </svg>
            </NuxtLink>
            <nav :class="{ 'header-nav': true, 'header-nav_closed': !isMenuOpen.status }"
                :style="{ height: isMenuOpen.status ? '180px' : undefined }">
                <ul class="nav-list">
                    <li class="nav-list__item">
                        <NuxtLink to="#" class="nav-list__link">Recipes</NuxtLink>
                    </li>
                    <li class="nav-list__item">
                        <NuxtLink to="/categories" class="nav-list__link">Categories</NuxtLink>
                    </li>
                    <li class="nav-list__item">
                        <NuxtLink to="/favorites" class="nav-list__link">Favorites</NuxtLink>
                    </li>
                    <li class="nav-list__item">
                        <NuxtLink to="/about" class="nav-list__link">About us</NuxtLink>
                    </li>
                </ul>
            </nav>
            <div class="header-actions">
                <svg class="header-search" width="32" height="32" @click="emit('showSearchPanel')">
                    <use xlink:href="/images/iconsList.svg#icon-search"></use>
                </svg>
                {{ }}
                <div class="header-login">
                    <NuxtLink to="/account" class="header-profile">
                        <svg v-if="!userStore.userData?.photo" class="header-profile__no-auth" width="24" height="24">
                            <use xlink:href="/images/iconsList.svg#icon-user-no-auth"></use>
                        </svg>
                        <img v-else :src="userStore.userData?.photo || ''" alt="user" width="24" height="24">
                    </NuxtLink>
                    <div v-if="!isAuth" class="header-login__popup" @click="router.push('/login')">
                        Sign in or Sign up
                    </div>
                </div>
                <svg class="header-hamburger" width="20" height="20" @click="toggleHamburger">
                    <use v-if="!isMenuOpen.status && isMenuOpen.isDurationEnd"
                        xlink:href="/images/iconsList.svg#icon-hamburger"></use>
                    <use v-else xlink:href="/images/iconsList.svg#icon-close"></use>
                </svg>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const emit = defineEmits({
    showSearchPanel() { }
})
import { useUser } from '~/stores/user';

const userStore = useUser()
const isAuth = useCookie('isAuth')
const router = useRouter()
const isMenuOpen = ref({
    status: false,
    isDurationEnd: true
})
const toggleHamburger = () => {
    if (!isMenuOpen.value.isDurationEnd) return
    isMenuOpen.value.status = !isMenuOpen.value.status
    isMenuOpen.value.isDurationEnd = false
    setTimeout(() => {
        isMenuOpen.value.isDurationEnd = true
    }, 350)
}
</script>

<style scoped lang="sass">
.header 
    grid-column: left / right
    padding: 40px 0
.header-content
    display: flex
    flex-direction: row
    align-items: center
    flex-wrap: wrap
    grid-column: content-start / content-end
.header-nav
    margin: 0 auto
.nav-list
    list-style-type: none
    display: flex
    column-gap: 48px 
    &__link
        text-decoration: none
        color: inherit
        font-weight: 500
        line-height: 1.5
        padding: 4px 2px
.header-actions
    display: flex
    column-gap: 32px
    align-items: center
.header-profile
    display: flex
    justify-content: center
    align-items: center
    width: 32px
    height: 32px
    border-radius: 50%
    background-color: var(--color-gray-other-light)
.header-login
    position: relative
    &__popup
        display: none
        position: absolute
        right: 0
        width: 200px
        padding: 10px 20px
        background-color: var(--color-white)
        box-shadow: 0 9px 17px 0 rgba(0, 0, 0, 0.07)
        border-radius: 4px
        text-align: center
        cursor: pointer
        &:hover
            color: var(--color-orange)
    &:hover > .header-login__popup
        display: block
@media(min-width: 981px)
    .header-hamburger
        display: none
@media(max-width: 980px)
    .header-profile,
    .header-profile__no-auth,
    .header-search
        width: 20px
        height: 20px
    .header-nav
        overflow: hidden
        width: 100%
        order: 2
        transition: height 0.35s ease
        &_closed
            height: 0
    .nav-list
        margin-top: 10px
        padding-top: 10px
        flex-direction: column
        row-gap: 20px
    .header-actions
        margin-left: auto
@media(max-width: 780px)
    .header-logo
        width: 92px
        height: 28px
    .nav-list
        border-top: 1px solid var(--color-gray-dark)
</style>