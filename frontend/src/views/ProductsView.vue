<script setup>
// composition API
import axios from 'axios'

const productsResponse = await axios.get('http://localhost:3000/products') // top level await

const products = productsResponse.data
</script>

<template>
  <div class="products">
    <h1>Bouquets</h1>
    <ul>
      <li v-for="product in products" :key="product._id">
        <a :href="`/products/${products._id}`">
          {{ product.title }}
        </a>
        {{ product.description }} for {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: rgb(248, 246, 243);
}
a {
  color: green;
}
</style>
