<template>
    <div class="recipe-page">

        <Head>
            <Title>{{ recipe?.name }}</Title>
        </Head>
        <section>
            <div class="page-top">
                <div class="page-top__actions-panel">
                    <div class="page-top__trend">
                        <svg width="24" height="24">
                            <use xlink:href="/images/iconsList.svg#icon-trending-up"></use>
                        </svg>
                        <span>
                            {{ recipe?.trend }}% would make this again
                        </span>
                    </div>
                    <div class="page-top__actions">
                        <svg width="32" height="32">
                            <use xlink:href="/images/iconsList.svg#icon-print"></use>
                        </svg>
                        <svg width="32" height="32" @click="handleFavorite" :class="{ 'favorite-active': inFavorite }">
                            <use xlink:href="/images/iconsList.svg#icon-bookmark"></use>
                        </svg>
                    </div>
                </div>
                <h1>{{ recipe?.name }}</h1>
                <div class="page-top__info">
                    <div class="page-top__author page-top__info_flex">
                        <div class="author-avatar">
                            <img width="32" height="32" :src="recipe?.author?.image" alt="">
                        </div>
                        <span>{{ recipe?.author?.name }}</span>
                    </div>
                    <div class="page-top__date page-top__info_flex">
                        <svg width="16" height="16">
                            <use xlink:href="/images/iconsList.svg#icon-calendar"></use>
                        </svg>
                        <time datetime="">{{ formatDate(recipe?.created_at) }}</time>
                    </div>
                    <a href="#comments" class="page-top__comments page-top__info_flex">
                        <svg width="16" height="16">
                            <use xlink:href="/images/iconsList.svg#icon-comment"></use>
                        </svg>
                        <span>{{ comments?.total }}</span>
                    </a>
                    <div class="page-top__rating">
                        <Rating :rating="recipe?.rating" />
                    </div>
                </div>
            </div>
            <div class="page-recipe">
                <div class="page-recipe__annotation">
                    <p>
                        {{ recipe?.annotation }}
                    </p>
                </div>
                <div class="page-recipe__media">
                    <a class="page-recipe__media-link" :href="recipe?.video" target="_blank" v-if="recipe?.video">
                        <svg class="youtube" width="120" height="100">
                            <use xlink:href="/images/iconsList.svg#icon-youtube"></use>
                        </svg>
                        <img :src="getYoutubeThumbnail(recipe.video)" alt="">
                    </a>
                    <img v-else="recipe?.image" width="600" height="380" :src="recipe.image" alt="">
                </div>
                <div class="page-recipe__content container">
                    <div class="page-recipe__column-left">
                        <div class="recipe-time">
                            <div class="recipe-time__item">
                                <span>prep time</span>
                                <span>{{ recipe?.stats?.prepTime }} min</span>
                            </div>
                            <div class="recipe-time__item">
                                <span>total time</span>
                                <span>{{ recipe?.stats?.totalTime }} min</span>
                            </div>
                            <div class="recipe-time__item">
                                <span>servings</span>
                                <span>{{ recipe?.stats?.servings }} person</span>
                            </div>
                        </div>
                        <div class="recipe-ingridients">
                            <h2 class="recipe-page__minor-header">Ingridients</h2>
                            <div class="recipe-ingridients__list">
                                <div v-for="(item, index) in recipe?.ingridients" class="recipe-ingridients__item">
                                    <Checkbox :name="'ing-' + index" self-checked>
                                        {{ item }}
                                    </Checkbox>
                                </div>
                            </div>
                        </div>
                        <div class="recipe-instructions">
                            <h2 class="recipe-page__minor-header">Instructions</h2>
                            <ol class="recipe-instructions__list">
                                <li v-for="(item, index) in recipe?.directions" :key="index"
                                    class="recipe-instructions__item">
                                    {{ item }}
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div class="page-recipe__column-right">
                        <div class="recipe-nutrition">
                            <div class="recipe-nutrition__content">
                                <h2 class="recipe-page__minor-header">Nutrition Facts</h2>
                                <div class="recipe-nutrition__facts">
                                    <div v-for="fact in recipe?.nutrition" :key="fact.name"
                                        class="recipe-nutrition__fact">
                                        <span>
                                            {{ fact.name }}
                                        </span>
                                        <span>
                                            {{ fact.value }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ClientOnly>
                            <div class="fresh-recipes" v-if="recipes.length">
                                <h2 class="recipe-page__minor-header">Fresh Recipes</h2>
                                <div class="fresh-recipes__list">
                                    <Card v-for="item in recipes" :key="item?.name" class="fresh-recipes__item"
                                        :recipe-info="item" two-columns with-rating path="recipes" />
                                </div>
                            </div>
                        </ClientOnly>
                        <Newsletter />
                    </div>
                </div>
            </div>
        </section>
        <section id="comments" class="comments-block">
            <div class="comments-block__header">
                <h2>Comments</h2>
                <span class="comments-total" v-if="comments?.total || insertedComments">({{ comments?.total || 0
                    }})</span>
            </div>
            <CommentForm :recipe-id="recipe?.id" @comment-posted="(value) => { insertComment(value) }" />
            <template v-if="comments?.items.length || insertedComments">
                <Select :options="selectOptions" placeholder="Sort by" @select="(value) => onSelect(value)"
                    :selected-option="selectedOption" />
                <div class="comments-block__list" :key="comments?.sort">
                    <Comment v-for="item in comments?.items" :key="item.id" :comment="item"
                        @comment-updated="(value) => { insertComment(value) }" class="comments-block__list-item" />
                </div>
                <Button class="comments-block__load-more" orange-button v-if="commentsPage <= pagesLeft || pageLoading"
                    :loading="pageLoading" @click="loadNewPage">Load more</Button>
            </template>
        </section>
    </div>
</template>

<script setup lang="ts">
import Rating from '~/components/ui/Rating.vue';
import Checkbox from '~/components/ui/Checkbox.vue';
import Newsletter from '~/components/functional/Newsletter.vue';
import Card from '~/components/ui/Card.vue';
import CommentForm from '~/components/functional/CommentForm.vue';
import { render } from 'vue';
const Select = defineAsyncComponent(() => import('~/components/ui/Select.vue'))
const Comment = defineAsyncComponent(() => import('~/components/ui/Comment.vue'))
const Button = defineAsyncComponent(() => import('~/components/ui/Button.vue'))
import { formatDate } from '~/composables/formatDate';
import { getYoutubeThumbnail } from '~/composables/getYoutubeThumbnail';
import { useFavorite } from '~/stores/favorite';

onMounted(async () => {
    recipes.value = await $fetch(`${getBaseApiUrl()}/prisma/recipe/random-recipes?count=3`)
})

const favorite = useFavorite()
const recipes = ref([])
const insertedComments = ref(false)
const pageLoading = ref(false)
const inFavorite = computed(() => favorite.favorite?.find(item => item.id === recipe.value?.id))

const route = useRoute()
const selectOptions = [
    { id: 'recent', value: 'Most Recent' },
    { id: 'helpful', value: 'Most Helpful' },
    { id: 'oldest', value: 'Oldest' },
    { id: 'ratings', value: 'Ratings' },
]
const selectedOption = ref(selectOptions[0])

const handleFavorite = async () => {
    favorite.updateFavorite({ recipeId: recipe.value?.id })
}

const endpoint = ref('')
const processEndpoint = () => {
    const params = new URLSearchParams();
    if (selectedOption.value?.id) {
        params.append('sort', selectedOption.value.id);
    }
    return `${getBaseApiUrl()}/prisma/comments/${recipe.value?.id}?${params.toString()}`
}

const { data: recipe } = await useFetch(`${getBaseApiUrl()}/prisma/recipe/${route.params.detail}`)
endpoint.value = processEndpoint()
const { data: comments } = await useFetch(endpoint, {
    watch: [endpoint]
})

const commentsPage = ref(comments.value?.page)
const pagesLeft = ref(comments.value?.pagesLeft)

watch(comments, () => {
    commentsPage.value = comments.value?.page
    pagesLeft.value = comments.value?.pagesLeft
})

const onSelect = (value: { id: string, value: string }) => {
    selectedOption.value = value
    endpoint.value = processEndpoint()
}

const loadNewPage = async () => {
    pageLoading.value = true
    const newComments = await $fetch(endpoint.value + `${endpoint.value.includes('?') ? '&' : '?'}page=${commentsPage.value + 1}`)
    commentsPage.value = newComments?.page
    pagesLeft.value = newComments?.pagesLeft
    insertNewComments(newComments?.items)
    pageLoading.value = false
}

const insertNewComments = (newComments) => {
    const commentsBlock = document.querySelector('.comments-block__list');
    if (commentsBlock) {
        for (const comment of newComments) {
            const commentComponent = h(Comment, { comment: comment });
            render(commentComponent, commentsBlock);
        }
    }
}

const insertComment = async (comment) => {
    const commentsBlock = document.querySelector('.comments-block__list');
    const totalComments = document.querySelector('.comments-total');

    if (!comment?.parentid) {
        insertedComments.value = true;
        const newCommentComponent = h(Comment, {
            comment: comment,
            "onCommentUpdated": insertComment
        });
        render(newCommentComponent, commentsBlock, { insert: true });
        commentsBlock.prepend(newCommentComponent.el);

        if (totalComments) {
            const currentCount = parseInt(totalComments.textContent.match(/\d+/)[0]) || 0;
            totalComments.textContent = `(${currentCount + 1})`;
        }
    } else {
        const parentComment = document.querySelector(`[data-comment-id="${comment.parentid}"]`);
        if (parentComment) {
            const replyCommentComponent = h(Comment, {
                comment: comment,
                class: { 'comment-reply': true },
                "onCommentUpdated": insertComment
            });
            render(replyCommentComponent, parentComment, { insert: true });
            parentComment.appendChild(replyCommentComponent.el);
        }
    }
}
</script>

<style scoped lang="sass">
.recipe-page
    grid-column: content-start / content-end
    &__minor-header
        font-family: var(--font-family-secondary)
        font-size: 30px
        line-height: 1.23
.page-top
    &__actions-panel
        display: flex
        justify-content: space-between
        align-items: center
    &__trend
        display: flex
        align-items: center
        column-gap: 12px
        span
            font-weight: 500
            font-size: 14px
            line-height: 1.29
    &__rating
        display: flex
        align-items: center
    &__actions
        display: grid
        grid-auto-flow: column
        gap: 32px
        svg
            cursor: pointer
            &:hover
                color: var(--color-orange)
    .favorite-active
        color: var(--color-orange)
        animation: pulse 1s ease
    &__info
        padding: 32px 0
        border-bottom: 1px solid var(--color-gray-other-light)
        display: flex
        flex-wrap: wrap
        column-gap: 32px
        &>*
            margin: 6px 0
    &__info_flex
        display: flex
        align-items: center
        column-gap: 6px
        font-size: 12px
        line-height: 1.25
        text-decoration: none
    .author-avatar
        width: 32px
        height: 32px
        border-radius: 50%
        overflow: hidden
.page-recipe
    margin-top: 24px
    &__annotation
        font-size: 18px
        line-height: 1.56
    &__content
        margin-top: 57px
    &__column-left
        grid-column: 1/10
        padding-right: 64px
        border-right: 1px solid var(--color-gray-other-light)
    &__column-right
        grid-column: 10/14
    &__media
        margin-top: 20px
    &__media-link
        position: relative
        svg
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%) 
            color: #f50057
