import { useUser } from '~/stores/user';

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (import.meta.server) return
    const isShowSearchPanel = useState('isShowSearchPanel', () => false)
    isShowSearchPanel.value = false
})