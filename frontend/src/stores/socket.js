import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

export const socket = io('http://localhost:3000', {
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
      socket.on('number of visits', (numberOfVisits) => {
        console.log('number of visits', numberOfVisits)
      })
    }
  }
})
