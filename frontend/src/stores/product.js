import { defineStore } from 'pinia'
import axios from 'axios'

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
