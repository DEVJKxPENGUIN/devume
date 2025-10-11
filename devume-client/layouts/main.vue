<template>
  <div class="main mx-auto">
    <Loader/>
    <HeaderV2 />
    <FloatControlV2/>
    <main v-show="!store.isLoading" class="content">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Loader from '@/components/Loader.vue'
import {useMainStore} from "~/store";
import Footer from "~/components/layout/Footer.vue";
import FloatControlV2 from "~/components/layout/FloatControlV2.vue";
import HeaderV2 from "~/components/layout/HeaderV2.vue";

const store = useMainStore()
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  min-width: 360px;
}

.main {
  position: relative;
  max-width: 120rem;
}
</style>