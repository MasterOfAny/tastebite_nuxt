<template>
    <footer class="footer container">
        <div class="footer-content">
            <div class="footer-top">
                <div class="footer-column column-left">
                    <NuxtLink to="/" class="footer-logo-link">
                        <svg width="160" height="50">
                            <use xlink:href="/images/iconsList.svg#logo"></use>
                        </svg>
                    </NuxtLink>
                    <p>
                        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled
                        and demoralized by the charms of pleasure of the moment."
                    </p>
                </div>
                <div :class="{ 'footer-column': true, 'footer-column_collapsed': footerColumnCollapsed === 1 }">
                    <div class="footer-column__header" @click="toggleFooterColumn(1)">
                        <span>Tastebite</span>
                        <svg width="16" height="16">
                            <use xlink:href="/images/iconsList.svg#chevron-down"></use>
                        </svg>
                    </div>
                    <ul class="footer-column__links-list">
                        <li class="footer-column__links-item">
                            <NuxtLink to="#" class="footer-column__links-link">About Us</NuxtLink>
                        </li>
                        <li class="footer-column__links-item">
                            <NuxtLink to="#" class="footer-column__links-link">Careers</NuxtLink>
                        </li>
                        <li class="footer-column__links-item">
                            <NuxtLink to="#" class="footer-column__links-link">Contact Us</NuxtLink>
                        </li>
                        <li class="footer-column__links-item">
                            <NuxtLink to="#" class="footer-column__links-link">Feedback</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div :class="{ 'footer-column': true, 'footer-column_collapsed': footerColumnCollapsed === 2 }">
                    <div class="footer-column__header" @click="toggleFooterColumn(2)">
                        <span>Legal</span>
                        <svg width="16" height="16">
                            <use xlink:href="/images/iconsList.svg#chevron-down"></use>
                        </svg>
                    </div>
                    <ul class="footer-column__links-list">
                        <li class="footer-column__links-item">
                            <NuxtLink to="#" class="footer-column__links-link">Terms</NuxtLink>
                        </li>
                        <li class="footer-column__links-item">
                            <NuxtLink to="#" class="footer-column__links-link">Conditions</NuxtLink>
                        </li>
                        <li class="footer-column__links-item">
                            <NuxtLink to="#" class="footer-column__links-link">Cookies</NuxtLink>
                        </li>
                        <li class="footer-column__links-item">
                            <NuxtLink to="#" class="footer-column__links-link">Copyright</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div :class="{ 'footer-column': true, 'footer-column_collapsed': footerColumnCollapsed === 3 }">
                    <div class="footer-column__header" @click="toggleFooterColumn(3)">
                        <span>Follow</span>
                        <svg width="16" height="16">
                            <use xlink:href="/images/iconsList.svg#chevron-down"></use>
                        </svg>
                    </div>
                    <ul class="footer-column__links-list">
                        <li class="footer-column__links-item">
                            <NuxtLink to="#" class="footer-column__links-link">Facebook</NuxtLink>
                        </li>
                        <li class="footer-column__links-item">
                            <NuxtLink to="#" class="footer-column__links-link">Twitter</NuxtLink>
                        </li>
                        <li class="footer-column__links-item">
                            <NuxtLink to="#" class="footer-column__links-link">Instagram</NuxtLink>
                        </li>
                        <li class="footer-column__links-item">
                            <NuxtLink to="#" class="footer-column__links-link">Youtube</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-bottom__copyright">
                    <p>
                        © 2024 Tastebite - All rights reserved
                    </p>
                </div>
                <div class="footer-bottom__social-media">
                    <!-- #7f7f7f -->
                    <a href="#" target="_blank">
                        <svg width="20" height="20">
                            <use xlink:href="/images/iconsList.svg#icon-facebook"></use>
                        </svg>
                    </a>
                    <a href="#" target="_blank">
                        <svg width="20" height="20">
                            <use xlink:href="/images/iconsList.svg#icon-instagram"></use>
                        </svg>
                    </a>
                    <a href="#" target="_blank">
                        <svg width="20" height="20">
                            <use xlink:href="/images/iconsList.svg#icon-twitter"></use>
                        </svg>
                    </a>
                    <a href="#" target="_blank">
                        <svg width="20" height="20">
                            <use xlink:href="/images/iconsList.svg#icon-youtube"></use>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const footerColumnCollapsed = ref<number | null>(null)
const toggleFooterColumn = (index: number) => {
    if (window.innerWidth > 768) return
    footerColumnCollapsed.value = index === footerColumnCollapsed.value ? null : index
}
</script>

<style scoped lang="sass">
.footer 
    grid-column: left / right
    background-color: var(--color-gray-light)
.footer-content
    grid-column: content-start / content-end
    padding: 100px 0 50px 0
    color: var(--color-gray-dark)
.footer-top
    display: flex
    flex-wrap: wrap
    padding-bottom: 89px
    border-bottom: 1px solid var(--color-gray-other-light)
    p
        margin-top: 17px
.footer-bottom
    margin-top: 24px
    display: flex
    justify-content: space-between
    flex-wrap: wrap-reverse
    row-gap: 24px
    align-items: center
    &__copyright
        font-size: 12px
        line-height: 1.25%
    &__social-media
        display: flex
        align-items: center
        column-gap: 40px
        svg
            color: var(--color-gray-dark)
            transition: color 0.3s
            &:hover
                color: var(--color-orange)
.footer-column
    &.column-left
        max-width: 50%
        padding-right: 50px
        margin-right: auto
        p
            line-height: 1.5
    &:not(.column-left)
        width: 16%
        padding: 0 16px
    &__header
        font-weight: 500
        font-size: 14px
        line-height: 1.29
        color: var(--color-black)
        svg
            transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)
    &__links-list
        list-style-type: none
        margin-top: 12px
    &__links-link
        text-decoration: none
        transition: color 0.3s
        color: inherit
        display: block
        padding: 6px 0
        font-size: 14px
        &:hover
            color: var(--color-orange)
@media(min-width: 768px)
    .footer-column
        &__header
            svg
                display: none
@media(max-width: 768px)
    .footer-content
        padding: 36px 0 50px 0
    .footer-logo-link
        svg
            width: 92px
            height: 28px
    .footer-top
        display: block
        padding-bottom: 50px
        border-bottom: none
    .footer-column
        &.column-left
            padding-right: 0
            margin-right: 0
            max-width: unset
            &+.footer-column
                margin-top: 28px
        &:not(.column-left)
            width: 100%
            padding: 0
            &+.footer-column
                margin-top: 24px
        &__header
            display: flex
            align-items: center
            justify-content: space-between
            padding-bottom: 11px
            border-bottom: 1px solid var(--color-gray-other-light)            
        &__links-list
            height: 0
            overflow: hidden
            transition: height 0.3s
        &_collapsed
            .footer-column__links-list
                height: 116px
            .footer-column__header
                svg
                    transform: rotate(180deg)

</style>