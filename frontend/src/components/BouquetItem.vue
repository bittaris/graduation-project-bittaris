<script>
import { useUserStore } from '@/stores/user'
import { useAccountStore } from '@/stores/account'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'BouquetItem',
  data() {
    return {
      showModal: false,
      quantity: 1
    }
  },
  computed: {
    ...mapState(useAccountStore, ['user'])
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
      if (!this.showModal) {
        this.removeModalBackdrop()
      }
    },
    ...mapActions(useUserStore, ['addItemToCart', 'fetchCart']),
    async addItemAndRedirect(userId, productId, quantity) {
      await this.addItemToCart(userId, productId, quantity)
      this.cart = await this.fetchCart(userId)
      console.log('this.cart', this.cart)

      // save updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(this.cart))
      this.$router.push('/cart')
    },
    removeModalBackdrop() {
      let backdrop = document.querySelector('.modal-backdrop')
      if (backdrop) {
        backdrop.parentNode.removeChild(backdrop)
      }
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <div class="products">
    <div class="card-group">
      <div class="card">
        <img :src="product.image?.source" class="card-img-top" :alt="product.image?.alt" />
        <div class="card-body">
          <h2 class="card-title">{{ product.title }}</h2>
          <p class="card-text">{{ product.description }}</p>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            @click="toggleModal"
            :data-bs-target="`#modal${product._id}`"
          >
            Select amount
          </button>
        </div>
      </div>
      <div
        class="modal fade"
        :id="`modal${product._id}`"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        v-show="showModal"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="ModalLongTitle">Info</h5>
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="product">
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }} for {{ product.price }}</p>
              </div>
            </div>
            <div class="modal-footer">
              <input type="number" class="form-control" placeholder="quantity" v-model="quantity" />
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button
                @click="addItemAndRedirect(user._id, product._id, quantity)"
                type="button"
                data-bs-dismiss="modal"
                class="btn btn-primary"
              >
                <i class="bi bi-cart3"></i> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal-title {
  font-size: 1.5rem;
  color: rgb(1, 1, 1);
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 0.7rem;
  color: rgb(0, 0, 0);
}
h3 {
  font-size: 1.2rem;
  margin-bottom: 0.7rem;
  color: rgb(0, 0, 0);
}
.product {
  color: rgb(0, 0, 0);
  text-align: left;
}

.btn-secondary {
  background-color: rgb(101, 101, 101);
  border-color: rgb(101, 101, 101);
  color: white;
}
.btn-primary {
  background-color: rgb(8, 62, 0);
  border-color: rgb(8, 62, 0);
  color: white;
}
</style>
