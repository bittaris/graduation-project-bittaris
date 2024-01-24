import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL

// options api implementation
export const useProductStore = defineStore('product', {
  // state: () => {
  //   return { product: null }
  // },

  actions: {
    async fetchProduct(_id) {
      const { data: product } = await axios.get(`/products/${_id}`)
      return product
    }
  }
})
