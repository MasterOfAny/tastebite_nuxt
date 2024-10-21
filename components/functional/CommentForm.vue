<template>
    <div class="comment-form">
        <div class="comment-form__no-auth">
            <div class="comment-form__user">
                <svg width="20" height="20">
                    <use xlink:href="/images/iconsList.svg#icon-user-no-auth"></use>
                </svg>
            </div>
            <div class="comment-form__no-auth-text">
                <span>Log in</span>
                or
                <span>Sign up</span>
                to post a comment
            </div>
        </div>
        <div class="comment-form__auth">
            <div class="comment-form__user">
                <svg width="20" height="20">
                    <use xlink:href="/images/iconsList.svg#icon-user-no-auth"></use>
                </svg>
            </div>
            <form>
                <textarea class="comment-form__textarea" id="comment" name="comment"
                    placeholder="Did you make this Recipe? Leave a comment!" />
                <div class="comment-form__rating">
                    <span>Your Rating: </span>
                    <Rating interactive />
                </div>
                <Button class="comment-form__btn" type="submit" orange-button>
                    Post Review
                </Button>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const Rating = defineAsyncComponent(() => import('~/components/ui/Rating.vue'));
const Button = defineAsyncComponent(() => import('~/components/ui/Button.vue'));
</script>

<style scoped lang="sass">
.comment-form
    &__no-auth
        margin-top: 20px
        display: flex
        align-items: center
        column-gap: 16px
        border-radius: 14px
        padding: 16px
        box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.1)
    &__user
        display: flex
        justify-content: center
        align-items: center
        background-color: var(--color-gray-other-light)
        border-radius: 50%
        width: 32px
        height: 32px
    &__no-auth-text
        font-size: 18px
        line-height: 1.5
        span
            cursor: pointer
            color: var(--color-orange)
    &__auth
        padding: 16px
        display: flex
        column-gap: 32px
    form
        width: 100%
        max-width: 560px
    &__textarea
        display: block
        width: 100%
        max-width: 560px
        height: 140px
        padding: 10px
        resize: none
        line-height: 1.5
        outline: none
        border: 4px solid var(--color-gray-other-light)
        border-radius: 4px
    &__rating
        margin-top: 24px
        display: inline-flex
        align-items: center
        column-gap: 16px
        span
            font-weight: 600
            font-size: 18px
    &__btn
        margin-top: -30px
        margin-left: auto
        padding: 8px 16px
        font-weight: 600


</style>