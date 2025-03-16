<template>
    <div class="website flex-c flex-col">
      <Header />
      <div class="middle flex-c bg-white relative">
        <UCarousel v-slot="{ item }" dots :items="items" class="w-full">
          <img :src="item" width="100%" height="600px">
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
    height: 100%;
    width: 100%;
    color: #666666;
    background:#EEE;
    .middle{
      width: 100%;
    }
    .main{
      width: 1000px;
    }
  }

  </style>
