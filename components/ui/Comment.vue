<template>
    <div class="comment">
        <div class="comment-main">
            <div class="comment__image">
                <img width="48" height="48" :src="props.comment?.user?.photo" alt="">
            </div>
            <div class="comment__body">
                <div class="comment__name">{{ props.comment?.user?.user_name }}</div>
                <time class="comment__date">{{ formatDate(props.comment?.created_at) }}</time>
                <div v-if="props.comment?.rating" class="comment__rating">
                    <Rating only-one-star :rating="props.comment.rating" />
                    <span>
                        {{ props.comment.rating }}
                    </span>
                </div>
                <div class="comment__text">
                    {{ props.comment?.text }}
                </div>
                <div class="comment__actions">
                    <div class="comment__action" @click="commentAction('reply')">
                        <svg width="16" height="16">
                            <use xlink:href="/images/iconsList.svg#icon-comment"></use>
                        </svg>
                        <span>Reply {{ props.comment?.replies?.length > 0 ? '(' + props.comment?.replies?.length + ')' :
                            ''
                            }} </span>
                    </div>
                    <div class="comment__action" @click="commentAction('like')">
                        <svg width="16" height="16">
                            <use xlink:href="/images/iconsList.svg#icon-favorite"></use>
                        </svg>
                        <span>{{ props.comment?.likes }}</span>
                    </div>
                </div>
                <CommentForm v-if="reply" :recipe-id="props.comment?.recipe_id" :parent-id="props.comment?.id" reply
                    @cancel-reply="reply = false" />
            </div>
        </div>
        <Comment class="comment-reply" v-if="props.comment?.replies?.length > 0"
            v-for="(item, index) in props.comment?.replies" :key="index" :comment="item" :level="props.level + 1" />
    </div>
</template>

<script setup lang="ts">
const Rating = defineAsyncComponent(() => import('~/components/ui/Rating.vue'));
const CommentForm = defineAsyncComponent(() => import('~/components/functional/CommentForm.vue'));

import { useUser } from '@/stores/user';
const props = defineProps({
    comment: {
        type: Object as () => Comment,
        required: true
    },
    level: {
        type: Number,
        default: 0
    }
})
type CommentItem = {
    id: string,
    recipe_id: string,
    parent_id: string,
    user: {
        user_name: string,
        photo: string
    },
    date: string,
    text: string,
    rating?: number,
    likes: number,
}
type Comment = CommentItem & {
    replies: Comment[]
}

const userStore = useUser()
const reply = ref(false)

const commentAction = async (action: 'reply' | 'like') => {
    if (!userStore.userData?.id) {
        return
    }
    console.log('CLICKA');

    if (action === 'reply') {
        reply.value = true
    } else if (action === 'like') {
        console.log(props.comment?.id);

        await $fetch(`/api/prisma/comments/update?comment_id=${props.comment?.id}`)
    }
}
</script>

<style scoped lang="sass">
.comment-main
    border-bottom: 1px solid var(--color-gray-other-light)
    padding-bottom: 21px
    display: flex
    column-gap: 24px
    width: 100%
.comment-reply
    margin-left: 48px
.comment
    padding: 32px 0 0 0
    &__body
        width: 100%
    &__image
        min-width: 48px
        height: 48px
        border-radius: 50%
        overflow: hidden
        img
            width: 100%
            height: 100%
            object-fit: cover        
    &__name
        font-weight: 600
        font-size: 18px
        line-height: 1.56
    &__date
        margin-top: 5px
        display: inline
        font-size: 14px
        line-height: 1.64
        color: var(--color-gray-dark)
        margin-right: 10px
    &__rating
        display: inline-flex
        column-gap: 4px
        &:deep(.rating__star)
            width: 14px
            height: 14px
        span
            font-size: 12px
    &__text
        margin-top: 10px
        line-height: 1.5
    &__actions
        margin-top: 31px
        display: flex
        align-items: center
        column-gap: 24px
    &__action
        display: flex
        align-items: center
        color: var(--color-gray-dark)
        column-gap: 6px
        cursor: pointer
        svg
            color: inherit
        &:hover
            color: var(--color-orange)
@media(max-width: 780px)
    .comment-main
        column-gap: 16px
    .comment-reply
        margin-left: 16px
    .comment
        padding: 23px 0 0 0
        &__image
            min-width: 32px
            height: 32px
        &__name
            font-size: 16px
            line-height: 1.5
        &__date
            margin-top: 2px
            font-size: 12px
            line-height: 1.25
        &__text
            margin-top: 8px
            font-size: 14px
            line-height: 1.64
        &__actions
            margin-top: 17px
            font-size: 12px
            line-height: 1.25
</style>