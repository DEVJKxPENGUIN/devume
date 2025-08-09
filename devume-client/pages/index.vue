<template>
  <Intro :phase="phase" :title="title"/>
  <LivePreview/>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import {ApiHandler} from "~/common/apiHandler";
import LivePreview from "~/components/pages/index/LivePreview.vue";
import Intro from "~/components/pages/index/Intro.vue";
import {getPhase} from "~/common/commons";
import type {TitleResponse} from "~/.proto/TitleResponse";

definePageMeta({
  layout: 'main'
})

// sample fetching data on server side
const fetch = await useFetch('/api/title')
const titleResponse = fetch.data.value as TitleResponse
// const title = titleResponse.title as string
const title = 'dsfkj'

const phase = getPhase()

console.log('SSR TITLE', titleResponse)
// console.log('SSR TITLE', title)
console.log('Phase:', phase)

// sample fetching data on client side
onMounted(async () => {
  const data = await ApiHandler.getMock()
  console.log(data)
})


</script>

<style scoped>

</style>

