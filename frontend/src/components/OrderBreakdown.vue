<script>
import { useUserStore } from '@/stores/user'
import { useProductStore } from '@/stores/product'

export default {
  name: 'OrderBreakdown',
  props: {
    cart: {
      type: Array,
      required: true
    }
  }
}
</script>
<template>
  <div class="order-breakdown">
    <h2>Order Breakdown</h2>
    <!-- <div v-for="item in cart" :key="item.product._id">
      <h3>{{ item.product.title }}</h3>
      <p>{{ item.product.price }}</p>
    </div> -->
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
      </div>
    </div>
    <div class="order-breakdown-item">
      <div class="order-breakdown-item__title">Subtotal</div>
      <div class="order-breakdown-item__price">€0.00</div>
    </div>
    <div class="order-breakdown-item">
      <div class="order-breakdown-item__title">Shipping</div>
      <div class="order-breakdown-item__price">€0.00</div>
    </div>
    <div class="order-breakdown-item">
      <div class="order-breakdown-item__title">Tax</div>
      <div class="order-breakdown-item__price">€0.00</div>
    </div>
    <div class="order-breakdown-item">
      <div class="order-breakdown-item__title">Total</div>
      <div class="order-breakdown-item__price">€0.00</div>
    </div>
  </div>
</template>
