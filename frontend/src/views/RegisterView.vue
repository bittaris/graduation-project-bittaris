<script>
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user'

export default {
  name: 'RegisterView',
  data() {
    return {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useUserStore, ['register']),
    async doRegister() {
      await this.register(this.username, this.firstName, this.lastName, this.email, this.password)
      this.$router.push('/login')
    }
  }
}
</script>
<template>
  <h3>Register for an account</h3>

  <form @submit.prevent="doRegister">
    <div>
      <label for="username">Username:</label>
      <input id="username" type="text" v-model="username" />
    </div>
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
    <button type="submit">Register</button>
  </form>
</template>
