import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = import.meta.env.VITE_API_URL

// options api implementation
export const useAccountStore = defineStore('Account', {
  state: () => ({
    user: null
  }),
  actions: {
    // get user session
    async fetchUser() {
      this.user = (await axios.get('/accounts/session')).data
    },
    // user login (find or create session)
    async login(email, password) {
      this.user = (
        await axios.post('/accounts/session/', {
          email: email,
          password: password
        })
      ).data
    },
    // user logout (delete session)
    async logout() {
      await axios.delete('/accounts/session')
      this.user = null
    }
  }
})

// options api implementation
// export const useAccountStore = defineStore('Account', {
//   state: () => {
//     return { count: 0 }
//   },
//   getters: {
//     doubleCount: (state) => state.count * 2
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//     decrement() {
//       this.count--
//     }
//   }
// })
