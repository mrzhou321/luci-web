<template>
    <div>
      <Header />
      <main>
        <h1>{{ $t('nav.services') }}</h1>
        <section>
          <h2>常见问题</h2>
          <ul>
            <li>如何选择合适的混凝土外加剂？</li>
            <li>产品的储存和使用注意事项。</li>
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
  