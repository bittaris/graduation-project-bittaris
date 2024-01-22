import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

export const socket = io('http://localhost:3000')

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
    }
  }
})
