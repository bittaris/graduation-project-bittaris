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
    ...mapActions(useUserStore, ['fetchCart', 'removeItemFromCart']),
    removeItem(productId) {
      this.removeItemFromCart(this.user._id, productId, 1)
    }
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
        <div class="col g-4" v-for="item in cart" :key="item.product._id">
          <div class="card">
            <img :src="item.product.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ item.product.title }}</h5>
              <p class="card-text">{{ item.product.description }}</p>
              <p class="card-text">{{ item.product.price }}</p>
              <p class="card-text">{{ item.quantity }}</p>
            </div>
          </div>
        </div>
      </div>
      <RouterLink class="btn btn-primary" to="/checkout">Proceed to checkout</RouterLink>
    </div>
  </div>
</template>
<style scope>
h1 {
  font-size: 2rem;
  margin: 0 0 0 3rem;
}
.btn-primary {
  margin: 2rem 0rem 5rem 0rem;
  padding: 0.7rem 1.5rem 0.7rem 1.5rem;
}
</style>
