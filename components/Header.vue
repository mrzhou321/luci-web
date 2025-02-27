<template>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink></li>
          <li><NuxtLink to="/about">{{ $t('nav.about') }}</NuxtLink></li>
          <li><NuxtLink to="/products">{{ $t('nav.products') }}</NuxtLink></li>
          <li><NuxtLink to="/news">{{ $t('nav.news') }}</NuxtLink></li>
          <li><NuxtLink to="/contact">{{ $t('nav.contact') }}</NuxtLink></li>
          <li><NuxtLink to="/downloads">{{ $t('nav.downloads') }}</NuxtLink></li>
          <li><NuxtLink to="/services">{{ $t('nav.services') }}</NuxtLink></li>
          <li><NuxtLink to="/about">{{ $t('nav.aboutUs') }}</NuxtLink></li>
        </ul>
        <div class="language-switch">
          <button @click="switchLanguage('zh')">中文</button>
          <button @click="switchLanguage('en')">English</button>
        </div>
      </nav>
    </header>
  </template>
  
  <script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  const { locale } = useI18n()
  function switchLanguage(lang: string) {
    locale.value = lang
  }
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    padding: 0;
    margin: 0;
  }
  .language-switch button {
    margin-left: 10px;
  }
  </style>
  