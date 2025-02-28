import {useMainStore} from "~/store";

export const ApiHandler = {
  getMock: async () => {
    return new Promise((resolve) => {
      const store = useMainStore()
      store.startLoading()
      setTimeout(() => {
        store.stopLoading()
        resolve({data: 'mock data'})
      }, 2000)
    })
  }


}
