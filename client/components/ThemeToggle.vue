<template>
  <div class="card_toggle">
    <input class="themeToggle" type="checkbox">
  </div>
</template>

<script setup lang="ts">

</script>


<style scoped>
.themeToggle {
  appearance: none;
  width: 32px;
  height: 32px;
  display: inline-block;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  outline: none;
  border: 1px solid var(--color-background-reverse);
  cursor: pointer;
  background: transparent;
  transition: background-color ease 0.3s;
}

.themeToggle::before {
  content: url('https://shivanarrthine.com/public/images/icons/moon.svg');
  display: block;
  position: absolute;
  z-index: 2;
  width: 24px;
  height: 24px;
  background: var(--color-second);
  left: 3px;
  top: 3px;
  border-radius: 50%;
  text-indent: 4px;
  line-height: 32px;
  word-spacing: 37px;
  color: black;
  white-space: nowrap;
  transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
}

.themeToggle:checked {
  background-color: transparent;
  border-color: var(--color-background-reverse);
}

.themeToggle:checked::before {
  content: url('https://shivanarrthine.com/public/images/icons/sun.svg');
  background: var(--color-first);
}

@media only screen and (min-width: 640px) {
  .themeToggle {
    appearance: none;
    width: 62px;
    height: 32px;
    display: inline-block;
    position: relative;
    border-radius: 50px;
    overflow: hidden;
    outline: none;
    border: 1px solid var(--color-background-reverse);
    cursor: pointer;
    background: transparent;
    transition: background-color ease 0.3s;
  }

  .themeToggle::before {
    content: url('https://shivanarrthine.com/public/images/icons/moon.svg');
    display: block;
    position: absolute;
    z-index: 2;
    width: 24px;
    height: 24px;
    background: var(--color-second);
    left: 3px;
    top: 3px;
    border-radius: 50%;
    text-indent: 4px;
    line-height: 32px;
    word-spacing: 37px;
    color: black;
    white-space: nowrap;
    transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
  }

  .themeToggle:checked {
    background-color: transparent;
    border-color: var(--color-background-reverse);
  }

  .themeToggle:checked::before {
    left: 32px;
    content: url('https://shivanarrthine.com/public/images/icons/sun.svg');
    background: var(--color-first);
  }
}
</style>