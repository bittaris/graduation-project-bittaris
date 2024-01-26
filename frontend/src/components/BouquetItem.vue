<script>
export default {
  name: 'BouquetItem',
  // data() {
  //   return {
  //     product: {
  //       title: 'Bouquet One',
  //       description: 'Composed of pink peonies available in different sizes.',
  //       price: '30€',
  //       image: {
  //         url: '/images/bouquet1.jpg',
  //         alt: 'Bouquet composed of 5 pink peonies wrapped in simple white paper'
  //       }
  //     }
  //   }
  // },
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
        <img
          src="/images/bouquet1.jpg"
          class="card-img-top"
          alt="Bouquet composed of 5 pink peonies wrapped in simple white paper"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <a href="#" class="btn btn-primary">Select size</a>
        </div>
      </div>
    </div>
  </div>
</template>
