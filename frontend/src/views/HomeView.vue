<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <!-- <div>
    <img src="/images/pexels-polina-kovaleva-6965692.jpg" class="img-fluid" alt="..." />
    <h1>Welcome to Wildflower</h1>
    <h2>Your local online flower shop</h2>
    <br />
    <br />
    <h3>Wanna be cute and that show you</h3>
    <h3>care without actually being there?</h3>
    <a href="/products" class="btn btn-primary">Send flowers</a>
    <br />
    <br />
    <h4>All of the credibility</h4>
    <h4>none of the hassle</h4>
  </div> -->

  <div class="card text-bg-dark">
    <img src="/images/pexels-polina-kovaleva-6965692.jpg" class="card-img" alt="..." />
    <div class="card-img-overlay">
      <h1 class="card-title">Welcome to Wildflower</h1>
      <h2 class="card-text">Your local online flower shop</h2>
      <br />
      <br />
      <h3 class="card-text">Wanna be cute and that show you</h3>
      <h3 class="card-text">care without actually being there?</h3>
      <a href="/products" class="btn btn-primary">Send flowers</a>
      <br />
      <br />
      <h4>All of the credibility</h4>
      <h4>none of the hassle</h4>
    </div>
  </div>
</template>

<style scoped>
.btn {
  background-color: #015c19;
  border: none;
  color: rgb(255, 253, 253);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
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
  color: rgb(1, 84, 23);
}
</style>
