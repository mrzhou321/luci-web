<template>
    <div class="website flex-c flex-col">
      <Header />
      <div class="middle flex-c bg-white relative">
        <el-carousel height="600px" class="w-full">
          <el-carousel-item v-for="item in items" :key="item">
            <el-image :src="item" class="size-full" alt="" :fit="'contain'" lazy/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <Footer />
    </div>
  </template>

  <script lang="ts" setup>
   import Header from '~/components/Header.vue'
   import Footer from '~/components/Footer.vue'
   import Home01 from  "~/assets/img/home_01.jpg"
   import Home02 from  "~/assets/img/home_02.jpg"
   import Home03 from  "~/assets/img/home_03.jpg"
   import ProductList from '~/components/ProductList.vue'
   const { t, rt } = useI18n();
   const items = [
    Home01,
    Home02,
     Home03,
   ];
  </script>

  <style lang="scss" scoped>
  .website{
    height: 100%;
    width: 100%;
    color: #666666;
    background:#EEE;
    .middle{
      width: 1200px;
    }
  }

  </style>
