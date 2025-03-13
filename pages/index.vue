<template>
    <div class="website flex-c flex-col">
      <Header />
      <div class="middle flex-c">
        <UCarousel v-slot="{ item }" dots :items="items" class="w-full max-w-xs mx-auto">
          <img :src="item" width="320" height="320" class="rounded-lg">
        </UCarousel>
      </div>
      <Footer />
    </div>
  </template>

  <script lang="ts" setup>
   import Header from '~/components/Header.vue'
   import Footer from '~/components/Footer.vue'
   import ProductList from '~/components/ProductList.vue'
   const { t, rt } = useI18n();
   const items = [
     'https://picsum.photos/640/640?random=1',
     'https://picsum.photos/640/640?random=2',
     'https://picsum.photos/640/640?random=3',
     'https://picsum.photos/640/640?random=4',
     'https://picsum.photos/640/640?random=5',
     'https://picsum.photos/640/640?random=6'
   ];
  </script>

  <style lang="scss" scoped>
  .website{
    height: 100vh;
    width: 100%;
    color: #666666;
    background:#EEE;
    .middle{
      width: 100%;
      height: calc(100% - 160px);
      background-image: url(../assets/img/bg.webp);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .main{
      width: 1000px;
    }
  }

  </style>
