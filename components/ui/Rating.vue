<template>
    <div class="rating" @click="props.interactive && emit('setRating', mouseOver)"
        @mouseleave="props.interactive && (mouseOver = 0)">
        <template v-if="!props.interactive">
            <svg v-for="n in wholeNumber" :key="n" class="rating__star" viewBox="0 0 16 15" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.49723 4.89773L7.40227 1.03833C7.64683 0.542887 8.35332 0.542887 8.59788 1.03833L10.5029 4.89773L14.7632 5.52042C15.3098 5.60032 15.5276 6.27221 15.1319 6.65765L12.0498 9.65966L12.7771 13.9007C12.8706 14.4454 12.2989 14.8607 11.8098 14.6035L8.00007 12.6L4.19038 14.6035C3.70129 14.8607 3.12959 14.4454 3.223 13.9007L3.95039 9.65966L0.868253 6.65765C0.472524 6.27221 0.690379 5.60032 1.23699 5.52042L5.49723 4.89773Z"
                    fill="#FF642F" stroke-width="1" stroke="#FF642F" />
            </svg>
            <svg class="rating__star" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="half_grad">
                        <stop :offset="division" stop-color="#FF642F" />
                        <stop :offset="division" stop-color="white" stop-opacity="1" />
                    </linearGradient>
                </defs>
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.49723 4.89773L7.40227 1.03833C7.64683 0.542887 8.35332 0.542887 8.59788 1.03833L10.5029 4.89773L14.7632 5.52042C15.3098 5.60032 15.5276 6.27221 15.1319 6.65765L12.0498 9.65966L12.7771 13.9007C12.8706 14.4454 12.2989 14.8607 11.8098 14.6035L8.00007 12.6L4.19038 14.6035C3.70129 14.8607 3.12959 14.4454 3.223 13.9007L3.95039 9.65966L0.868253 6.65765C0.472524 6.27221 0.690379 5.60032 1.23699 5.52042L5.49723 4.89773Z"
                    fill="url(#half_grad)" stroke-width="1" stroke="#FF642F" />
            </svg>
            <template v-if="restStars > 0">
                <svg v-for="n in restStars" :key="n" class="rating__star" viewBox="0 0 16 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.49723 4.89773L7.40227 1.03833C7.64683 0.542887 8.35332 0.542887 8.59788 1.03833L10.5029 4.89773L14.7632 5.52042C15.3098 5.60032 15.5276 6.27221 15.1319 6.65765L12.0498 9.65966L12.7771 13.9007C12.8706 14.4454 12.2989 14.8607 11.8098 14.6035L8.00007 12.6L4.19038 14.6035C3.70129 14.8607 3.12959 14.4454 3.223 13.9007L3.95039 9.65966L0.868253 6.65765C0.472524 6.27221 0.690379 5.60032 1.23699 5.52042L5.49723 4.89773Z"
                        fill="white" stroke-width="1" stroke="var(--color-gray-other-light)" />
                </svg>
            </template>
        </template>
        <template v-else>
            <svg v-for="n in 5" :key="n" :class="{ 'rating__star': true, 'rating_star-animate': n <= mouseOver }"
                viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" @mouseover="mouseOver = n">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.49723 4.89773L7.40227 1.03833C7.64683 0.542887 8.35332 0.542887 8.59788 1.03833L10.5029 4.89773L14.7632 5.52042C15.3098 5.60032 15.5276 6.27221 15.1319 6.65765L12.0498 9.65966L12.7771 13.9007C12.8706 14.4454 12.2989 14.8607 11.8098 14.6035L8.00007 12.6L4.19038 14.6035C3.70129 14.8607 3.12959 14.4454 3.223 13.9007L3.95039 9.65966L0.868253 6.65765C0.472524 6.27221 0.690379 5.60032 1.23699 5.52042L5.49723 4.89773Z"
                    :fill="mouseOver >= n ? '#FF642F' : 'white'" stroke-width="1"
                    :stroke="mouseOver >= n ? '#FF642F' : 'var(--color-gray-other-light)'" />
            </svg>
        </template>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    rating: {
        type: Number,
        default: 0,
    },
    interactive: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits({
    setRating(rating: number) { return rating }
})

const wholeNumber = Math.floor(props.rating)
const restStars = 5 - Math.round(props.rating)
const division = Math.round((props.rating - wholeNumber) * 100) + '%'

const mouseOver = ref(0)

</script>

<style scoped lang="sass">
.rating
    display: flex
    column-gap: 5px
    &__star
        width: 36px
        height: 36px
    &_star-animate
        animation: scaling 0.3s ease-out
@keyframes scaling
  0%
    transform: scale(1.0)
  30%
    transform: scale(1.2)
  80%
    transform: scale(1.4)
  100%
    transform: scale(1.2)
</style>