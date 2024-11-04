// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    '@/sass/reset.sass',
    '@/sass/main.sass'
  ],

  //not working
  ssr: true
  /* devServer: {
    https: {
      key: './localhost-key.pem',
      cert: './localhost.pem'
    }
  }, */,

  modules: ['@pinia/nuxt']
})