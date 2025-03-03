<template>
  <section class="intro">
    <div class="intro-header">
      <div class="flex header-container">
        <div class="flex w-full">
          <div class="logo-img mr-2">
            <img src="~/assets/img/logo.png" alt="logo"/>
          </div>
          <div class="logo text-center align-middle justify-center h-full text-5xl">
            <p>DEVUME</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import {ApiHandler} from "~/common/apiHandler";

definePageMeta({
  layout: 'main'
})

onMounted(async () => {
  // sample fetching data on client side
  const data = await ApiHandler.getMock()
  console.log(data)


})


</script>

<style scoped>
.intro {
  position: relative;
  width: 100%;
  min-width: 360px;
  overflow: hidden;
}

.intro-header {
  position: relative;
  padding: 1.5rem 0;
}

.header-container {
  padding: 0 1.5rem;
}

.logo-img {
  width: 3rem;
  height: 3rem;
}

.logo {
  color: var(--font-color-normal);
  height: 3rem;
}

@media only screen and (min-width: 1280px) {
  .intro {
    height: 100vh;
  }

  .header-container {
    padding: 0 6rem;
  }
}

@media only screen and (min-width: 768px) {
  .intro-header {
    padding: 3rem 0;
  }

  .header-container {
    padding: 0 6rem;
  }
}
</style>