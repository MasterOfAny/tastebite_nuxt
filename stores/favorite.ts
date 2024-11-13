import { defineStore } from "pinia";
import type { Recipe } from "~/types/types";

export const useFavorite = defineStore('favorite', () => {
    const favorite = ref<Recipe[]>([])

    const fetchFavorite = async () => {
        favorite.value = await $fetch(`${getBaseApiUrl()}/prisma/favorite/get`)
    }
    const updateFavorite = async (data: { recipeId?: string, recipeIds?: string[] }) => {
        try {
            await $fetch(`${getBaseApiUrl()}/prisma/favorite/update`, {
                method: 'POST',
                body: data
            })
            await fetchFavorite()
        } catch (error) {
            console.error('Error updating favorite:', error)
        }
    }

    return { favorite, fetchFavorite, updateFavorite }
})