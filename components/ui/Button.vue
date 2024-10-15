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

</style>