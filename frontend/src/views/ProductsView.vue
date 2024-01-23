<script setup>
// composition API
import axios from 'axios'

const productsResponse = await axios.get('/products') // top level await

const products = productsResponse.data
</script>

<template>
  <div class="products">
    <h1>Bouquets</h1>
    <ul>
      <li v-for="product in products" :key="product._id">
        <RouterLink :to="`/products/${product._id}`">{{ product.title }}</RouterLink>
        {{ product.description }} for {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1rem;
  margin-bottom: 1rem;
  color: rgb(248, 246, 243);
}
a {
  color: rgb(20, 145, 0);
}
</style>
