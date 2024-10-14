<template>
    <button v-if="!props.link" :class="{ 'site-btn': true, 'site-btn_disabled': props.disabled }" :type="props.type"
        :disabled="props.disabled" @click="emit('click')">
        <slot />
    </button>
    <NuxtLink v-else :to="props.link" :class="{ 'site-btn': true, 'site-btn_disabled': props.disabled }"
        :type="props.type">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
    link: {
        type: String,
        default: '',
    },
    type: {
        type: String as () => 'button' | 'submit' | 'reset',
        default: 'button'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits({
    click() { return null }
})
</script>

<style lang="sass">
.site-btn
    display: flex
    align-items: center
    justify-content: center
    text-align: center
    width: fit-content
    outline: none
    font-size: 14px
    font-weight: 500
    border: 1px solid var(--color-black)
    border-radius: 2px
    cursor: pointer
    background-color: transparent
    transition: all 0.3s ease-in-out
    &_bw-btn
        padding: 0 24px
        height: 29px
        &:hover
            background-color: var(--color-black)
            color: var(--color-white)
        &:active
            transition: none
            background-color: var(--color-white)
            color: var(--color-black)
            box-shadow: 0 0 8px 8px rgba(34, 60, 80, 0.2)
        &:disabled
            cursor: default
            pointer-events: none
            background-color: var(--color-gray-other-light)
            border-color: var(--color-gray-other-light)
</style>