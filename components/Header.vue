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
      <nav class="flex-c w-full h-14 bg-white border-t border-t-primary-50">
        <div class="main-container">
          <UNavigationMenu trailing-icon="i-lucide-arrow-down" :items="menus" class="w-full justify-start" />
        </div>

<!--        <ul class="flex-c justify-between h-14">-->
<!--          <li><NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink></li>-->
<!--          <li><NuxtLink to="/about">{{ $t('nav.about') }}</NuxtLink></li>-->
<!--          <li><NuxtLink to="/products">{{ $t('nav.products') }}</NuxtLink></li>-->
<!--          <li><NuxtLink to="/news">{{ $t('nav.news') }}</NuxtLink></li>-->
<!--          <li><NuxtLink to="/contact">{{ $t('nav.contact') }}</NuxtLink></li>-->
<!--          <li><NuxtLink to="/downloads">{{ $t('nav.downloads') }}</NuxtLink></li>-->
<!--          <li><NuxtLink to="/services">{{ $t('nav.services') }}</NuxtLink></li>-->
<!--          <li><NuxtLink to="/about">{{ $t('nav.aboutUs') }}</NuxtLink></li>-->
<!--        </ul>-->
      </nav>
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
  const menus = ref([
    {
      label: 'Guide',
      icon: 'i-lucide-book-open',
      to: '/getting-started',
      children: [
        {
          label: 'Introduction',
          description: 'Fully styled and customizable components for Nuxt.',
          icon: 'i-lucide-house'
        },
        {
          label: 'Installation',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'i-lucide-cloud-download'
        },
        {
          label: 'Icons',
          icon: 'i-lucide-smile',
          description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
        },
        {
          label: 'Colors',
          icon: 'i-lucide-swatch-book',
          description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
        },
        {
          label: 'Theme',
          icon: 'i-lucide-cog',
          description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
        }
      ]
    },
    {
      label: 'Composables',
      icon: 'i-lucide-database',
      to: '/composables',
      children: [
        {
          label: 'defineShortcuts',
          icon: 'i-lucide-file-text',
          description: 'Define shortcuts for your application.',
          to: '/composables/define-shortcuts'
        },
        {
          label: 'useOverlay',
          icon: 'i-lucide-file-text',
          description: 'Display a modal/slideover within your application.',
          to: '/composables/use-overlay'
        },
        {
          label: 'useToast',
          icon: 'i-lucide-file-text',
          description: 'Display a toast within your application.',
          to: '/composables/use-toast'
        }
      ]
    },
    {
      label: 'Components',
      icon: 'i-lucide-box',
      to: '/components',
      active: true,
      children: [
        {
          label: 'Link',
          icon: 'i-lucide-file-text',
          description: 'Use NuxtLink with superpowers.',
          to: '/components/link'
        },
        {
          label: 'Modal',
          icon: 'i-lucide-file-text',
          description: 'Display a modal within your application.',
          to: '/components/modal'
        },
        {
          label: 'NavigationMenu',
          icon: 'i-lucide-file-text',
          description: 'Display a list of links.',
          to: '/components/navigation-menu'
        },
        {
          label: 'Pagination',
          icon: 'i-lucide-file-text',
          description: 'Display a list of pages.',
          to: '/components/pagination'
        },
        {
          label: 'Popover',
          icon: 'i-lucide-file-text',
          description: 'Display a non-modal dialog that floats around a trigger element.',
          to: '/components/popover'
        },
        {
          label: 'Progress',
          icon: 'i-lucide-file-text',
          description: 'Show a horizontal bar to indicate task progression.',
          to: '/components/progress'
        }
      ]
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
