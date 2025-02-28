import {defineStore} from "pinia";

export const useMainStore = defineStore('main', {
  state: () => ({
    isLoading: true
  }),
  actions: {
    startLoading() {
      console.log('start loading...')
      this.isLoading = true
    },
    stopLoading() {
      console.log('stop loading...')
      this.isLoading = false
    },
  }
})