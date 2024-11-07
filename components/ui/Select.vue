<template>
    <div class="ts-select">
        <button class="ts-select__button" role="combobox" id="select" value="Select" aria-controls="listbox"
            aria-haspopup="listbox" tabindex="0" aria-expanded="false" ref="selectButton" @keydown="handleKeyPress">
            {{ props.selectedOption?.value || props?.placeholder }}
            <svg width="20" height="20">
                <use xlink:href="/images/iconsList.svg#icon-chevron-down"></use>
            </svg>
        </button>
        <ul :class="{ 'ts-select__options': true, 'ts-select__options_open': isDropdownOpen }" role="listbox"
            ref="dropdown" id="listbox" @mousemove="currentOptionIndex = -1">
            <li :class="{ 'ts-select__option': true, 'ts-select__option_current': index === currentOptionIndex, 'ts-select__option_selected': props.selectedOption?.id === item.id }"
                v-for="(item, index) in props.options" :key="item.id" role="option" ref="options"
                @click="selectOption(index)">
                {{
                    item.value }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    options: {
        type: Array as () => { id: string, value: string }[],
        default: []
    },
    placeholder: {
        type: String,
        required: true
    },
    selectedOption: {
        type: Object as () => { id: string, value: string },
    }
})

const emit = defineEmits({
    select(value) { return value }
})

onMounted(() => {
    document.addEventListener('click', handleDocumentInteraction);
})
onUnmounted(() => {
    document.removeEventListener('click', handleDocumentInteraction);
})

const isDropdownOpen = ref(false)
const currentOptionIndex = ref(0)
const selectButton = ref<HTMLElement | null>(null)
const options = ref<HTMLElement[]>([])
const dropdown = ref<HTMLElement | null>(null)
let lastTypedChar = '';
let lastMatchingIndex = 0;

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value
    isDropdownOpen.value.toString()
    if (isDropdownOpen.value) {
        //focusCurrentOption();
    } else {
        selectButton.value?.focus();
    }
};

const handleKeyPress = (event: KeyboardEvent) => {
    event.preventDefault();
    const { key } = event;
    const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' '];

    if (!isDropdownOpen.value && openKeys.includes(key)) {
        toggleDropdown();
    } else if (isDropdownOpen.value) {
        switch (key) {
            case 'Escape':
                toggleDropdown();
                break;
            case 'ArrowDown':
                moveFocusDown();
                break;
            case 'ArrowUp':
                moveFocusUp();
                break;
            case 'Enter':
            case ' ':
                selectOption();
                break;
            default:
                handleAlphanumericKeyPress(key);
                break;
        }
    }
}

const handleDocumentInteraction = (event: Event) => {
    const isClickInsideButton = selectButton.value?.contains(event.target as Node);
    const isClickInsideDropdown = dropdown.value?.contains(event.target as Node);
    if (isClickInsideButton || (!isClickInsideDropdown && isDropdownOpen.value)) {
        toggleDropdown();
    }
};

const moveFocusDown = () => {
    if (currentOptionIndex.value < options.value.length - 1) {
        currentOptionIndex.value++;
    } else {
        currentOptionIndex.value = 0;
    }
    focusCurrentOption();
};

const moveFocusUp = () => {
    if (currentOptionIndex.value > 0) {
        currentOptionIndex.value--;
    } else {
        currentOptionIndex.value = options.value.length - 1;
    }
    focusCurrentOption();
};

const focusCurrentOption = () => {
    if (!options.value) return;
    const currentOption = options.value[currentOptionIndex.value];
    currentOption.focus();
};

const selectOption = (index = currentOptionIndex.value) => {
    emit('select', props.options[index]);
    toggleDropdown();
};

const handleAlphanumericKeyPress = (key: string) => {
    const typedChar = key.toLowerCase();

    if (lastTypedChar !== typedChar) {
        lastMatchingIndex = 0;
    }

    const matchingOptions = Array.from(props.options).filter((option) =>
        option.value.toLowerCase().startsWith(typedChar)
    );

    if (matchingOptions.length) {
        if (lastMatchingIndex === matchingOptions.length) {
            lastMatchingIndex = 0;
        }
        let value = matchingOptions[lastMatchingIndex]
        const index = Array.from(props.options).indexOf(value);
        currentOptionIndex.value = index;
        focusCurrentOption();
        lastMatchingIndex += 1;
    }
    lastTypedChar = typedChar;
};

</script>

<style scoped lang="sass">
.ts-select
    position: relative
    width: 250px
    &__button
        padding: 8px 16px 8px 8px
        background: var(--color-white)
        width: 100%
        border: none
        display: flex
        justify-content: space-between
        align-items: center
        position: relative
        border: 1px solid var(--color-black)
        border-radius: 4px
        &:focus-visible 
            outline: 0
            box-shadow: 0 0 5px 2px rgba(251, 146, 60, 0.7) 
    &__options
        position: absolute
        left: 0
        right: 0
        top: 40px
        overflow-y: auto
        list-style-type: none
        padding: 0 8px
        opacity: 0
        transform: scale(1,0)
        transform-origin: top left
        transition: all .2s ease-in
        pointer-events: none
        z-index: 2
        background-color: var(--color-white)
        border: 1px solid var(--color-black)
        border-radius: 4px
    &__options_open
        opacity: 1
        transform: scale(1,1)
        pointer-events: auto
    &__option
        padding: 8px 8px
        cursor: pointer
        transition: all .3s ease-in
        position: relative
        &:not(:last-child)
            border-bottom: 2px solid var(--color-gray-other-light)
        &::before 
            content: ' \2714'
            vertical-align: middle
            font-weight: 900
            position: absolute
            right: .8rem
            opacity: 0
            transition: opacity 0.2s ease-out
        &:hover
            background-color: var(--color-gray-other-light)
    &__option_current
        background-color: var(--color-gray-other-light)
    &__option_selected
        color: var(--color-orange)
        &::before
            opacity: 1
</style>