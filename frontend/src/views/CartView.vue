<script>
import { useUserStore } from '@/stores/user'
import { useAccountStore } from '@/stores/account'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'CartView',
  data() {
    return {
      cart: []
    }
  },
  computed: {
    ...mapState(useAccountStore, ['user'])
  },
  methods: {
    ...mapActions(useUserStore, ['fetchCart'])
  },
  async mounted() {
    this.cart = await this.fetchCart(this.user._id)
  }
}
</script>
<template>
  <div class="cart">
    <h1>Cart</h1>
    <div class="container text-center">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3">
        <div class="col g-4" v-for="product in cart" :key="product._id">
          <div class="card">
            <img :src="product.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="card-text">{{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
