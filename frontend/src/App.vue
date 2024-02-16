<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useAccountStore } from './stores/account'
import { useSocketStore } from './stores/socket'

import { mapActions, mapState } from 'pinia'

export default {
  name: 'App',
  components: {
    HelloWorld,
    RouterLink,
    RouterView
  },
  async mounted() {
    await this.fetchUser()
    await this.init()
  },
  methods: {
    ...mapActions(useAccountStore, ['fetchUser', 'logout']),
    ...mapActions(useSocketStore, ['init'])
  },
  computed: {
    ...mapState(useAccountStore, ['user']),
    ...mapState(useSocketStore, ['connected'])
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark" id="navbarMain">
        <RouterLink to="/" class="navbar-brand"
          ><i class="bi bi-flower3"></i> Wildflower</RouterLink
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <RouterLink to="/" class="nav-item nav-link active">Home</RouterLink>
            <RouterLink to="/about" class="nav-item nav-link">About</RouterLink>
            <RouterLink to="/products" class="nav-item nav-link">Bouquets</RouterLink>
            <RouterLink v-if="!user" to="/login" class="nav-item nav-link">Login</RouterLink>
            <RouterLink v-if="!user" to="/register" class="nav-item nav-link">Register</RouterLink>
            <RouterLink class="nav-item nav-link" to="/cart"
              ><i class="bi bi-cart3"></i
            ></RouterLink>
            <h1 v-if="user" class="user-customized">
              Hey {{ user?.firstName }}!
              <!-- Socket connected: {{ connected ? 'yes' : 'no' }} -->
            </h1>
            <a v-if="user" class="nav-item nav-link" @click="logout">Logout</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped>
.wrapper {
  /* max-width: 1200px; */
  margin: 0 0 0 rem;
  padding: 0 5rem;
}

.user-customized {
  font-size: 1.2rem;
  align-items: center;
  display: inline-block;
  justify-content: center;
  margin: 0.74rem 0 0 1rem;
  color: rgb(200, 200, 200);
}

/* .navbar-nav {
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-inline: 3rem 3rem 3rem 3rem;
} */

/* .nav-item {
  margin: 0 1rem;
  color: rgb(184, 182, 182);
  text-align: center;
  font-size: 1rem;
  text-align: center;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

/* nav a.router-link-exact-active {
  color: var(--color-text);
} */

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

/* nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
} */

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }
  /*
  .logo {
    margin: 0 2rem 0 0;
  } */

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1.2rem;
    padding: 0.5rem 1rem 1.5rem 1rem;
    margin-top: 1rem;
  }
}
</style>
