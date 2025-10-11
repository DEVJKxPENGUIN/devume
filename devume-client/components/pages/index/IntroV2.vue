<template>
  <div
    ref="target"
    class="relative flex flex-col items-center justify-center w-full min-h-screen p-4 overflow-hidden bg-background text-primary-text transition-colors duration-500"
  >
    <!-- Main Content -->
    <div
      :style="cardStyle"
      class="relative z-10 w-full max-w-4xl p-8 transition-all duration-300 ease-out transform"
    >
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 300 } }"
        class="text-center"
      >
        <div class="inline-flex items-center px-4 py-2 mb-4 text-sm border rounded-full border-accent/50 text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2" viewBox="0 0 13 13" fill="currentColor">
            <path d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8 C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7 C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"></path>
          </svg>
          <span>Show Who you are!</span>
        </div>

        <h1 class="text-5xl font-bold md:text-7xl text-primary-text">
          {{ title }}
        </h1>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 600 } }"
        class="flex flex-col items-center justify-center mt-10 sm:flex-row gap-4"
      >
        <button
          class="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium transition-all duration-300 border-2 rounded-full border-accent text-accent hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
        >
          View Resumes
        </button>
        <button
          class="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium transition-all duration-300 border-2 rounded-full border-muted text-primary-text/80 hover:bg-muted hover:text-primary-text focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-muted"
        >
          Write Now
        </button>
      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <div
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 900 } }"
      class="absolute bottom-8 text-sm text-primary-text/40 animate-pulse"
    >
      Scroll Down
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMouseInElement } from '@vueuse/core'

defineProps({
  phase: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

const target = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const cardTransform = computed(() => {
  if (isOutside.value) {
    return ''
  }
  const MAX_ROTATION = 6
  const rX = (MAX_ROTATION * 2 * (elementY.value / elementHeight.value - 0.5)).toFixed(2)
  const rY = (MAX_ROTATION * -2 * (elementX.value / elementWidth.value - 0.5)).toFixed(2)
  return `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`
})

const cardStyle = computed(() => ({
  transform: cardTransform.value,
  transition: 'transform 0.25s ease-out',
}))
</script>