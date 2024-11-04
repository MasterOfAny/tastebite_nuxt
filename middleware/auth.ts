import { useUser } from '~/stores/user';

export default defineNuxtRouteMiddleware(async (to) => {
    const userStore = useUser()

})