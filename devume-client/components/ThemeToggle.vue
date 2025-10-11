<template>
  <div class="card_toggle">
    <input
      v-model="isDark"
      class="themeToggle"
      type="checkbox"
      @change="store.toggleTheme"
    >
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/store';
import { computed } from 'vue';

const store = useMainStore();

const isDark = computed({
  get: () => store.theme === 'dark',
  set: (value) => {
    store.theme = value ? 'dark' : 'light';
  }
});
</script>


<style scoped>
.themeToggle {
  appearance: none;
  width: 62px;
  height: 32px;
  display: inline-block;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  outline: none;
  border: 1px solid var(--color-muted);
  cursor: pointer;
  background-color: var(--color-background);
  transition: background-color ease 0.3s;
}

.themeToggle::before {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>');
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  width: 24px;
  height: 24px;
  background: var(--color-muted);
  left: 3px;
  top: 3px;
  border-radius: 50%;
  color: var(--color-primary-text);
  transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
}

.themeToggle:checked {
  border-color: var(--color-accent);
}

.themeToggle:checked::before {
  left: 32px;
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>');
  background: var(--color-accent);
}
</style>