.recipe-time
    display: flex
    align-items: center
    &__item
        display: grid
        padding-right: 24px
        &:not(:first-child)
            padding: 0 24px
        &+.recipe-time__item
            border-left: 1px solid var(--color-gray-other-light)
        span:first-child
            font-size: 12px
            line-height: 1.25
            color: var(--color-gray-dark)
            text-transform: uppercase
        span:last-child
            font-size: 14px
            line-height: 1.64
            text-transform: uppercase
.recipe-nutrition        
    &__content
        border-radius: 12px
        padding: 40px 18px
        background-color: var(--color-gray-light)
    &__facts
        margin-top: 28px
        display: grid
        gap: 8px
    &__fact
        padding: 4px 0
        display: flex
        justify-content: space-between
        &:not(:last-child)
            border-bottom: 1px solid var(--color-gray-other-light)
        span:first-child
            font-weight: 300
            line-height: 1.5
        span:last-child
            line-height: 1.5
.recipe-ingridients
    margin-top: 40px
    &__list
        margin-top: 32px
        display: grid
        gap: 24px
    &__item
        font-size: 18px
        line-height: 1.56
        &:deep(.ts-checkbox_checked)
            label
                text-decoration: line-through
                color: var(--color-gray-dark)
.recipe-instructions
    margin-top: 80px
    &__list
        margin-top: 38px
        display: grid
        gap: 36px
        list-style-type: none
        counter-reset: list-counter
    &__item
        font-size: 18px
        line-height: 1.56
        counter-increment: list-counter
        display: flex
        column-gap: 16px
        &::before
            content: counter(list-counter)
            font-size: 14px
            font-weight: 500
            line-height: 1
            background-color: var(--color-orange)
            min-width: 24px
            height: 24px
            border-radius: 50%
            display: flex
            align-items: center
            justify-content: center
            color: var(--color-white)
