import { defineStore } from 'pinia'
import axios from 'axios'

// options api implementation
export const useAccountStore = defineStore('Account', {
  state: () => ({
    user: null
  }),
  actions: {
    async fetchUser() {
      this.user = (
        await axios.get('http://localhost:3000/accounts/session', {
          withCredentials: true
        })
      ).data
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
