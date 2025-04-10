<template>
    <div class="product-card flex-c flex-col" v-if="product" @click="showDetail(product)">
      <img class="pt-icon" :src="data.images[rt(product.id) + '.jpg']" alt="" />
      <div>{{ $rt(product.name) }}</div>
    </div>
  </template>

  <script lang="ts" setup>
  import {computed, reactive} from "vue";
  import {useI18n} from "vue-i18n";
  import {navigateTo} from "nuxt/app";


  const { product } = defineProps<{
    product: any;
  }>();
  const { t, rt,tm } = useI18n();
  const data = reactive({
    images: [] as string[]
  })
  const imageModules = import.meta.glob('~/assets/img/products/*.{jpg,png,gif}');
  for (const path in imageModules) {
    const fileName = path.split('/').pop(); // 获取文件名
    imageModules[path]().then((mod) => {
      data.images[fileName] = mod.default;
    });
  }
  function showDetail(item) {
    navigateTo(`/products/${rt(item.id)}`);
  }
  </script>

  <style lang="scss" scoped>
  .product-card {
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 20px;
    .pt-icon {
      width: 400px;
      height: 400px;
    }
  }
  .product-card h3 {
    margin-bottom: 10px;
  }
  </style>
