<template>
  <div class="website flex-c flex-col">
    <Header></Header>
    <div class="middle  flex-c flex-col bg-white relative">
      <el-image :src="HeaderImg" style="width: 100%;height:400px;" alt=""></el-image>
      <div class="flex about container mt-10 mb-10">
        <el-image class="bg" :src="BgImg" alt=""></el-image>
        <div class="flex-1  ml-4">
          <h1>{{ $t('nav.contact') }}</h1>
          <address>
            <p>{{ $t('contact.address') }}</p>
            <p>Tel: {{ $t('contact.phone') }}</p>
            <p>Email: <a :href="`mailto:${$t('contact.email')}`">{{ $t('contact.email') }}</a></p>
          </address>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import HeaderImg from '~/assets/img/home_01.jpg'
import BgImg from "~/assets/img/bg.jpeg";
</script>

<style lang="scss" scoped>
.website{
  height: 100%;
  width: 100%;
  color: #666666;
  background:#EEE;
  .middle{
    background: white;
    width: 100%;
  }
}
.container{
  width: 1200px;
}
.about{
  .bg{
    width: 275px;
    height: 275px;
  }
}

</style>
