<template>
    <Teleport to="body">
        <Transition name="fade" appear>
            <div class="modal-wrapper" @click="clickOnWrapper">
                <div class="modal-body">
                    <svg class="modal-close" width="24" height="24" @click="emit('close')">
                        <use xlink:href="/images/iconsList.svg#icon-close"></use>
                    </svg>
                    <slot />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
const emit = defineEmits({
    close() { return null }
})

const clickOnWrapper = (event: Event) => {
    const target = event.target as HTMLElement
    if (target.className === 'modal-wrapper') {
        emit("close")
    }
}
</script>

<style scoped lang="sass">
.modal-wrapper
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: rgba(0, 0, 0, 0.75)
    display: flex
    justify-content: center
    align-items: center
    z-index: 9999
    transition: 0.3s opacity ease-in-out
.modal-body
    position: relative
    display: flex
    justify-content: center
    align-items: center
    max-width: 471px
    background-color: var(--color-white)
    border: 1px solid var(--color-gray-light)
    box-shadow: 0 9px 17px 0 rgba(0, 0, 0, 0.07)
    border-radius: 4px
    padding: 56px
.modal-close
    position: absolute
    top: 24px
    right: 24px
    cursor: pointer
.fade-enter-active,
.fade-leave-active
    transition: opacity 0.3s ease
.fade-enter-from,
.fade-leave-to
    opacity: 0
</style>
