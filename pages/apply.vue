<template>
    <div>
      <Header />
      <main>
        <h1>{{ $t('nav.downloads') }}</h1>
        <section>
          <h2>产品手册下载</h2>
          <ul>
            <li><a href="#">产品手册.pdf</a></li>
          </ul>
        </section>
        <section>
          <h2>技术文档下载</h2>
          <ul>
            <li><a href="#">技术文档.pdf</a></li>
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
  