import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  typescript: {
    strict: true
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss'
  ],

  i18n: {
    locales: [
      { code: 'zh', iso: 'zh-CN', file: 'zh-CN.js', name: '中文' },
      { code: 'en', iso: 'en-US', file: 'en-US.js', name: 'English' }
    ],
    defaultLocale: 'zh',
    lazy: true,
    langDir: 'locales/',
    vueI18n: "./i18n.config.ts"
  },

  css: [
    '~/assets/css/main.scss'
  ],

  compatibilityDate: '2025-02-24'
})