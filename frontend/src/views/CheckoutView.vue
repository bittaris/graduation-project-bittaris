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
  },
  methods: {
    showAlert: () => {
      alert(
        "Thank you for your purchase! Are you worried about the fact you didn't input any payment information? Don't worry, money is made up. Flowers will find their way to you regardless."
      )
    }
  }
}
</script>
<template>
  <header>
    <h1>Checkout</h1>
  </header>
  <body>
    <h2>Delivery Address</h2>
    <form>
      <div class="names">
        <div>
          <label for="firstName">First Name</label>
          <input id="firstName" type="text" v-model="firstName" />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input id="lastName" type="text" v-model="lastName" />
        </div>
      </div>
      <div class="address1">
        <div class="street">
          <label for="streetName">Street Name</label>
          <input id="streetName" type="text" v-model="streetName" />
        </div>
        <div class="nr">
          <label for="houseNr">Nr</label>
          <input id="houseNr" type="text" v-model="houseNr" />
        </div>
      </div>
      <div class="address2">
        <div>
          <label for="zip">Zip Code</label>
          <input id="zip" type="text" v-model="zip" />
        </div>
        <div>
          <label for="city">City</label>
          <input id="city" type="text" v-model="city" />
        </div>
      </div>
      <label for="country">Germany*</label>
      <p>*To assure the quality of our flowers, we only deliver inside Germany.</p>
    </form>
    <h2>Billing information</h2>
    <form>
      <div class="names-billing">
        <div>
          <label for="firstName">First Name</label>
          <input id="firstName" type="text" v-model="firstName" />
        </div>
        <div>
          <label for="lastName">Last Name</label>
          <input id="lastName" type="text" v-model="lastName" />
        </div>
      </div>
      <div class="addressLine1">
        <label for="addressLine1">Address Line 1</label>
        <input id="addressLine1" type="text" v-model="addressLine1" />
      </div>
      <div class="addressLine2">
        <label for="addressLine2">Address Line 2</label>
        <input id="addressLine2" type="text" v-model="addressLine2" />
      </div>
      <div class="addressLine3">
        <div class="zip-billing">
          <label for="postalCode">Zip Code</label>
          <input id="postalCode" type="text" v-model="postalCode" />
        </div>
        <div class="city-billing">
          <label for="city">City</label>
          <input id="city" type="text" v-model="city" />
        </div>
        <div class="country">
          <label for="country">Country</label>
          <input id="country" type="text" v-model="country" />
        </div>
      </div>
      <RouterLink @click="showAlert" class="btn btn-primary" to="/checkout"
        ><i class="bi bi-shield-lock"></i> Pay safely</RouterLink
      >
    </form>
  </body>
</template>
<style scoped>
label {
  display: block;
  margin: 1rem 0 0 0;
}
.names {
  display: flex;
}
.names input {
  margin-right: 1rem;
  width: 200px;
}
.address1 {
  display: flex;
}
.address1 input {
  margin-right: 1rem;
}
.street input {
  width: 350px;
}

.nr input {
  width: 50px;
}
.address2 {
  display: flex;
}
.address2 input {
  margin-right: 1rem;
  width: 200px;
}

.names-billing {
  display: flex;
}

.addressLine1 input {
  margin-right: 1rem;
  width: 417px;
}
.addressLine2 input {
  margin-right: 1rem;
  width: 417px;
}
.addressLine3 {
  display: flex;
}

.zip-billing input {
  margin-right: 1rem;
  width: 80px;
}
.city-billing input {
  margin-right: 1rem;
  width: 150px;
}
.country input {
  margin-right: 1rem;
  width: 155px;
}
.names-billing input {
  margin-right: 1rem;
  width: 200px;
}

.btn-primary {
  margin: 3rem 0 5rem 0;
  background-color: green;
  border-color: green;
}
header {
  margin: 1.5rem 0 0 3rem;
}
body {
  margin: 1.5rem 0 0 3rem;
}
h1 {
  font-size: 2rem;
  color: whitesmoke;
}
h2 {
  font-size: 1.5rem;
  color: white;
  margin-top: 2rem;
}
label {
  font-size: 1rem;
  color: rgb(224, 224, 224);
}
p {
  font-size: 0.7rem;
  color: rgb(224, 224, 224);
}
</style>
