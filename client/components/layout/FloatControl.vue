<template>
  <div v-show="!store.isLoading"
       class="login flex flex-row align-middle justify-center fixed top-1.5 right-1.5 md:right-24 md:top-12 z-10">
    <ThemeToggle class="ml-2"/>
    <button class="signup btn ml-2">
      Sign Up
    </button>
    <button class="signin btn ml-2">
      Sign In
    </button>
  </div>
</template>

<script setup lang="ts">
import {useMainStore} from "~/store";

const store = useMainStore()
</script>

<style scoped>

</style>