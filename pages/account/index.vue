<template>
    <div class="account">
        <div class="account__header">
            <h1>Profile</h1>
            <!-- <Button class="account__header-button" orange-button>save</Button> -->
        </div>
        <ClientOnly>
            <section v-if="userStore.userData?.email" class="account__body">
                <div class="account__photo-block">
                    <div class="account__photo">
                        <img v-if="userStore.userData?.photo" width="128" height="128" :src="userStore.userData.photo"
                            alt="">
                        <div v-else class="account__no-photo" />
                    </div>
                    <div class="account__header-btn site-btn_orange">
                        <span>
                            Change
                        </span>
                        <input type="file" accept="image/*" @input="changePhoto" class="account__photo-input" />
                    </div>
                    <div v-if="fileError" class="field-error-text">{{ fileError }}</div>
                    <!-- <Button class="account__header-btn site-btn_bw-btn">Delete</Button> -->
                </div>
                <form :class="{ 'account__form': true, 'form-loading': formSending }" @submit="onSubmit">
                    <div class="account__form-inputs">
                        <div :class="{ 'account__form-input': true, 'field-error': formFields.nameInput.error }">
                            <label for="account-name">full name</label>
                            <div class="account__form-input-wrapper">
                                <input id="account-name" type="text" autocomplete="off"
                                    v-model="formFields.nameInput.value"
                                    @input="processFormField(formFields.nameInput)" />
                                <svg width="24" height="24">
                                    <use xlink:href="/images/iconsList.svg#icon-user-no-auth"></use>
                                </svg>
                            </div>
                            <div v-if="formFields.nameInput.error" class="field-error-text">{{
                                formFields.nameInput.error }}
                            </div>
                        </div>
                        <div :class="{ 'account__form-input': true, 'field-error': formFields.userNameInput.error }">
                            <label for="account-username">username</label>
                            <div class="account__form-input-wrapper">
                                <input id="account-username" type="text" autocomplete="off"
                                    v-model="formFields.userNameInput.value"
                                    @input="processFormField(formFields.userNameInput)" />
                                <svg width="24" height="24">
                                    <use xlink:href="/images/iconsList.svg#icon-at"></use>
                                </svg>
                            </div>
                            <div v-if="formFields.userNameInput.error" class="field-error-text">{{
                                formFields.userNameInput.error }}
                            </div>
                        </div>
                        <div :class="{ 'account__form-input': true, 'field-error': formFields.mailInput.error }">
                            <label for="account-email">email</label>
                            <div class="account__form-input-wrapper">
                                <input id="account-email" type="email" autocomplete="off"
                                    v-model="formFields.mailInput.value"
                                    @input="processFormField(formFields.mailInput)" />
                                <svg width="24" height="24">
                                    <use xlink:href="/images/iconsList.svg#icon-mail"></use>
                                </svg>
                            </div>
                            <div v-if="formFields.mailInput.error" class="field-error-text">{{
                                formFields.mailInput.error }}
                            </div>
                        </div>
                        <div :class="{ 'account__form-input': true, 'field-error': formFields.passInput.error }">
                            <label for="account-password">password</label>
                            <div class="account__form-input-wrapper">
                                <input id="account-password" type="password" autocomplete="off"
                                    v-model="formFields.passInput.value"
                                    @input="processFormField(formFields.passInput)" />
                                <svg width="24" height="24">
                                    <use xlink:href="/images/iconsList.svg#icon-lock"></use>
                                </svg>
                            </div>
                            <div v-if="formFields.passInput.error" class="field-error-text">{{
                                formFields.passInput.error }}
                            </div>
                        </div>
                    </div>
                    <Button class="account__form-btn" orange-button type="submit" :loading="formSending">save</Button>
                </form>
                <!--  <div class="account__other-accounts">
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
            </div> -->
                <div class="account__newsletter">
                    <h2 class="account-block-title">Newsletter</h2>
                    <div class="account__newsletter-text">
                        <p>
                            {{ `You are currently ${userStore.userData?.newsletter ? 'subscribed' : 'not subscribed'} to
                            our newsletter`}}
                        </p>
                        <Button class="site-btn_bw-btn" @click="updateNewsletter">{{ userStore.userData?.newsletter ?
                            'unsubscribe' : 'subscribe' }}</Button>
                    </div>
                </div>
                <div class="account__actions">
                    <Button class="site-btn_bw-btn sign-out-btn" type="button" @click="userStore.logout()">
                        <svg width="24" height="24">
                            <use xlink:href="/images/iconsList.svg#icon-logout"></use>
                        </svg>
                        <span>Sign out</span>
                    </Button>
                </div>
            </section>
        </ClientOnly>
        <Modal v-if="openModal" @close="openModal = false">
            <p>{{ userStore.error || 'profile updated' }}</p>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { useUser } from '~/stores/user';
import getValidator from "~/composables/validators";
import { processFormField, isFormValid } from "~/composables/formEvents";
import type { FormFields } from "~/types/types";
const Modal = defineAsyncComponent(() => import('~/components/ui/Modal.vue'))

const userStore = useUser()
onMounted(async () => {
    await userStore.fetchUserData(true)
    formFields.value.nameInput.value = userStore.userData?.name
    formFields.value.userNameInput.value = userStore.userData?.user_name
    formFields.value.mailInput.value = userStore.userData?.email
})

const formFields = ref<FormFields>({
    nameInput: { value: '', error: '', validator: getValidator('name', false) },
    userNameInput: { value: '', error: '' },
    mailInput: { value: '', error: '', validator: getValidator('email', false) },
    passInput: { value: '', error: '', validator: getValidator('password', false) }
})

const formSending = ref(false)
const openModal = ref(false)

const fileError = ref('')
const allowedTypes = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/webp"
]

const changePhoto = async (event: Event) => {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length > 0) {
        const file = input.files[0]
        if (file.size > 1024 * 1024 || !allowedTypes.includes(file.type)) {
            fileError.value = 'File size is too large or not an image'
            return
        }
        fileError.value = ''
        await userStore.updateUser({ photo: file })
    }
}

const updateNewsletter = async () => {
    await userStore.updateUser({ newsletter: !userStore.userData?.newsletter })
}

const onSubmit = async (e: Event) => {
    e.preventDefault()
    const validateFormFields = formFields.value.passInput.value ? formFields.value : { ...formFields.value }
    if (!validateFormFields.passInput.value) {
        delete validateFormFields.passInput
    }
    const validateForm = await isFormValid(validateFormFields)
    if (!validateForm) return
    formSending.value = true
    await userStore.updateUser({
        name: formFields.value.nameInput.value,
        user_name: formFields.value.userNameInput.value,
        email: formFields.value.mailInput.value,
        password: formFields.value.passInput.value
    })
    formSending.value = false
    formFields.value.passInput.value = ''
    openModal.value = true
}

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
    &__header-btn
        position: relative
        display: flex
        justify-content: center
        align-items: center
        font-weight: 500
        input
            opacity: 0
            position: absolute
            left: 0
            right: 0
            top: 0
            bottom: 0
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
    &__no-photo
        width: 128px
        height: 128px
        border-radius: 50%
        background-color: var(--color-gray-other-light)
    &__header-btn
        height: 48px
        min-width: 150px
    &__form
        margin-top: 58px
    &__form-inputs
        display: grid
        grid-template-columns: 1fr 1fr
        gap: 30px
        align-items: baseline
    &__form-input-wrapper
        margin-top: 7px
        position: relative
        display: flex
        align-items: center
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