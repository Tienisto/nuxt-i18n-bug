<template>
  <div>
    <span v-if="locale === 'de'" style="font-weight: bold;">DE</span>
    <NuxtLink v-else :to="switchLocalePath('de')">DE</NuxtLink>
    /
    <span v-if="locale === 'en'" style="font-weight: bold;">EN</span>
    <NuxtLink v-else :to="switchLocalePath('en')">EN</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>
