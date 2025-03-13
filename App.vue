<template>
  <UApp :locale="locales[locale]">
    <NuxtPage />
  </UApp>
</template>

<script lang="ts" setup>
import * as locales from '@nuxt/ui/locale'
const { locale } = useI18n()
</script>

<style lang="scss" scoped>

</style>
