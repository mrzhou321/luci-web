<template>
    <div>
      <Header />
      <main>
        <h1>{{ $t('nav.products') }}</h1>
        <div class="product-list">
          <ProductCard
            v-for="product in $tm('products.productList')"
            :key="$rt(product.id)"
            :product="product"
          /> 
        </div>
      </main>
      <Footer />
    </div>
</template>
  
  <script lang="ts" setup>
   import Header from '~/components/Header.vue'
   import Footer from '~/components/Footer.vue'
   import ProductCard from '~/components/ProductCard.vue'
   import { useI18n } from 'vue-i18n'
   const { t, rt } = useI18n(); 
   console.log(rt('products.productList'));
  </script>
  