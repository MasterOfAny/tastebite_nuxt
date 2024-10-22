<template>
    <div class="account">
        <div class="account__header">
            <h1>Profile</h1>
            <!-- <Button class="account__header-button" orange-button>save</Button> -->
        </div>
        <section class="account__body">
            <div class="account__photo-block">
                <div class="account__photo">
                    <img width="128" height="128"
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt="">
                </div>
                <Button class="account__header-btn" orange-button>Change</Button>
                <Button class="account__header-btn site-btn_bw-btn">Delete</Button>
            </div>
            <form class="account__form">
                <div class="account__form-inputs">
                    <div class="account__form-input">
                        <label for="account-name">full name</label>
                        <div class="account__form-input-wrapper">
                            <input id="account-name" type="text" />
                            <svg width="24" height="24">
                                <use xlink:href="/images/iconsList.svg#icon-user-no-auth"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="account__form-input">
                        <label for="account-username">username</label>
                        <div class="account__form-input-wrapper">
                            <input id="account-username" type="text" />
                            <svg width="24" height="24">
                                <use xlink:href="/images/iconsList.svg#icon-at"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="account__form-input">
                        <label for="account-email">email</label>
                        <div class="account__form-input-wrapper">
                            <input id="account-email" type="email" />
                            <svg width="24" height="24">
                                <use xlink:href="/images/iconsList.svg#icon-mail"></use>
                            </svg>
                        </div>
                    </div>
                    <div class="account__form-input">
                        <label for="account-password">password</label>
                        <div class="account__form-input-wrapper">
                            <input id="account-password" type="password" />
                            <svg width="24" height="24">
                                <use xlink:href="/images/iconsList.svg#icon-lock"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <Button class="account__form-btn" orange-button type="submit">save</Button>
            </form>
            <div class="account__other-accounts">
                <h2 class="account-block-title">Connected Accounts</h2>
                <div class="account__other-accounts-list">
                    <div class="account__other-accounts-item">
                        <div class="account__other-accounts-wrapper">
                            <img width="120" height="60" />
                            <span>Google</span>
                        </div>
                        <Button class="site-btn_bw-btn">Disconnect</Button>
                    </div>
                </div>
            </div>
            <div class="account__newsletter">
                <h2 class="account-block-title">Newsletter</h2>
                <div class="account__newsletter-text">
                    <p>You are currently subscribed to our newsletter</p>
                    <Button class="site-btn_bw-btn">subscribe</Button>
                </div>
            </div>
            <div class="account__actions">
                <Button class="site-btn_bw-btn" type="button">
                    <svg width="24" height="24">
                        <use xlink:href="/images/iconsList.svg#icon-logout"></use>
                    </svg>
                    <span>Sign out</span>
                </Button>
                <button type="button">
                    Delete Account
                </button>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';

</script>

<style scoped lang="sass">
.account 
    grid-column: content-start / content-end
    &__header
        display: flex
        justify-content: space-between
        h1
            font-family: var(--font-family-secondary)
            font-size: 36px
            line-height: 1.22
    .account-block-title
        font-size: 20px
        line-height: 1.3
    &__body
        margin-top: 34px
        padding-top: 83px
        border-top: 1px solid var(--color-gray-other-light)
    &__photo-block
        display: flex
        align-items: center
        column-gap: 24px
    &__photo
        width: 128px
        height: 128px
        border-radius: 50%
        overflow: hidden
    &__header-btn
        height: 48px
        min-width: 150px
    &__form
        margin-top: 58px
    &__form-inputs
        display: grid
        grid-template-columns: 1fr 1fr
        gap: 30px
    &__form-input-wrapper
        margin-top: 7px
        position: relative
        svg
            position: absolute
            top: 50%
            left: 0
            transform: translateY(-50%)
            color: var(--color-gray-dark)
    &__form-input
        display: grid
        font-size: 14px
        line-height: 1.64
        text-transform: uppercase
        color: var(--color-gray-dark)
        input
            width: 100%
            border: none
            outline: none
            color: var(--color-gray-dark)
            border-bottom: 1px solid var(--color-gray-other-light)
            padding: 12px 0 12px 40px
            &:focus
                border-color: var(--color-black)
                color: var(--color-black)
                & ~ svg
                    color: var(--color-black)
    &__form-btn
        margin-top: 30px
        margin-left: auto
        height: 40px
    &__other-accounts
        margin-top: 120px
    &__other-accounts-list
        margin-top: 48px
    &__other-accounts-item
        display: flex
        justify-content: space-between
        align-items: center
        flex-wrap: wrap
        padding: 20px 0
        border-bottom: 1px solid var(--color-gray-other-light)
    &__other-accounts-wrapper
        display: grid
        gap: 10px
        span
            font-size: 14px
            line-height: 1.64
            color: var(--color-gray-dark)
    &__newsletter
        margin-top: 120px
        padding-bottom: 40px
        border-bottom: 1px solid var(--color-gray-other-light)
    &__newsletter-text
        margin-top: 24px
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        row-gap: 20px
        align-items: center
    &__actions
        margin-top: 50px
        display: flex
        flex-wrap: wrap
        row-gap: 20px
        justify-content: space-between
@media(max-width: 780px)
    .account
        h1
            font-size: 24px
            line-height: 1.54
        &__body
            margin-top: 14px
            padding-top: 40px
        &__photo
            width: 48px
            height: 48px
        &__header-button
            height: 29px
            min-width: 140px
        &__form-inputs
            grid-template-columns: 1fr
        &__newsletter
            margin-top: 38px
        &__other-accounts
            margin-top: 38px
        &__other-accounts-list
            margin-top: 38px
</style>