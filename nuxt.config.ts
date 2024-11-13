// https://nuxt.com/docs/api/configuration/nuxt-config
import { defu } from 'defu'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: [
    '@/sass/reset.sass',
    '@/sass/main.sass'
  ],
  vite: {
    build: {
      modulePreload: false,
    },
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern'
        }
      }
    }
  },
  ssr: true,
  nitro: {
    compressPublicAssets: {
      brotli: true
    },
  },
  hooks: {
    'build:manifest': (manifest) => {
      for (const key in manifest) {
        // or other logic
        manifest[key].dynamicImports = [];
        manifest[key].preload = undefined;
      }
    },
    'vite:extendConfig'(config, { isClient }) {
      if (!isClient) return;
      config.build = defu(config.build, {
        chunkSizeWarningLimit: 500,
        rollupOptions: {
          output: {
            manualChunks: {
              pinia: ['pinia'],
              yup: ['yup']
            },
          },
        },
      });
    },
  },

})