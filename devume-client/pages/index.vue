<template>
  <Intro />
  <LivePreview />
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import {ApiHandler} from "~/common/apiHandler";
import LivePreview from "~/components/pages/index/LivePreview.vue";
import Intro from "~/components/pages/index/Intro.vue";
import type {HelloResponse} from "~/.proto/HelloResponse";

definePageMeta({
  layout: 'main'
})

// sample fetching data on server side
const ssr = await useFetch('/api/user')
const hello = ssr.data.value as HelloResponse

console.log('SSR FETCH', hello)

// sample fetching data on client side
onMounted(async () => {
  const data = await ApiHandler.getMock()
  console.log(data)

})


</script>

<style scoped>

</style>

