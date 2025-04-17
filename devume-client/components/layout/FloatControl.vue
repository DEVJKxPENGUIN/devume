<template>
  <div v-show="!store.isLoading"
       class="login flex flex-row z-10">
    <ThemeToggle class="ml-2"/>
    <ButtonDefault text="Sign Up" class="ml-2 md:ml-3"/>
    <ButtonDefault text="Sign In" class="ml-2 md:ml-3"/>
  </div>
</template>

<script setup lang="ts">
import {useMainStore} from "~/store";
import ButtonDefault from "~/components/ButtonDefault.vue";

const store = useMainStore()
</script>

<style scoped>
.login {
  color: var(--font-color-normal);
  right: 1rem;
  top: 1rem;
  position: absolute;
}

@media only screen and (min-width: 768px) {
  .login {
    top: 3rem;
    right: 6rem;
  }
}

@media only screen and (min-width: 1280px) {
  .login {
    right: 6rem;
  }
}

</style>