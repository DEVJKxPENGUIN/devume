<template>
  <div
    ref="target"
    class="relative flex flex-col items-center justify-center w-full min-h-screen p-4 overflow-hidden bg-background text-primary-text"
  >
    <div
      class="absolute inset-0 w-full h-full bg-gradient-to-br from-background via-indigo-900/30 to-background"
    ></div>

    <div
      :style="cardStyle"
      class="relative z-10 w-full max-w-4xl p-8 transition-all duration-300 ease-out transform bg-gray-900/50 rounded-3xl ring-1 ring-white/10 backdrop-blur-sm"
    >
      <div
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000, delay: 300 } }"
        class="text-center"
      >
        <h1 class="text-5xl font-bold md:text-7xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-secondary-accent to-accent">
            박종권
          </span>
          입니다.
        </h1>
        <p class="mt-4 text-lg md:text-2xl text-primary-text/80">
          시니어 소프트웨어 엔지니어 | Devops | Infrastructure
        </p>
        <p class="max-w-2xl mx-auto mt-6 text-base md:text-lg text-primary-text/60">
          사용자 중심의 안정적이고 확장 가능한 웹 서비스를 만듭니다.
          <br />
          새로운 기술을 배우고 적용하는 것을 즐깁니다.
        </p>
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
          프로젝트 보기
        </button>
        <button
          class="relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium transition-all duration-300 border-2 rounded-full border-muted text-primary-text/80 hover:bg-muted hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-muted"
        >
          연락하기
        </button>
      </div>
    </div>

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
import { ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import { computed } from 'vue'

const target = ref(null)

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)

const cardTransform = computed(() => {
  if (isOutside.value) {
    return ''
  }

  const MAX_ROTATION = 6

  const rX = (
    MAX_ROTATION * 2 * (elementY.value / elementHeight.value - 0.5)
  ).toFixed(2)

  const rY = (
    MAX_ROTATION * -2 * (elementX.value / elementWidth.value - 0.5)
  ).toFixed(2)

  return `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg)`
})

const cardStyle = computed(() => ({
  transform: cardTransform.value,
  transition: 'transform 0.25s ease-out',
}))
</script>

<style scoped>
/* Scoped styles can be added here if needed */
</style>
