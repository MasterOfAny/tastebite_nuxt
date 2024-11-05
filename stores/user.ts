import { defineStore } from "pinia";
import { sendForm } from "~/composables/formEvents";
import type { Form, User } from "~/types/types"

export const useUser = defineStore('user', () => {
    const userData = ref<User | null>(null)
    const isAuth = useCookie<boolean>('isAuth')

    const login = async (email: string, password: string) => {
        const form: Form = {
            url: '/api/prisma/user',
            method: 'POST',
            body: {
                email: email,
                password: password
            }
        }
        try {
            await sendForm(form)
            return fetchUserData()
        } catch (e) {

        }
    }

    const register = async (name: string, email: string, password: string) => {
        const form: Form = {
            url: '/api/prisma/user',
            method: 'POST',
            body: {
                email: email,
                name: name,
                password: password
            }
        }
        try {
            await sendForm(form)
            return fetchUserData()
        } catch (e) {

        }
    }

    const logout = async () => {
        if (userData.value?.accounts.includes('google')) {
            const accessToken = useCookie<string>('google_token')
            console.log('ACCESS TOKEN', accessToken.value);

            if (accessToken) {
                try {
                    await $fetch(`https://oauth2.googleapis.com/revoke?token=${accessToken.value}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        }
                    })
                } catch (e) {

                }
            }
        }
        try {
            await $fetch('/api/prisma/user/logout')
        } catch (e) {

        }
        isAuth.value = false
        userData.value = null
        if (location.pathname.includes('account')) {
            return navigateTo('/login')
        }
    }
    const fetchUserData = async (full = false) => {
        if (!full) {
            try {
                const res = (await useFetch(`/api/prisma/user/get`)).data.value
                if (!res?.message) {
                    userData.value = res as unknown as User
                    isAuth.value = true
                }
            } catch (error) {
                console.error('Error fetching user data')
            }
        } else {
            try {
                const res = await $fetch(`/api/prisma/user/get?full=true`)
                if (!res?.message) {
                    userData.value = res as unknown as User
                    isAuth.value = true
                }
            } catch (error) {
                console.error('Error fetching user data')
            }
        }
    }

    return {
        userData,
        login,
        register,
        logout,
        fetchUserData
    }
})