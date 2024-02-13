<script>
export default {
  name: 'CheckoutView',
  data() {
    return {
      firstName: '',
      lastName: '',
      streetName: '',
      houseNr: '',
      zip: '',
      city: '',
      country: ''
    }
  }
}
</script>
<template>
  <header>
    <h1>Checkout</h1>
  </header>
  <body>
    <h2>Billing information</h2>
    <form>
      <div>
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" v-model="firstName" />
      </div>
      <div>
        <label for="lastName">Last Name</label>
        <input id="lastName" type="text" v-model="lastName" />
      </div>
      <div>
        <label for="addressLine1">Address Line 1</label>
        <input id="addressLine1" type="text" v-model="addressLine1" />
      </div>
      <div>
        <label for="addressLine2">Address Line 2</label>
        <input id="addressLine2" type="text" v-model="addressLine2" />
      </div>
      <div>
        <label for="postalCode">Postal Code</label>
        <input id="postalCode" type="text" v-model="postalCode" />
      </div>
      <div>
        <label for="city">City</label>
        <input id="city" type="text" v-model="city" />
      </div>
      <div>
        <label for="country">Country</label>
        <input id="country" type="text" v-model="country" />
      </div>
      <RouterLink class="btn btn-primary" to="/checkout">Proceed to checkout</RouterLink>
    </form>
  </body>
</template>
<style scoped>
label {
  display: block;
  margin: 1rem 0 0 0;
}
.btn-primary {
  margin: 3rem 0 0 0;
}
header {
  margin: 1.5rem 0 0 3rem;
}
body {
  margin: 1.5rem 0 0 3rem;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.5rem;
}
</style>
