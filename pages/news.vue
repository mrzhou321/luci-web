<template>
    <div>
      <Header />
      <main>
        <h1>{{ $t('nav.news') }}</h1>
        <section>
          <h2>公司动态</h2>
          <ul>
            <li v-for="newsItem in $tm('news.companyNews')" :key="$rt(newsItem.date)">
              <strong>{{ $rt(newsItem.date) }}:</strong> {{ $rt(newsItem.content) }}
            </li>
          </ul>
        </section>
        <section>
          <h2>行业资讯</h2>
          <ul>
            <li v-for="(news, index) in $tm('news.industryNews')" :key="index">
              {{ $rt(news) }}
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
</template>
  
<script lang="ts" setup>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
</script>
  