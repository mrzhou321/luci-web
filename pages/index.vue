<template>
    <div class="website flex-c flex-col">
      <Header />
      <div class="main-container flex-c">
        <main class="main">
        <h1>{{ $t('home.welcome') }}</h1>
        <section>
          <h2>{{ $t('company.name') }}</h2>
          <p>{{ $t('company.enName') }}</p>
        </section>
        <section>
          <h2>{{ $t('nav.products') }}</h2>
          <!-- 调用组件展示产品列表 -->
          <ProductList :products="$tm('products.productList')" />
        </section>
      </main>
      </div>
      <Footer />
    </div>
  </template>
  
  <script lang="ts" setup>
   import Header from '~/components/Header.vue'
   import Footer from '~/components/Footer.vue'
   import ProductList from '~/components/ProductList.vue'
   const { t, rt } = useI18n(); 
   console.log(rt('news.companyNews'));
  </script>
  
  <style lang="scss" scoped>
  .website{
    height: 100%;
    width: 100%;
    color: white;
    .main-container{
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