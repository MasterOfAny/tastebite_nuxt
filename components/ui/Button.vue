<template>
    <button v-if="!props.link"
        :class="{ 'site-btn': true, 'site-btn_orange': props.orangeButton, 'site-btn_disabled': props.disabled }"
        :type="props.type" :disabled="props.disabled" @click="emit('click')">
        <slot v-if="!props.loading" />
        <Loading v-else />
    </button>
    <NuxtLink v-else :to="props.link"
        :class="{ 'site-btn': true, 'site-btn_orange': props.orangeButton, 'site-btn_disabled': props.disabled }"
        :type="props.type">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
const Loading = defineAsyncComponent(() => import('@/components/ui/Loading.vue'))
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
    },
    loading: {
        type: Boolean,
        default: false
    },
    orangeButton: {
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