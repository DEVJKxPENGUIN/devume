<template>
  <Intro />
  <LivePreview />
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import {ApiHandler} from "~/common/apiHandler";
import LivePreview from "~/components/pages/index/LivePreview.vue";
import Intro from "~/components/pages/index/Intro.vue";

definePageMeta({
  layout: 'main'
})

// sample fetching data on server side
const ssrData = await useFetch('/api/user')
const hello = ssrData.data.value?.hello

onMounted(async () => {
  // sample fetching data on client side
  const data = await ApiHandler.getMock()
  console.log(data)

})


</script>

<style scoped>

</style>

