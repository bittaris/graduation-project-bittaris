<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

// import { ref } from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  }
})

// const count = ref(0)

// const increment = () => {
//   count.value++
// }

// const decrement = () => {
//   count.value--
// }
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <p>Count: {{ counter.count }}</p>
    <button @click="counter.increment">Increment</button>
    <button @click="counter.decrement">Decrement</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  margin-top: 1rem;
  color: rgb(248, 246, 243);
}
