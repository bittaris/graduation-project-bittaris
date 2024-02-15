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
    ...mapActions(useUserStore, ['fetchCart', 'addItemToCart', 'removeItemFromCart']),
    async addItem(productId) {
      // this.addItemToCart(this.user._id, productId, 1)
      let item = this.cart.find((item) => item.product._id === productId)
      if (item) {
        item.quantity++
      }
      // Save the updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(this.cart))
      // Update cart on the server
      await this.addItemToCart(this.user._id, productId, 1)
    },

    async removeItem(productId) {
      // this.removeItemFromCart(this.user._id, productId, 1)
      let item = this.cart.find((item) => item.product._id === productId)
      if (item) {
        item.quantity--
        if (item.quantity === 0) {
          this.cart = this.cart.filter((item) => item.product._id !== productId)
        }
      }
      // Save the updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(this.cart))
      // Update cart on the server
      await this.removeItemFromCart(this.user._id, productId, 1)
    }
  },
  async mounted() {
    this.cart = await this.fetchCart(this.user._id)
  },
  created() {
    let savedCart = localStorage.getItem('cart')
    if (savedCart) {
      this.cart = JSON.parse(savedCart)
    }
  }
}
</script>
<template>
  <h1>Cart</h1>
  <div v-for="item in cart" :key="item.product._id">
    <div class="item-body">
      <h2 class="item-title">{{ item.product.title }}</h2>
      <h3 class="item-text">{{ item.product.description }}</h3>
      <p class="item-text">{{ item.product.price }}</p>
      <p class="item-text">
        <i @click="addItem(item.product._id)" type="button" aria-label="Plus">
          <i class="bi bi-plus-circle"></i>
        </i>
        {{ item.quantity }}
        <i @click="removeItem(item.product._id)" type="button" aria-label="Minus">
          <i class="bi bi-dash-circle"></i>
        </i>
      </p>
      <p>---------------------------------------</p>
    </div>
  </div>
  <RouterLink class="btn btn-primary" to="/checkout">Proceed to checkout</RouterLink>
</template>
<style scoped>
h1 {
  font-size: 2rem;
  margin: 0 0 0 3rem;
  color: whitesmoke;
}
h2 {
  font-size: 1.5rem;
  /* margin-bottom: 0.7rem; */
  color: whitesmoke;
}
h3 {
  font-size: 1.15rem;
  /* margin-bottom: 0.7rem; */
  color: rgb(224, 224, 224);
}
p {
  font-size: 1rem;
  /* margin-bottom: 0.7rem; */
  color: rgb(224, 224, 224);
}
.item-body {
  margin: 2rem 0 2rem 3rem;
}
.btn-primary {
  background-color: rgb(8, 62, 0);
  border-color: rgb(8, 62, 0);
  color: white;
  margin-left: 6.5rem;
}
</style>
