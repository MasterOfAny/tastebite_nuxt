import { useUser } from '~/stores/user';

export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUser()
    const refreshToken = useCookie<string>('refresh_token')
    const isAuth = useCookie('isAuth')
    try {
        if (refreshToken && isAuth.value && !userStore.userData?.id) {
            await userStore.fetchUserData()

        }
    } catch (error) {
        console.error('Error fetching user data')
    }

    if (userStore.userData?.id && to.path === '/login') {
        return navigateTo('/account')
    }

    if (!userStore.userData?.id && to.path === '/account') {
        return navigateTo('/login')
    }
})