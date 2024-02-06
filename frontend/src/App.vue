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
        <RouterLink to="/" class="navbar-brand">Wildflower</RouterLink>
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
            <a v-if="user" class="nav-item nav-link" @click="logout">Logout</a>
            <h1>
              Wildflower for {{ user?.firstName }}. Socket connected: {{ connected ? 'yes' : 'no' }}
            </h1>
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
  max-width: 1200px;
  margin: 0 0 0 2rem;
  padding: 0 1rem;
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

header {
  line-height: 1;
  max-height: 80vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

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

h1 {
  font-size: 1rem;
  margin: 0 0 0 5rem;
  color: rgb(248, 246, 243);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
