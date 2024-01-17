<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '@/stores/counter'

export default {
  name: 'Counter',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  computed: {
    ...mapState(useCounterStore, ['count'])
  },
  methods: {
    ...mapActions(useCounterStore, ['increment', 'decrement'])
    //   increment() {
    //     this.count++
    //   },
    //   decrement() {
    //     this.count--
    //   }
    // }
  }
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
  font-size: 1rem;
  margin-top: 1rem;
  color: rgb(248, 246, 243);
}
</style>
