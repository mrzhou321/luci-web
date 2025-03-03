<template>
    <header class="flex-c flex-col">
      <div class="logo flex justify-between items-center pt-4">
        <div class="flex-c">
          <img src="../assets/img/logo.png" class="size-12 mr-4"/>
          <span class="text-xl font-weight">{{$t('company.name') }}</span>
        </div>
        <div class="language-switch">
          <button @click="switchLanguage('zh')">中文</button>
          <span class="ml-4 mr-4">|</span>
          <button @click="switchLanguage('en')">English</button>
        </div>
      </div>
      <nav class="flex-c w-full">
        <ul class="flex-c justify-between">
          <li><NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink></li>
          <li><NuxtLink to="/about">{{ $t('nav.about') }}</NuxtLink></li>
          <li><NuxtLink to="/products">{{ $t('nav.products') }}</NuxtLink></li>
          <li><NuxtLink to="/news">{{ $t('nav.news') }}</NuxtLink></li>
          <li><NuxtLink to="/contact">{{ $t('nav.contact') }}</NuxtLink></li>
          <li><NuxtLink to="/downloads">{{ $t('nav.downloads') }}</NuxtLink></li>
          <li><NuxtLink to="/services">{{ $t('nav.services') }}</NuxtLink></li>
          <li><NuxtLink to="/about">{{ $t('nav.aboutUs') }}</NuxtLink></li>
        </ul>
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
  header{
    width: 100%;
    padding: 0 20px;
    background-color: #716E66;
  }
  .logo{
    width: 1000px;
  }
  nav {
    height: 44px;
  }
  ul {
    width: 1000px;
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
  