.fresh-recipes
    margin-top: 48px
    &__list
        margin-top: 32px
        display: grid
        gap: 32px
.page-recipe__column-right:deep(.newsletter)
    margin-top: 64px
    padding: 56px 20px
    text-align: center
    border-radius: 6px
    .newsletter__title
        font-size: 36px
        line-height: 1.22
    .newsletter__text
        margin-top: 8px
        font-weight: 300
        line-height: 1.5
    form
        margin-top: 15px
        display: grid
        gap: 13px
    .newsletter__input
        height: 48px
        padding: 13px 13px 13px 48px
    .newsletter__btn
        height: 48px
        width: 100%
        border-color: var(--color-orange)
    .newsletter__files
        margin-top: 16px
        font-size: 10px
        line-height: 1.6
        max-width: 213px
    .newsletter__input-container svg
        display: block
.comments-block
    margin-top: 120px
    &__header
        display: flex
        align-items: flex-end
        column-gap: 16px
        h2
            font-family: var(--font-family-secondary)
            font-size: 60px
            line-height: 1.2
        span
            font-size: 24px
            line-height: 1.58
    &__list
        margin-left: -48px
    &:deep(.comment)
        animation: appear 0.5s ease
    &__load-more
        margin-top: 40px
        height: 40px
@keyframes appear
    0%
        opacity: 0
        transform: translateY(-10px)
    100%
        opacity: 1
        transform: translateY(0)
