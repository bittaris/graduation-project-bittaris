<script>
import { mapActions } from 'pinia'
import { useProductStore } from '@/stores/product'

import CounterOptionsAPI from '@/components/CounterOptionsAPI.vue'

export default {
  name: 'ProductDetail',
  components: {
    CounterOptionsAPI
  },
  data() {
    return {
      product: {},
      counter1Name: 'Bouquet Counter 1',
      counter2Name: 'Bouquet Counter 2'
    }
  },
  async created() {
    this.product = await this.fetchProduct(this.$route.params._id)
  },
  methods: {
    ...mapActions(useProductStore, ['fetchProduct'])
  }
}
</script>

<template>
  <div>
    <CounterOptionsAPI :name="counter1Name" />
    <CounterOptionsAPI :name="counter2Name" />
  </div>
  <div class="product">
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }} for {{ product.price }}</p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  color: rgb(248, 246, 243);
}
</style>
