<template>
    <div :class="{ 'ts-checkbox': true, 'ts-checkbox_checked': !props.selfChecked ? props.checked : checkedBySelf }">
        <input class="ts-checkbox__input" :id="props.name" :checked="!props.selfChecked ? props.checked : checkedBySelf"
            type="checkbox" @click="check" />
        <label class="ts-checkbox__label" :for="props.name">
            <i class="ts-checkbox__box">
            </i>
            <slot />
        </label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    selfChecked: {
        type: Boolean,
        default: false
    },
    checked: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits({
    click(value: boolean) { return value }
})
const checkedBySelf = ref(props.checked)
const check = (e: Event) => {
    if (!props.selfChecked) {
        emit('click', (e.target as HTMLInputElement).checked)
    } else {
        checkedBySelf.value = !checkedBySelf.value
    }
}
</script>

<style scoped lang="sass">
.ts-checkbox
    &__input
        height: 0
        opacity: 0
        position: absolute
        left: 0          
    &__label
        display: flex
        align-items: center
        column-gap: 16px
        cursor: pointer
    &__box
        display: block
        width: 24px
        height: 24px
        border: 2px solid var(--color-black) 
        border-radius: 50%
    &_checked
        .ts-checkbox__box
            border: none
            background-image: url('/images/checked.svg')
@media(max-width: 780px)
    .ts-checkbox
        &__label
            font-size: 14px
            line-height: 1.64
            column-gap: 8px
        &__box
            width: 16px
            height: 16px
</style>