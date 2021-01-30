<template>
  <section class="register-container">
    <h1>Resgister</h1>
    <form @submit.prevent="register">
      <input type="text" v-model="name" placeholder="First Name" />
      <input type="text" v-model="surname" placeholder="Last Name" />
      <input type="email" v-model="email" placeholder="email" />
      <input type="password" v-model="password" placeholder="Password" />
      <div class="confirmPW-container">
        <span v-if="this.confirmPW && !this.PWMatch()">pasword must match</span>
        <input
          type="password"
          v-model="confirmPW"
          placeholder="Confirm Password"
        />
      </div>
      <button>Join Us</button>
    </form>
  </section>
</template>

<script>
import firebase from "@/firebase.js";
import { registerUser } from "@/graphql.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPW: "",
      name: "",
      surname: "",
    };
  },
  methods: {
    register() {
      if (this.PWMatch) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
        this.$apollo.mutate({
          mutation: registerUser,
          variables: {
            email: this.email,
            name: this.name,
            surname: this.surname,
          },
        });
      }
    },
    PWMatch() {
      return this.password === this.confirmPW;
    },
  },
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
.register-container {
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
.confirmPW-container {
  display: flex;
  flex-direction: column;
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
span {
  color: rgb(201, 47, 47);
  font-size: 1.5rem;
  padding-bottom: 0.4rem;
}
</style>