<template>
  <section class="intro">
    <div class="intro-header">
      <div class="flex header-container">
        <div class="flex hover:cursor-pointer">
          <div class="logo-img mr-4">
            <img src="~/assets/img/logo.png" alt="logo"/>
          </div>
          <div class="logo text-center align-middle justify-center h-full text-5xl">
            <p>DEVUME</p>
          </div>
        </div>
      </div>
    </div>
    <div class="intro-content">
      <div class="headline">
        <p class="subtitle">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px"
               viewBox="0 0 13 13" fill="currentColor">
            <path fill="currentColor" d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
                  C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
                  C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"></path>
          </svg>
          <span class="ml-2">Show Who you are!</span>
        </p>
        <h1 class="title">
          Your Next Career Starts Here
        </h1>
        <div class="btn-holder flex flex-col sm:flex-row">
          <ButtonDefault text="View Resumes" :type="BTN_TYPES.LARGE_ACCENT"/>
          <ButtonDefault text="Write Now" :type="BTN_TYPES.LARGE" class="mt-3 sm:mt-0 sm:ml-3"/>
        </div>
      </div>
      <div class="marquee">
        <div class="inner">
          <div class="part">
            DEVUME is a platform for developers to showcase their skills and get hired by top companies.
          </div>
          <div class="part">
            DEVUME is a platform for developers to showcase their skills and get hired by top companies.
          </div>
          <div class="part">
            DEVUME is a platform for developers to showcase their skills and get hired by top companies.
          </div>
          <div class="part">
            DEVUME is a platform for developers to showcase their skills and get hired by top companies.
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script setup lang="ts">
import {definePageMeta} from "#imports";
import {ApiHandler} from "~/common/apiHandler";
import {BTN_TYPES} from "~/common/commons";

definePageMeta({
  layout: 'main'
})

onMounted(async () => {
  // sample fetching data on client side
  const data = await ApiHandler.getMock()
  console.log(data)


})


</script>

<style scoped>
.intro {
  position: relative;
  width: 100%;
  min-width: 360px;
  overflow: hidden;
}

.intro-header {
  position: relative;
  padding: 1rem 0;
}

.intro-content {
  position: relative;
  padding-top: 8.5rem;
}

.header-container {
  padding: 0 1rem;
}

.headline {
  position: relative;
  padding: 0 1rem;
  margin-bottom: 10rem;
}

.marquee {
  position: relative;
  height: 3rem;
  line-height: 3rem;
  background: linear-gradient(135deg, var(--color-first) 0%, var(--color-second) 100%);
  color: var(--font-color-light);
  font-size: 1.6rem;
  overflow: hidden;
  z-index: 2;
}

.marquee .inner {
  display: flex;
  width: fit-content;
  flex-direction: row;
  flex: auto;
}

.marquee .part {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.headline .subtitle {
  display: inline-flex;
  align-items: center;
  height: 2rem;
  padding: 0 1rem;
  border-radius: 12px;
  border: 1px solid var(--color-first);
  background-color: transparent;
  backdrop-filter: blur();
  font-family: var(--font-family-subtitle);
  margin-bottom: 1rem;
}

.headline .title {
  font: normal 700 3.8rem / 1.2 var(--font-family-title);
  color: var(--font-color-bold);
  background: var(--font-color-bold);
  background: -webkit-linear-gradient(15deg, var(--font-color-accent) 0%, var(--font-color-light) 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.headline .btn-holder {
  width: 100%;
  margin-top: 2rem;
}

.logo-img {
  width: 3rem;
  height: 3rem;
}

.logo {
  color: var(--font-color-normal);
  height: 3rem;
}

@media only screen and (min-width: 1280px) {
  .intro {
    height: 100vh;
  }

  .intro-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 0;
  }

  .header-container {
    padding: 0 6rem;
  }

  .headline {
    position: absolute;
    left: 0;
    top: 50%;
    bottom: auto;
    transform: translateY(-50%);
    margin-bottom: 0;
    z-index: 2;
  }

  .headline .subtitle {
    margin-bottom: 1.7rem;
  }

  .headline .title {
    font-size: 6rem;
  }

  .headline .btn-holder {
    margin-top: 4.6rem;
    padding-bottom: 5rem;
  }

  .marquee {
    position: absolute;
    bottom:0;
    left: 0;
  }
}

@media only screen and (min-width: 768px) {
  .intro-header {
    padding: 3rem 0;
  }

  .intro-content {
    padding-top: 9rem;
  }

  .header-container {
    padding: 0 6rem;
  }

  .headline {
    padding: 0 6rem;
    margin-bottom: 12rem;
  }

  .headline .subtitle {
    margin-bottom: 1.4rem;
  }

  .headline .title {
    font-size: 5rem;
    max-width: 600px;
  }

  .headline .btn-holder {
    margin-top: 4.6rem;
  }
}
</style>