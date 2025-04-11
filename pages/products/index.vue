<template>
    <div class="website">
      <Header />
      <div class="middle flex-c flex-col bg-white relative">
        <div class="search flex-c">
          <el-image :src="HeaderImg" class="search-bg" alt=""></el-image>
          <div class="flex-c">
            <div>{{t("products.searchTitle")}}</div>
            <el-input
                v-model="data.serachKey"
                style="width: 240px"
                size="large"
                :placeholder="data.serachPlaceholder"
                :suffix-icon="Search"
            />
          </div>
        </div>
        <div class="container flex mt-10">
          <div class="category flex flex-col p-4">
            <div class="text-2xl text-primary-500 h-12">
              {{t("products.category")}}
            </div>
            <div class="category-item flex  h-12 cursor-pointer" v-for="category in $tm('products.categoryList')" @click="handleCategoryClick(category)">
               <div class="flex-c" :class="data.curCategory === $rt(category.key) ? 'text-primary-500' : ''">{{$rt(category.title)}}</div>
            </div>
          </div>
          <div class="flex-1 product-list flex flex-wrap justify-between ml-4">
            <ProductCard
                v-for="product in data.productList"
                :key="$rt(product.id)"
                :product="product"
            />
          </div>
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
   import { useI18n } from 'vue-i18n'
   import { reactive } from 'vue'
   const { t, rt,tm } = useI18n();
   // console.log(tm('products.productList'));
   const data = reactive({
    searchKey: '',
     serachPlaceholder: t('products.search'),
     curCategory: "hnt",
     productList: tm('products.categoryList[0].children')
  });
  function handleCategoryClick(category:any){
      data.curCategory = rt(category.key);
      data.productList = category.children;
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
</style>
