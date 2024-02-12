import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL

export const useUserStore = defineStore('User', {
  actions: {
    // create user
    async register(firstName, lastName, email, password) {
      const newUser = await axios.post('/users', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        type: 'customer'
      })
      return newUser.data
    },
    async fetchCart(userId) {
      const cart = await axios.get(`/users/${userId}/cart`)
      return cart.data
    },
    async addItemToCart(userId, productId, quantity) {
      await axios.post(`/users/${userId}/cart/items`, { productId, quantity })
    }
  }
})
