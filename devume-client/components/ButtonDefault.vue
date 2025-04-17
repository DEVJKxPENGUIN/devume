<template>
  <button :class="props.type">
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
import {BTN_TYPES} from "~/common/commons";

const props = defineProps({
  text: String,
  type: {
    type: String,
    default: BTN_TYPES.NORMAL
  }
})

</script>

<style scoped>

/* floating button */
.normal {
  width: 40px;
  height: 32px;
  box-shadow: 0 0 0 0.2px var(--color-background-reverse);
  border-radius: 6px;
  font-family: var(--font-family-content);
  font-weight: 400;
  font-size: xx-small;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.normal {
  overflow: hidden;
  transition: all 0.3s ease;
}

.normal:hover {
  background: var(--color-background-reverse);
  color: var(--color-second);
}

.normal:active {
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
  .normal {
    width: 62px;
    height: 32px;
    box-shadow: 0 0 0 0.2px var(--color-background-reverse);
    border-radius: 6px;
    font-family: var(--font-family-content);
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

  .normal {
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .normal:hover {
    background: var(--color-background-reverse);
    color: var(--color-second);
  }

  .normal:active {
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

/* large */

.large {
  width: 100%;
  height: 48px;
  box-shadow: 0 0 0 0.2px var(--color-background-reverse);
  border-radius: 6px;
  font-family: var(--font-family-content);
  font-weight: 400;
  font-size: large;
  background: transparent;
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.large {
  overflow: hidden;
  transition: all 0.3s ease;
}

.large:hover {
  background: var(--color-background-reverse);
  color: var(--color-second);
}

.large:active {
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
  .large {
    width: 160px;
    height: 48px;
    /*border: 1px solid var(--color-background-reverse);*/
    box-shadow: 0 0 0 0.2px var(--color-background-reverse);
    border-radius: 6px;
    font-family: var(--font-family-content);
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

  .large {
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .large:hover {
    background: var(--color-background-reverse);
    color: var(--color-second);
  }

  .large:active {
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

.accent {
  background: var(--font-color-bold);
  background: -webkit-linear-gradient(15deg, var(--color-second) 0%, var(--color-first) 80%);
}
</style>