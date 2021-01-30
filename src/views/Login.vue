<template>
  <section class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button>Enter</button>
    </form>
  </section>
</template>

<script>
import firebase from "@/firebase.js";
import store from "@/store.js";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
    }
  },
  computed: {
    authUser() {
      return store.getters.user;
    }
  }
};
</script>

<style scoped>
h1 {
  color: bisque;
}
input {
  margin-bottom: 1rem;
  padding: 0.4rem 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.568);
  border: none;
  font-size: 1.3rem;
  color: bisque;
}
.login-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  background-color: rgba(15, 65, 35, 0.911);
  box-shadow: 3px 10px 18px #000;;
  width: 50%;
  margin-left: 25%;
  margin-top: 5rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  widows: 300px;
}
button {
  margin-bottom: 1rem;
  padding: 0.4rem 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.801);
  border: none;
  font-size: 1.3rem;
  color: bisque;
}
</style>