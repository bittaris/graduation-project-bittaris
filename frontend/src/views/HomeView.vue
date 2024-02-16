<script>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <div class="text-overlay">
      <h1>Welcome to Wildflower</h1>
      <h2>Your local online flower shop</h2>
      <br />
      <br />
      <h3>Wanna be cute and show that you</h3>
      <h3>care without actually being there?</h3>
      <RouterLink to="/products" class="btn btn-primary">Send flowers</RouterLink>
      <br />
      <br />
      <h4>All of the credibility</h4>
      <h4>none of the hassle</h4>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background: url('/images/homepage_bouquet.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;
  height: 100vh;
  min-width: 0;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.text-overlay {
  /* background-color: rgba(0, 0, 0, 0.5); */
  color: white;
  padding: 5rem;
  text-align: left;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  height: 100%;
}
.btn {
  background-color: #c46c01;
  border: none;
  color: rgb(255, 255, 255);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  margin: 1.5rem 0 1rem 0;
  cursor: pointer;
}

h1 {
  margin-top: 2rem;
  color: white;
}

h2 {
  color: white;
}

h3 {
  color: white;
}

h4 {
  color: rgb(238, 251, 241);
}
</style>
