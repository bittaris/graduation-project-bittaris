<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="wrapper">
    <!-- <img src="/images/pexels-polina-kovaleva-6965692.jpg" class="img-fluid" alt="..." /> -->
    <div class="text-overlay">
      <h1>Welcome to Wildflower</h1>
      <h2>Your local online flower shop</h2>
      <br />
      <br />
      <h3>Wanna be cute and show that you</h3>
      <h3>care without actually being there?</h3>
      <a href="/products" class="btn btn-primary">Send flowers</a>
      <br />
      <br />
      <h4>All of the credibility</h4>
      <h4>none of the hassle</h4>
    </div>
  </div>

  <!-- <div class="card text-bg-dark">
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
  </div> -->
</template>

<style scoped>
.wrapper {
  background-image: url('/images/homepage_bouquet.png');
  background-size: cover;
  background-position: center;
  height: 80vh;
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
