import { defineStore } from 'pinia'
import axios from 'axios'
import { useAccountStore } from './account'

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
      await axios.post(`/users/${userId}/cart/products`, { productId, quantity })
    },
    async removeItemFromCart(userId, productId, quantity) {
      await axios.delete(`/users/${userId}/cart/products/${productId}`, { data: { quantity } })
    },
    async emptyCart(userId) {
      // const accountStore = useAccountStore()
      // const userId = accountStore.user._id
      await axios.delete(`/users/${userId}/cart`)
    }
  }
})
