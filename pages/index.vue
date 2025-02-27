<template>
    <div class="website">
      <Header />
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
    height: 100vh;
    width: 100vw;
    .main{
      width: 100%;
      height: calc(100% - 120px);
    }
  }
  
  </style>