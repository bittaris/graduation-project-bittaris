<script setup>
// composition API
import axios from 'axios'
import BouquetItem from '@/components/BouquetItem.vue'

const productsResponse = await axios.get('/products') // top level await

const products = productsResponse.data
</script>

<template>
  <div class="products">
    <h1>Bouquets</h1>
    <div class="container text-center">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
        <div class="col g-4" v-for="product in products" :key="product._id">
          <BouquetItem :product="product" />
          <!-- <RouterLink :to="`/products/${product._id}`">{{ product.title }}</RouterLink>
        {{ product.description }} for {{ product.price }} -->
        </div>
      </div>
    </div>
    <footer>
      <h2>Looking for a specific type of flower or bouquet? Reach out to us directly!</h2>
    </footer>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.5rem;
  margin: 3rem 0 2rem 5rem;
  color: rgb(251, 222, 251);
}

h2 {
  font-size: 1rem;
  margin: 2rem 0 2rem 0;
  color: rgb(252, 239, 252);
  text-align: center;
}
a {
  color: rgb(20, 145, 0);
}
.btn {
  background-color: rgb(20, 145, 0);
  border-color: rgb(20, 145, 0);
  color: white;
}

img {
  height: 300px;
}
</style>
