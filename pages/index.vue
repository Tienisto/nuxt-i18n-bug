<template>
  <div>
    The current locale is <strong>{{ locale }}</strong>.
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
