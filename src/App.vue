<template>
  <div id="app">
    <TheNavbar v-bind:authUser="authUser" />
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import firebase from "@/firebase.js";
import store from "@/store.js";

firebase
  .auth()
  .onAuthStateChanged(user => store.dispatch("changeAuthState", user));

export default {
  components: {
    TheNavbar
  },
  data() {
    return {};
  },
  computed: {
    authUser() {
      return store.getters.user || null;
    }
  }
};
</script>

<style>
body {
  background-image: url("./assets/background.jpg");
  padding: 0;
  margin: 0;
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(0, 0, 0, 0.404);
  min-height: 100vh;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
