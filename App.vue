<template>
  <UApp :locale="locales[locale]">
    <NuxtPage />
  </UApp>
</template>

<script lang="ts" setup>
import * as locales from '@nuxt/ui/locale'
import {useHead} from "nuxt/app";
const { locale, t } = useI18n()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${t('company.name')}` : t('company.name');
  }
})
</script>

<style lang="scss" scoped>

</style>
