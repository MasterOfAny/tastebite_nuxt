import { defineStore } from "pinia";
import { sendForm } from "~/composables/formEvents";
import type { Form, User } from "~/types/types"

export const useUser = defineStore('user', () => {
    const userData = ref<User | null>(null)
    const isAuth = useCookie<boolean>('isAuth')
    const error = ref('')

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
                } else {
                    error.value = res.message
                }
            } catch (error) {
                error.value = error.data.message
                console.error('Error fetching user data')
            }
        } else {
            try {
                const res = await $fetch(`/api/prisma/user/get?full=true`)
                if (!res?.message) {
                    userData.value = res as unknown as User
                    isAuth.value = true
                } else {
                    error.value = res.message
                }
            } catch (error) {
                error.value = error.data.message
                console.error('Error fetching user data')
            }
        }
    }
    const updateUser = async (data: { photo?: File; name?: string; user_name?: string; email?: string; password?: string; newsletter?: boolean }) => {
        const formData = new FormData()
        if (data.photo) {
            formData.append('photo', data.photo)
        }
        if (data.name) {
            formData.append('name', data.name)
        }
        if (data.user_name) {
            formData.append('user_name', data.user_name)
        }
        if (data.email) {
            formData.append('email', data.email)
        }
        if (data.password) {
            formData.append('password', data.password)
        }
        if (data.newsletter) {
            formData.append('newsletter', data.newsletter.toString())
        }

        try {
            const res = await $fetch(`/api/prisma/user/update`, { method: 'POST', body: formData })
            if (!res?.message) {
                userData.value = res as unknown as User
            } else {
                error.value = res.message
            }
        } catch (e) {
            error.value = e.data.message
            console.error('Error updating user data')
        }
    }

    return {
        userData,
        login,
        register,
        logout,
        fetchUserData,
        updateUser,
        error
    }
})