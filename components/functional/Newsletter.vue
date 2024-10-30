<template>
    <div class="newsletter">
        <div class="newsletter-content">
            <h3 class="newsletter__title">Deliciousness to your inbox</h3>
            <p class="newsletter__text">
                Enjoy weekly hand picked recipes and recommendations
            </p>
            <form :class="{ 'form-loading': formSending }" v-on:submit="onSubmit">
                <div class="newsletter__input-container">
                    <svg width="24" height="24">
                        <use xlink:href="/images/iconsList.svg#icon-mail"></use>
                    </svg>
                    <input class="newsletter__input tb-input" type="text" placeholder="Email Address"
                        v-model="formFields.mailInput.value" @input="processFormField(formFields.mailInput)" />
                    <div v-if="formFields.mailInput.error" class="field-error">{{ formFields.mailInput.error }}</div>
                </div>
                <Button class="newsletter__btn" :loading="formSending" orangeButton type="submit">join</Button>
            </form>
            <p class="newsletter__files">
                By joining our newsletter you agree to our
                <a class="file-link" href="#" target="_blank">Terms and Conditions</a>
            </p>
        </div>
        <Modal v-if="openModal" @close="openModal = false">
            <p>{{ formResult }}</p>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
const Modal = defineAsyncComponent(() => import('~/components/ui/Modal.vue'))
import getValidator from "~/composables/validators";
import { processFormField, isFormValid, sendForm, resetFields } from "~/composables/formEvents";
import type { Form, FormFields } from "~/types/types";

const formFields = ref<FormFields>({
    mailInput: { value: '', error: '', validator: getValidator('email') }
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
.newsletter
    background-color: var(--color-orange-light)
    &__input-container
        position: relative
        width: 100%
        display: grid
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
        height: 66px
    &__btn
        padding: 18px 42px
        text-transform: uppercase   
        font-size: 18px
        font-weight: 600
        line-height: 1.56
        border-color: var(--color-white)
        border-radius: 2px
        height: 66px
    form
        display: flex
        width: 100%
.newsletter-content
    display: flex
    flex-direction: column
    align-items: center
</style>