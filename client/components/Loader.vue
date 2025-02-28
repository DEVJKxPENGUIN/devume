<template>
  <div class="loader" v-show="store.isLoading">
    <div class="content">
      <div class="shadow"></div>
      <div class="box animate-bounce"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useMainStore} from "~/store";
const store = useMainStore()
</script>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  transition: all 0.3s ease-in-out;
}

.loader .content {
  position: absolute;
  top: 50%;
  left: 50%;
  bottom: auto;
  right: auto;
  transform: translateX(-50%) translateY(-50%);
  width: 40px;
  height: 40px;
}

.loader .shadow {
  width: 40px;
  height: 5px;
  background-color: var(--color-fourth);
  position: absolute;
  top: 49px;
  left: 0;
  border-radius: 50%;
  animation: shadow 0.5s linear infinite;
}

.loader .box {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--color-first) 0%, var(--color-second) 100%);
  border-radius: 10px;
}
</style>