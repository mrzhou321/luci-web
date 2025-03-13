import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui'
  ],
  i18n: {
    locales: [
      { code: 'zh', iso: 'zh-CN', file: 'zh-CN.js', name: '中文' },
      { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'English' }
    ],
    defaultLocale: 'zh',
    lazy: true,
    langDir: 'locales/'
  },

  css: [
    '~/assets/css/main.css'
  ],
  ui: {
    fonts: false
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  compatibilityDate: '2025-02-24',

})
