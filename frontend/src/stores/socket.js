import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

const URL = import.meta.env.VITE_API_URL

// With Credentials means that the client will send the cookies to the server
export const socket = io(URL, {
  withCredentials: true
})

// options api implementation
export const useSocketStore = defineStore('Socket', {
  state: () => ({
    connected: false
  }),
  actions: {
    init() {
      socket.on('connect', () => {
        this.connected = true
        console.log('socket connected')
      })
      socket.on('disconnect', () => {
        this.connected = false
        console.log('socket disconnected')
      })
      // Will automatically log the incrementing number of visits
      socket.on('number of visits', (numberOfVisits) => {
        console.log('number of visits', numberOfVisits)
      })
    }
  }
})
