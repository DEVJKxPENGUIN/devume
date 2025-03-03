<template>
  <footer v-show="!store.isLoading" class="footer">
    <div class="content backdrop-blur-md">
      <div class="flex flex-col">
        <div class="flex flex-col font-color-light font-light">
          <div class="flex justify-center">
            <img class="w-40 h-40 invert" src="../../assets/img/penguin.svg" alt="penguin"/>
          </div>
          <div class="flex justify-center">
            Elevate your career with devume. Craft a resume that showcases your expertise.
          </div>
          <div class="flex flex-col sm:flex-row justify-center">
            <div class="flex justify-center">
              For inquiries, contact : &nbsp;
            </div>
            <div class="flex justify-center">
              <a class="animate-text-hover-default font-color-normal font-medium"
                 href="mailto://rmsghk4254@naver.com">rmsghk4254@naver.com</a>
            </div>

          </div>
          <div class="flex justify-center">
            Innovate your job search.
          </div>
        </div>
        <div class="flex flex-col sm:flex-row justify-between font-color-light pt-10">
          <div><b>PenguinTribe</b> in JJD</div>
          <div>Made with ♡ by <b>D</b>evjk</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {useMainStore} from "~/store";

const store = useMainStore()

</script>

<style scoped>
.footer {
  background-color: var(--color-background);
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  background-size: 250%;
}

.footer .content {
  position: relative;
  padding: 0 1.5rem;
  text-align: center;
  font-family: var(--font-family-content);
}

@media only screen and (min-width: 1200px) {
  .footer {
    background-size: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .footer {
    background-size: 150%;
  }

  .footer .content {
    padding: 0 6rem;
  }
}

</style>