<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store';
import { useHead } from '#imports';
import { computed } from 'vue';

const store = useMainStore();

// Use useHead for SSR-safe and optimal class management on <html>
useHead({
  htmlAttrs: {
    class: computed(() => store.theme === 'dark' ? 'dark' : '')
  }
})
</script>
