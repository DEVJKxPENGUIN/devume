<template>
  <div v-show="!store.isLoading"
       class="login flex flex-row z-10">
    <ThemeToggle class="ml-2"/>
    <button class="signup btn ml-2">
      Sign Up
    </button>
    <button class="signin btn ml-2">
      Sign In
    </button>
  </div>
</template>

<script setup lang="ts">
import {useMainStore} from "~/store";

const store = useMainStore()
</script>

<style scoped>
.login {
  color: var(--font-color-normal);
  right: 1.5rem;
  top: 1.5rem;
  position: fixed;
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

/* floating button */
.btn {
  width: 40px;
  height: 32px;
  border: 1px solid var(--color-background-reverse);
  border-radius: 6px;
  font-family: var(--font-family-subtitle);
  font-weight: 400;
  font-size: medium;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.btn {
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn:hover {
  background: var(--color-background-reverse);
  color: var(--color-second);
}

.btn:active {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .3),
  -4px -4px 6px 0 rgba(116, 125, 136, .2),
  inset -4px -4px 6px 0 rgba(255, 255, 255, .2),
  inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
}

@-webkit-keyframes shiny-btn1 {
  0% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  80% {
    -webkit-transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }
  81% {
    -webkit-transform: scale(4) rotate(45deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(50) rotate(45deg);
    opacity: 0;
  }
}

@media only screen and (min-width: 640px) {
  .btn {
    width: 62px;
    height: 32px;
    border: 1px solid var(--color-background-reverse);
    border-radius: 6px;
    font-family: var(--font-family-subtitle);
    font-weight: 400;
    font-size: large;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .btn {
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .btn:hover {
    background: var(--color-background-reverse);
    color: var(--color-second);
  }

  .btn:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, .3),
    -4px -4px 6px 0 rgba(116, 125, 136, .2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, .2),
    inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
  }

  @-webkit-keyframes shiny-btn1 {
    0% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0;
    }
    80% {
      -webkit-transform: scale(0) rotate(45deg);
      opacity: 0.5;
    }
    81% {
      -webkit-transform: scale(4) rotate(45deg);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(50) rotate(45deg);
      opacity: 0;
    }
  }
}
</style>