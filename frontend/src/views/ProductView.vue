<script>
import axios from 'axios'

export default {
  name: 'ProductDetail',
  data() {
    return {
      product: {}
    }
  },
  async created() {
    console.log(this.$route.params._id)
    const { data: product } = await axios.get(
      `http://localhost:3000/products/${this.$route.params._id}`
    )
    this.product = product
  }
}
</script>

<template>
  <div class="product">
    <h1>{{ product.title }}</h1>
    <p>{{ product.description }}</p>
    for
    <p>{{ product.price }}</p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: rgb(248, 246, 243);
}
</style>
