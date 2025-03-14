<template>
    <header class="flex-c flex-col w-full">
      <div class="flex-c justify-between main-container h-9">
        <div>
          {{ $t('header.welcome') }}
        </div>
        <div class="flex">
           <img src="assets/img/lang.png" />
           <USelect v-model="curLocale" arrow  size="sm" :items="locales" class="w-30 h-8"  @change="switchLanguage"/>
        </div>
      </div>
      <div class="w-full bg-white flex-c h-21">
        <div class="main-container flex justify-between items-center">
          <div class="flex-c">
            <img src="../assets/img/logo.png" class="size-12 mr-4"/>
            <span class="text-xl font-weight">{{$t('company.name') }}</span>
          </div>
          <UInput trailing-icon="i-lucide-search" size="md" variant="outline" :placeholder="search.placeholder" />
        </div>
      </div>
      <div class="flex-c w-full h-14 bg-white border-t border-t-primary-50">
        <div class="main-container h-full">
          <UNavigationMenu contentOrientation="vertical"  :ui="navMenuUi" trailing-icon="i-lucide-arrow-down" :items="menus" class="w-full h-full justify-start" />
        </div>
      </div>
    </header>
  </template>

  <script lang="ts" setup>
  import { useI18n } from 'vue-i18n'
  const { locale,t  } = useI18n();
  const locales = ref([
    {
      label: '简体中文',
      value: 'zh'
    },
    {
      label: 'English',
      value: 'en'
    }
  ])
  const curLocale = ref('zh');
  const search = reactive({
    placeholder: t('header.search')
  });
  const navMenuUi = {

    // 自定义菜单项的样式
  }

  const menus = ref([
    {
      label: t("nav.home"),
      active: true,
      to: '/',
    },
    {
      label: t("nav.about"),
      to: '/about',
    },
    {
      label: t("nav.products"),
      to: '/products',
      children: [
        {
          label: t("nav.cement"),
          to: '/products/cement'
        },
        {
          label: t("nav.concrete"),
          to: '/products/concrete'
        }
      ]
    },
    {
      label: t("nav.apply"),
      to: '/apply',
    },
    {
      label: t("nav.technology"),
      to: '/tech'
    },
    {
      label: t("nav.news"),
      to: '/news',
    },
    {
      label: t("nav.contact"),
      to: '/contact'
    }
  ]);
  function switchLanguage(lang: string) {
    locale.value = lang
  }
  </script>

  <style scoped>
  header{

  }
  .logo{
    width: 1000px;
    padding: 0 20px;
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
