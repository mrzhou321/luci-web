<template>
    <div class="product-card">
      <h3>{{ $rt(product.name) }}</h3>
      <p>{{ $rt(product.description) }}</p>
      <ul>
        <li v-for="(value, key) in product.spec" :key="key">
          <strong>{{ $rt(key)}}:</strong> {{ $rt(value) }}
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  defineProps<{ product: any }>()
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 20px;
  }
  .product-card h3 {
    margin-bottom: 10px;
  }
  </style>
  