<template>
  <Loader/>
  <div v-show="!store.isLoading" class="image-background"/>
  <FloatControl/>
  <main v-show="!store.isLoading">
    <slot/>
  </main>
  <Footer/>
</template>

<script setup lang="ts">
import Loader from '@/components/Loader.vue'
import {useMainStore} from "~/store";
import Footer from "~/components/layout/Footer.vue";
import FloatControl from "~/components/layout/FloatControl.vue";

const store = useMainStore()
</script>

<style scoped>
.image-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110vh;
  overflow: hidden;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  /* fimxe - 이거 아래 사진 교체해야함. */
  opacity: 50%;
  background-image: url('assets/img/bg2.jpg');
  /*background-image: url('https://mixdesign.club/themeforest/braxton/img/demo/1920x1080-bg.webp');*/
}
</style>