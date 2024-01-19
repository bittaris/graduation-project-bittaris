import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000'

export const useUserStore = defineStore('User', {
  actions: {
    // create user
    async register(username, firstName, lastName, email, password) {
      const newUser = await axios.post('/users', {
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
      return newUser.data
    }
  }
})
