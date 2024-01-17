<script>
import axios from 'axios'
import CounterOptionsAPI from '@/components/CounterOptionsAPI.vue'

export default {
  name: 'ProductDetail',
  components: {
    CounterOptionsAPI
  },
  data() {
    return {
      product: {}
    }
  },
  async created() {
    const { data: product } = await axios.get(
      `http://localhost:3000/products/${this.$route.params._id}`
    )
    this.product = product
  }
}
</script>

<template>
  <div>
    <CounterOptionsAPI :name="product.title" />
    <CounterOptionsAPI :name="product.title" />
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
