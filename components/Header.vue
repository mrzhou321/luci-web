<template>
    <header class="flex-c flex-col w-full">
      <div class="flex-c justify-between main-container h-9">
        <div>
          {{ $t('header.welcome') }}
        </div>
        <div class="flex-c">
           <img src="assets/img/lang.png" />
           <el-select v-model="curLocale" arrow  size="small"  style="width: 90px;"   @change="switchLanguage">
             <el-option
                 v-for="item in locales"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value"
             />
           </el-select>
        </div>
      </div>
      <div class="w-full bg-white flex-c h-21">
        <div class="main-container flex justify-between items-center">
          <div class="flex-c">
            <img src="../assets/img/logo.png" class="size-12 mr-4"/>
            <span class="text-xl font-weight">{{$t('company.name') }}</span>
          </div>
          <el-input
              v-model="search.key"
              style="width: 240px"
              size="large"
              :placeholder="search.placeholder"
              :suffix-icon="Search"
          />
        </div>
      </div>
      <el-affix class="w-full">
        <div class="header-tabbar flex-c w-full h-14 bg-white border-t border-t-gray-300">
            <div class="main-container h-full flex">
              <template v-for="item in tabbarItems" :key="item.key">
                <div class="h-full flex-1 w-24  flex-c cursor-pointer text-white text-xl" :class="route.path === item.path ? 'tabbar-active' : ''" @click="changeTabbarKey(item)" >
                  {{item.title}}
                </div>
              </template>
            </div>
        </div>
      </el-affix>
    </header>
  </template>

  <script lang="ts" setup>
  import { ref,reactive } from 'vue'
  import { useI18n } from 'vue-i18n'
  import {navigateTo, useRoute} from "nuxt/app";
  import { Search } from '@element-plus/icons-vue';
  const route = useRoute();
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
    key: '',
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
  const tabbarItems = [
    {
      title: t("nav.home"),
      key: "home",
      path: '/',
    },
    {
      title: t("nav.about"),
      key: "about",
      path: '/about',
    },
    {
      title: t("nav.products"),
      key: "products",
      path: "/products",
    },
    {
      title: t("nav.apply"),
      key: 'apply',
      path: '/apply',
    },
    {
      title: t("nav.technology"),
      key: 'tech',
      path: '/tech'
    },
    {
      title: t("nav.news"),
      key: 'news',
      path: '/news',
    },
    {
      title: t("nav.contact"),
      key: 'contact',
      path: '/contact'
    }
  ];
  const currentTab= reactive({
    key: "home",
  });
  function changeTabbarKey(item) {
    currentTab.key = item.key;
    navigateTo(item.path);
  }
  function switchLanguage(lang: string) {
    locale.value = lang
  }
  </script>

  <style lang="scss" scoped>
  header{

  }
  .logo{
    width: 1200px;
    padding: 0 20px;
  }
  ul {
    width: 1200px;
    list-style: none;
    display: flex;
    gap: 15px;
    padding: 0;
    margin: 0;
  }
  .language-switch button {
    margin-left: 10px;
  }
  .header-tabbar {
    height: 60px;
    background: linear-gradient( 90deg, rgba(38,111,232,0.5) 0%, #266FE8 19%, #266FE8 51%, #266FE8 81%, rgba(38,111,232,0.5) 100%);
    .tabbar-active{
      background-color: #195DCE;
    }
  }
  </style>
