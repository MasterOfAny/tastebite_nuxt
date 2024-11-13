<template>
    <div class="comment-form">
        <div v-if="!userStore.userData?.id" class="comment-form__no-auth">
            <div class="comment-form__user">
                <svg width="20" height="20">
                    <use xlink:href="/images/iconsList.svg#icon-user-no-auth"></use>
                </svg>
            </div>
            <div class="comment-form__no-auth-text">
                <NuxtLink to="/login" @click="storeUrl">Log in</NuxtLink>
                or
                <NuxtLink to="/login" @click="storeUrl">Sign up</NuxtLink>
                to post a comment
            </div>
        </div>
        <div v-else :class="{ 'comment-form__auth': true, 'comment-form__auth-sending': formSending }">
            <div class="comment-form__user">
                <svg v-if="!userStore.userData?.photo" width="20" height="20">
                    <use xlink:href="/images/iconsList.svg#icon-user-no-auth"></use>
                </svg>
                <img v-else :src="userStore.userData?.photo || ''" alt="user photo" width="20" height="20">
            </div>
            <form @submit="onSubmit">
                <div :class="{ 'comment-textarea': true, 'field-error': formFields.text.error }">
                    <textarea class="comment-form__textarea" id="comment" name="comment"
                        placeholder="Did you make this Recipe? Leave a comment!" v-model="formFields.text.value"
                        @input="processFormField(formFields.text)" />
                    <div v-if="formFields.text.error" class="field-error-text">{{ formFields.text.error }}</div>
                </div>
                <div class="comment-form__body">
                    <div class="comment-form__rating" v-if="!props.reply">
                        <span>Your Rating: </span>
                        <Rating :rating="rating" interactive @set-rating="(value) => rating = value" />
                    </div>
                    <div class="comment-form__btns">
                        <Button class="comment-form__btn" type="submit" orange-button>
                            Post Review
                        </Button>
                        <Button v-if="props.reply" class="comment-form__btn bw-btn" @click="emit('cancelReply')">
                            Cancel
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
const Rating = defineAsyncComponent(() => import('~/components/ui/Rating.vue'));
const Button = defineAsyncComponent(() => import('~/components/ui/Button.vue'));
import { useUser } from '@/stores/user';
import getValidator from "~/composables/validators";
import type { FormFields } from "~/types/types";
import { processFormField, isFormValid } from "~/composables/formEvents";
const props = defineProps({
    recipeId: {
        type: String,
        required: true
    },
    reply: {
        type: Boolean,
        default: false
    },
    parentId: {
        type: String,
        default: ''
    }
})

const emit = defineEmits({
    cancelReply() { },
    commentPosted(comment) { return comment }
})

const userStore = useUser()
const rating = ref(0)
const formFields = ref<FormFields>({
    text: { value: '', error: '', validator: getValidator('required') }
})
const formSending = ref(false)
const storeUrl = () => {
    localStorage.setItem('beforeLoginUrl', window.location.href)
}

const onSubmit = async (e: Event) => {
    e.preventDefault()
    const validateForm = await isFormValid(formFields.value)
    if (!validateForm) return
    let comment
    formSending.value = true
    if (!props.reply) {
        comment = await $fetch(`${getBaseApiUrl()}/prisma/comments/new`, {
            method: 'POST',
            body: { text: formFields.value.text.value, rating: rating.value, recipe_id: props.recipeId }
        })
    } else {
        comment = await $fetch(`${getBaseApiUrl()}/prisma/comments/new?` + new URLSearchParams({ comment_id: props.parentId }), {
            method: 'POST',
            body: { text: formFields.value.text.value, rating: rating.value, recipe_id: props.recipeId }
        })
    }
    formSending.value = false
    rating.value = 0
    formFields.value.text.value = ''
    emit('commentPosted', comment)
}
</script>

<style scoped lang="sass">
.comment-form
    &__no-auth
        margin: 40px 0
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
        a
            cursor: pointer
            color: var(--color-orange)
    &__auth
        margin: 40px 0
        padding: 16px
        display: flex
        column-gap: 32px
    &__auth-sending
        opacity: 0.5
        pointer-events: none
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
    &__body
        display: flex
        justify-content: space-between
    &__btns
        margin-top: 20px
        display: flex
        align-items: flex-end
        column-gap: 16px
    &__btn        
        padding: 8px 16px
        font-weight: 600
</style>