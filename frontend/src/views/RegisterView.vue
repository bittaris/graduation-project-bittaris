<script>
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user'

export default {
  name: 'RegisterView',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useUserStore, ['register']),
    async doRegister() {
      await this.register(this.firstName, this.lastName, this.email, this.password)
      this.$router.push('/login')
    }
  }
}
</script>
<template>
  <h2>Register for an account</h2>

  <form @submit.prevent="doRegister">
    <div>
      <label for="firstName">First Name:</label>
      <input id="firstName" type="text" v-model="firstName" />
    </div>
    <div>
      <label for="lastName">Last Name:</label>
      <input id="lastName" type="text" v-model="lastName" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input id="email" type="email" v-model="email" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button class="btn btn-primary" @click="doRegister">Register</button>
  </form>
</template>
<style scoped>
label {
  display: block;
  margin: 0.7rem 0 0 0;
}
h2 {
  font-size: 2rem;
  margin: 2rem 0 1rem 3rem;
}
form {
  margin: 2rem 0 0 3rem;
}
.btn-primary {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: rgb(255, 255, 255);
  background-color: green;
  margin-top: 2rem;
}
</style>
