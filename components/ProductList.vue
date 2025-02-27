<template>
    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </template>
  
  <script lang="ts" setup>
  import ProductCard from '~/components/ProductCard.vue'
  const props = defineProps<{ products: any[] }>()
  console.log(props.products, "products")
  </script>
  
  <style scoped>
  .product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  </style>
  