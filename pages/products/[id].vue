<template>
  <div class="website">
    <Header />
    <div class="middle flex-c flex-col bg-white relative">
      <div class="search flex-c">
        <el-image :src="HeaderImg" class="search-bg" alt=""></el-image>
      </div>
      <div class="container flex flex-col mt-10 mb-10 leading-6">
        <div class="title flex"><span class="cursor-pointer" @click="goList">产品展示</span> > {{route.params.id}}</div>
        <component :is="dynamicComponent"></component>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import HeaderImg from '~/assets/img/home_01.jpg'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import ProductCard from '~/components/ProductCard.vue'
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n'
import { reactive,  computed } from 'vue'
import {navigateTo} from "nuxt/app";

const route = useRoute();
const dynamicComponent = computed(() => {
  const componentName = route.params.id;
  return defineAsyncComponent(() => import(`~/components/products/${componentName}.vue`));
});
const { t, rt,tm } = useI18n();
console.log(tm('products.productList'));
const data = reactive({
  searchKey: '',
  serachPlaceholder: t('products.search'),
  curCategory: "hnt",
  productList: tm('products.categoryList[0].children')
});
function goList(){
  navigateTo('/products');
}
</script>

<style  lang="scss" scoped>
.website{
  height: 100%;
  width: 100%;
  color: #666666;
  background:#EEE;
}

.search{
  width: 100%;
  height:400px;
  position: relative;
  .search-bg{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
.container{
  width: 1200px;
}
.category{
  width: 300px;
  height: 420px;
  background-color: rgb(238, 238, 238);
  .category-item{
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
}
.title {
  width: 240px;
  height: 22px;
  font-family: Microsoft YaHei UI, Microsoft YaHei UI;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  opacity: 0.5;
}

</style>
