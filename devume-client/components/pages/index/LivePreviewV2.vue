<template>
  <div class="bg-background transition-colors duration-500">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 300 } }"
        class="text-center mb-12"
      >
        <h2 class="text-4xl sm:text-5xl font-bold text-primary-text">Live Previews</h2>
        <p class="mt-4 text-lg text-primary-text/70">다른 개발자들의 이력서를 구경해보세요.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="i in 6"
          :key="i"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 * i } }"
          class="p-6 border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-background/60 border-muted/50"
        >
          <div class="h-40 mb-4 rounded-lg bg-muted/50 animate-pulse"></div>
          <h3 class="text-2xl font-bold text-primary-text">Resume Title {{ i }}</h3>
          <p class="mt-2 text-primary-text/70">
            This is a brief description of the resume. You can see the full version by clicking on it.
          </p>
          <div class="flex items-center mt-4">
            <div class="w-8 h-8 rounded-full bg-muted/50 animate-pulse"></div>
            <p class="ml-2 text-sm text-primary-text/50">by User {{ i }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for this static example
</script>

<style scoped>
/* Scoped styles can be added here if needed */
</style>
