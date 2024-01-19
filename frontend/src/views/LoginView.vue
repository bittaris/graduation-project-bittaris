<script>
import { useAccountStore } from '@/stores/account'
import { mapActions } from 'pinia'

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useAccountStore, ['login']),
    async doLogin() {
      await this.login(this.email, this.password)
      this.$router.push('/')
    }
  }
}
</script>
<template>
  <h3>Log into your account</h3>

  <form @submit.prevent="doLogin">
    <div>
      <label for="email">Email:</label>
      <input id="email" type="email" v-model="email" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input id="password" type="password" v-model="password" />
    </div>
    <button type="submit">Log in</button>
  </form>
</template>

<style scoped>
h3 {
  color: rgb(1, 179, 31);
}

label {
  margin-top: 1rem;
  display: block;
}

button {
  margin-top: 1.5rem;
  padding: 0.25rem 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: rgb(255, 255, 255);
  background-color: green;
}
</style>
