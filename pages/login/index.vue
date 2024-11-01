<template>
    <div class="login-page">
        <div class="login-page__body">
            <h1>{{ btnSign }}</h1>
            <form :class="{ 'form-loading': formSending }" v-on:submit="onSubmit">
                <div v-if="isSignUp"
                    :class="{ 'auth__input-container': true, 'field-error': formFields.nameInput.error }">
                    <div class="auth__input-flex">
                        <svg width="24" height="24">
                            <use xlink:href="/images/iconsList.svg#icon-user-no-auth"></use>
                        </svg>
                        <input class="auth__input tb-input" type="text" placeholder="Full Name"
                            v-model="formFields.nameInput.value" @input="processFormField(formFields.nameInput)" />
                    </div>
                    <div v-if="formFields.nameInput.error" class="field-error-text">{{ formFields.nameInput.error }}
                    </div>
                </div>
                <div :class="{ 'auth__input-container': true, 'field-error': formFields.mailInput.error }">
                    <div class="auth__input-flex">
                        <svg width="24" height="24">
                            <use xlink:href="/images/iconsList.svg#icon-mail"></use>
                        </svg>
                        <input class="auth__input tb-input" type="text" placeholder="Email"
                            v-model="formFields.mailInput.value" @input="processFormField(formFields.mailInput)" />
                    </div>
                    <div v-if="formFields.mailInput.error" class="field-error-text">{{ formFields.mailInput.error }}
                    </div>
                </div>
                <div :class="{ 'auth__input-container': true, 'field-error': formFields.passInput.error }">
                    <div class="auth__input-flex">
                        <svg width="24" height="24">
                            <use xlink:href="/images/iconsList.svg#icon-lock"></use>
                        </svg>
                        <input class="auth__input tb-input" type="password" placeholder="Password"
                            v-model="formFields.passInput.value" @input="processFormField(formFields.passInput)" />
                    </div>
                    <div v-if="formFields.passInput.error" class="field-error-text">{{ formFields.passInput.error }}
                    </div>
                </div>
                <Button class="auth__btn" :loading="formSending" orangeButton type="submit">{{ btnSign }}</Button>
            </form>
            <span class="login-page__or">or</span>
            <div class="login-page__oauth">
                <svg width="15" height="15">
                    <use xlink:href="/images/iconsList.svg#icon-google"></use>
                </svg>
                <span>Google</span>
            </div>
        </div>
        <svg width="120" height="120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="50" fill="#F7DC6F" />
            <path d="M 40 40 L 80 40 L 80 80 L 40 80 Z" fill="#8BC34A" />
            <text x="30" y="55" font-size="24" font-family="Great Vibes" fill="#333333">Taste</text>
            <text x="30" y="85" font-size="24" font-family="Great Vibes" fill="#333333">Bite</text>
            <circle cx="90" cy="70" r="10" fill="#FFC080" />
        </svg>
    </div>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue';
import getValidator from "~/composables/validators";
import { processFormField, isFormValid, sendForm, resetFields } from "~/composables/formEvents";
import type { Form, FormFields } from "~/types/types";
//const route = useRoute()
const isSignUp = ref(false)
const btnSign = computed(() => {
    return isSignUp.value ? 'sign up' : 'sign in'
})

const formFields = ref<FormFields>({
    ...(isSignUp.value ? { nameInput: { value: '', error: '', validator: getValidator('name') } } : {}),
    mailInput: { value: '', error: '', validator: getValidator('email') },
    passInput: { value: '', error: '', validator: getValidator('password') }
})

const formSending = ref(false)
const openModal = ref(false)
const formResult = ref('')

const onSubmit = async (e: Event) => {
    e.preventDefault()
    const validateForm = await isFormValid(formFields.value)
    if (!validateForm) return
    const form: Form = {
        url: '/api/email/send',
        method: 'POST',
        body: {
            email: formFields.value.mailInput.value
        }
    }
    formSending.value = true
    formResult.value = await sendForm(form)
    formSending.value = false
    openModal.value = true
    resetFields(formFields.value)
}

</script>

<style scoped lang="sass">
.login-page
    grid-column: content-start / content-end
    display: flex
    justify-content: center
    align-items: center
    &__body
        max-width: 471px
        width: 100%
        padding: 56px
        box-shadow: 0 9px 17px 0 rgba(0, 0, 0, 0.07)
        border: 1px solid var(--color-gray-other-light)
        border-radius: 4px
    h1
        text-transform: uppercase
        font-family: var(--font-family-secondary)
        font-size: 30px
        line-height: 1.23
    &__or
        display: block
        margin: 24px 0
        text-align: center
        text-transform: uppercase
        line-height: 1.5
    &__oauth
        background-color: #f3f3f3
        padding: 14px 32px
        display: flex
        justify-content: center
        align-items: center
        margin: 18px auto
        width: fit-content
        border-radius: 4px
form
    margin-top: 40px
    display: grid
    gap: 32px
.auth
    &__input-container
        position: relative
        width: 100%
        display: grid
        border-bottom: 1px solid var(--color-gray-other-light)
        svg
            position: absolute
            left: 6px
            top: 13px
            color: var(--color-gray-dark)
    &__input-flex
        display: flex
        align-items: center
    &__input
        height: 50px
        width: 100%
        padding: 13px 37px 13px 40px
    &__btn
        margin: 32px auto 0
        height: 48px
        text-transform: uppercase
        font-size: 18px

</style>