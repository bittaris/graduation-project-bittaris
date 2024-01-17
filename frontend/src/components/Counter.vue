<script setup>
import { ref } from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  }
})

const count = ref(0)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}
</script>

<template>
  <div>
    <h1>{{ name }}</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  margin-top: 1rem;
  color: rgb(248, 246, 243);
}
