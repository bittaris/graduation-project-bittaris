<script>
import { mapActions } from 'pinia'
import { useProductStore } from '@/stores/product'

export default {
  name: 'ProductDetail',
  data() {
    return {
      product: {}
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
