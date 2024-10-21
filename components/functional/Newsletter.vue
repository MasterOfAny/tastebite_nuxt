<template>
    <div class="newsletter">
        <div class="newsletter-content">
            <h3 class="newsletter__title">Deliciousness to your inbox</h3>
            <p class="newsletter__text">
                Enjoy weekly hand picked recipes and recommendations
            </p>
            <form>
                <div class="newsletter__input-container">
                    <svg width="24" height="24">
                        <use xlink:href="/images/iconsList.svg#icon-mail"></use>
                    </svg>
                    <input class="newsletter__input tb-input" type="text" placeholder="Email Address" />
                </div>
                <Button class="newsletter__btn" orangeButton type="submit">join</Button>
            </form>
            <p class="newsletter__files">
                By joining our newsletter you agree to our
                <a class="file-link" href="#" target="_blank">Terms and Conditions</a>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
</script>

<style scoped lang="sass">
.newsletter
    background-color: var(--color-orange-light)
    &__input-container
        position: relative
        width: 100%
        svg
            position: absolute
            left: 16px
            top: 13px
            color: var(--color-gray-dark)
            display: none
    &__title
        font-family: var(--font-family-secondary)
    &__input
        background-color: var(--color-white)
        padding: 18px 12px
        line-height: 1.5
        width: 100%
        height: 100%
    &__btn
        padding: 18px 42px
        text-transform: uppercase   
        font-size: 18px
        font-weight: 600
        line-height: 1.56
        border-color: var(--color-white)
        border-radius: 2px
    form
        display: flex
        width: 100%
.newsletter-content
    display: flex
    flex-direction: column
    align-items: center
</style>