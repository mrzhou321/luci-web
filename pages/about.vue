<template>
    <div>
      <Header></Header>
      <main>
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
      </main>
      <Footer></Footer>
    </div>
  </template>
  
<script lang="ts" setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
</script>