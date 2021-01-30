
<template>
  <div class="items" :key="getUser.name">
    <div class="name">{{ `${getUser.name} ${getUser.surname}` }}</div>
    <button v-on:click="this.logout">Logout</button>
  </div>
</template>

<script>
import firebase from "@/firebase.js";
import { getUser } from "@/graphql.js";
export default {
  data() {
    return {
      getUser: ""
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    },
  },
  props: ["authUser"],
  apollo: {
    getUser: {
      query: getUser,
      variables() {
          return {
              email: this.authUser.email
          }
      }
    },
  }
};
console.log("I can do this")
//console.log(this.user)
</script>

<style scoped>
.items {
  display: flex;
  align-items: center;
}

.name {
  font-size: 1.5rem;
  padding-right: 1.5rem;
}

a {
  text-decoration: none;
  padding: 0 0.5rem;
}

button {
  background-color: rgb(187, 187, 187);
  border: none;
  padding: 0.4rem;
}
button:hover {
  background-color:  bisque;
}
</style>