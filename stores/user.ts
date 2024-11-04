import { defineStore } from "pinia";
import { sendForm } from "~/composables/formEvents";
import type { Form, User } from "~/types/types"

export const useUser = defineStore('user', () => {
    const isAuth = ref(false)
    const userData = ref<User | null>(null)
    const jwtCookie = useCookie(useRuntimeConfig().public.cookieName as string, {
        sameSite: 'strict',
        httpOnly: true,
        secure: true,
    })

    const jwtRefreshCookie = useCookie(useRuntimeConfig().public.cookieName + '-refresh', {
        sameSite: 'strict',
        httpOnly: true,
        secure: true,
    })


    const login = async (email: string, password: string) => {
        const form: Form = {
            url: '/api/prisma/user/login',
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
            url: '/api/prisma/user/save',
            method: 'POST',
            body: {
                email: email,
                name: name,
                password: password
            }
        }
        const res = await sendForm(form)
    }

    const logout = async (google: boolean) => {
        if (google) {
            const accessToken = useCookie<string>('access_token')
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
        } else {
            if (process.server) {
                jwtCookie.value = null;
                jwtRefreshCookie.value = null;
                userData.value = null;
            } else {
                //const response = await useServerSideLogout();
                userData.value = null;
                window.location.reload()
            }
        }
    }

    const fetchUserData = () => {

    }

    return {
        user: {
            isAuth: isAuth.value,
            userData: userData.value
        },
        login,
        register,
        logout
    }
})