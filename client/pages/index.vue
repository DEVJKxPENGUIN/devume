<template>
  <div class="text-3xl">HELLO WORLD!!</div>

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

</style>