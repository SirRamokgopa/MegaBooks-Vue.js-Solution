<template>
  <section class="dashboard">
    <div class="header-part">
      <div class="searchbar">
        <input v-model="search" placeholder="Search"/>
        <button>🔍</button>
      </div>
      <div class="head">
        <h1>Dasboard</h1>
      </div>
      <div class="addcutomer-button">
        <button>Add customer</button>
      </div>
    </div>
    <div v-if="!getCustomers">
      <h1> No customer reccords found :(</h1>
    </div>

    <div v-for="customer in getCustomers" :key="`${customer.email}`">
      <TheTable v-bind:customerData="customer"/>
    </div>
  </section>
</template>

<script>
import TheTable from "@/components/TheTable.vue";
import { getCustomers } from "@/graphql.js";

export default {
  data() {
    return {
        getCustomers: ''
    };
  },
  components: {
    TheTable
  },
  props: ["customerEmail"],
  apollo: {
    getCustomers: {
      query: getCustomers
    },
  }
};
</script>

<style scoped>
.header-part {
  display: flex;
  justify-content: space-around;
}

.addcutomer-button {
  padding-top: 2rem;
}
.searchbar {
  padding-top: 2rem;
}

h1 {
  color: bisque;
}

button {
  background-color: rgb(206, 206, 206);
  border: none;
  padding: 0.2rem 0.7rem;
}
button:hover {
  background-color:  bisque;
}

input {
  background-color: rgba(206, 206, 206, 0.452);
  border: none;
  padding: 0.3rem;
  color: bisque;
}
</style>