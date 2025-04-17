<template>
  <div class="live-preview">
    <div class="content">
      <div class="container-fluid p-0">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          <div class="item" v-for="i in 6" :key="i">
            <h1 class="text-4xl font-bold">Live Preview</h1>
            <p class="text-lg">This is a live preview of the website.
              website here.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.live-preview {
  position: relative;
  padding: 7rem 0 10rem 0;
}

.content {
  position: relative;
  padding: 0;
}

@media only screen and (min-width: 768px) {
  .live-preview {
    padding: 9rem 0 12rem 0;
  }

  .content {
    padding: 0 4.5rem;
  }
}
</style>