<template>
  <header class="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-background/70 backdrop-blur-sm">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="~/assets/img/logo.png" alt="logo" class="w-8 h-8 sm:w-10 sm:h-10" />
          <p class="ml-2 text-lg sm:text-xl font-bold text-primary-text font-mono">DEVUME</p>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center space-x-2 sm:space-x-4">
          <button class="px-4 py-2 text-sm sm:text-base font-medium transition-colors duration-300 rounded-full text-primary-text/80 hover:text-primary-text hover:bg-muted/50">
            Sign In
          </button>
          <button class="px-4 py-2 text-sm sm:text-base font-medium text-white transition-colors duration-300 rounded-full bg-accent hover:bg-accent/80">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// No script needed for this component
</script>

<style scoped>
/* Scoped styles can be added here if needed */
</style>
