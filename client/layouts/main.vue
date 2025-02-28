<template>
  <Loader/>
  <div v-show="!store.isLoading" class="image-background"/>
  <main v-show="!store.isLoading">
    <slot/>
  </main>

  <footer v-show="!store.isLoading" class="footer">
    <div class="content">
      <div class="container-fluid p-0">
        <div class="flex flex-col flex-wrap">
          <div class="flex flex-col items-center">
            <div class="flex">123</div>
            <div class="flex">456</div>
            <div class="flex">789</div>
          </div>
          <div class="flex flex-row justify-between">
            <div class="flex text-7xl">정자동 펭귄마을</div>
            <div class="flex">abc</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Loader from '@/components/Loader.vue'
import {useMainStore} from "~/store";

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
  /* background-image: url('https://mixdesign.club/themeforest/braxton/img/demo/1920x1080-bg.webp'); */
}

.footer {
  background-color: var(--color-background);
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  background-size: 250%;
}

.footer .content {
  position: relative;
  padding: 0 1.5rem;
  text-align: center;
  font-family: var(--font-family-content);
}

@media only screen and (min-width: 1200px) {
  .footer {
    background-size: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .footer {
    background-size: 150%;
  }

  .footer .content {
    padding: 0 6rem;
  }
}

</style>