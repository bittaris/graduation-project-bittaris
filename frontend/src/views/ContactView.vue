<script>
export default {
  name: 'Contact',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
  },
  methods: {
    showAlert: () => {
      alert(
        'Thank you for reaching out to us! No one will read your message. You are free to write your guilt free letters to the void. You are safe here.'
      )
    }
  }
}
</script>
<template>
  <header>
    <h1>Get in touch</h1>
  </header>
  <body>
    <h2>Write to us using the form below</h2>
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
        <label for="email">Email</label>
        <input id="email" type="text" v-model="email" />
      </div>
      <div>
        <label for="message">Message</label>
        <textarea id="message" v-model="message"></textarea>
      </div>
      <button @click="showAlert" class="btn btn-primary" type="submit">Send</button>
    </form>
  </body>
</template>
<style scoped>
header {
  margin: 0 0 0 5rem;
}
h1 {
  margin: 3rem 0 0 0;
  color: rgb(251, 214, 229);
}
h2 {
  margin: 1rem 0 2rem 0;
  font-size: 1.45rem;
}
body {
  margin: 0 0 0 5rem;
  color: whitesmoke;
}
label {
  display: block;
}

input {
  margin: 0 0 1rem 0;
  min-width: 350px;
}
textarea {
  margin: 0 0 1rem 0;
  min-width: 350px;
  min-height: 150px;
}
button {
  padding: 0.5rem 2rem;
  background-color: green;
  border-color: green;
}
</style>
