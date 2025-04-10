<template>
    <div>
      <Header></Header>
      <div class="middle flex-c flex-col bg-white relative">
        <el-image :src="HeaderImg" style="width: 100%;height:400px;" alt=""></el-image>
        <h1>{{ $t('nav.about') }}</h1>
        <section>
          <h2>企业文化</h2>
          <p>{{ $t('about.culture') }}</p>
        </section>
        <section>
          <h2>发展历程</h2>
          <ul>
            <li v-for="item in $tm('about.history')" :key="$rt(item.year)">
              <strong>{{ $rt(item.year) }}:</strong> {{ $rt(item.event) }}
            </li>
          </ul>
        </section>
      </div>
      <Footer></Footer>
    </div>
  </template>

<script lang="ts" setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  import HeaderImg from '~/assets/img/home_01.jpg'
</script>
