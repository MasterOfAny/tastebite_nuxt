// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    '@/sass/reset.sass',
    '@/sass/main.sass'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern'
        }
      }
    }
  },
  ssr: true,

  modules: ['@pinia/nuxt']
})