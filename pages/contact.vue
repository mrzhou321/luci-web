<template>
    <div>
      <Header />
      <main>
        <h1>{{ $t('nav.contact') }}</h1>
        <address>
          <p>{{ $t('contact.address') }}</p>
          <p>Tel: {{ $t('contact.phone') }}</p>
          <p>Email: <a :href="`mailto:${$t('contact.email')}`">{{ $t('contact.email') }}</a></p>
        </address>
      </main>
      <Footer />
    </div>
  </template>
  
  <script lang="ts" setup>
   import Header from '~/components/Header.vue'
   import Footer from '~/components/Footer.vue'
  </script>
  