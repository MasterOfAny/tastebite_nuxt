// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/sass/reset.sass',
    '@/sass/main.sass'
  ],
  ssr: true,
  //not working
  /* devServer: {
    https: {
      key: './localhost-key.pem',
      cert: './localhost.pem'
    }
  }, */
})