@keyframes pulse
    0%
        transform: scale(1)
    50%
        transform: scale(1.2)
    100%
        transform: scale(1)
@media(max-width: 1170px)
    .page-recipe
        &__column-left
            padding-right: 32px
        &__column-right
            grid-column: 10/15
@media(max-width: 780px)
    .recipe-page
        &__minor-header
            font-size: 24px
            line-height: 1.54
    .page-recipe
        &__column-left
            grid-column: left / right
            padding-right: 0    
            border: none
        &__column-right
            grid-column: left / right
            margin-top: 40px
    .page-top
        &__trend
            svg
                width: 16px
                height: 16px
            span
                font-size: 10px
                line-height: 1.6
        &__actions
            column-gap: 16px
            svg
                width: 16px
                height: 16px
        h1
            margin-top: 8px
            font-size: 30px
            line-height: 1.23
        &__info
            padding: 16px 0
            column-gap: 24px
        &__info_flex
            font-size: 10px
            line-height: 1.6
            svg
                width: 12px
                height: 12px
    .page-recipe
        margin-top: 16px
        &__annotation
            font-size: 10px
            line-height: 1.6
        &__content
            margin-top: 16px
    .recipe-time
        &__item
            padding-right: 16px
            &:not(:first-child)
                padding: 0 16px
            span:first-child
                font-size: 10px
                line-height: 1.6
            span:last-child
                font-size: 12px
                line-height: 1.25
    .recipe-ingridients
        margin-top: 32px
        &__list
            margin-top: 16px
    .recipe-instructions
        margin-top: 32px
        &__list
            margin-top: 16px
            gap: 24px
        &__item
            font-size: 14px
            line-height: 1.64
            column-gap: 8px
            &::before
                min-width: 18px
                height: 18px
                font-size: 10px
                line-height: 1.6
    .fresh-recipes
        margin-top: 40px
    .page-recipe__column-right:deep(.newsletter)
        margin-top: 40px
    .comments-block
        margin-top: 40px
        &__header
            h2
                font-size: 30px
                line-height: 1.23
            span
                font-size: 12px
                line-height: 1.25
        &__list
            margin-left: -16px
</style>