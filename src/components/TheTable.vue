<template>
  <div class="table-container">
    <div class="customer-container">
      <table class="cutomer-reccord">
        <thead></thead>
        <tbody>
          <tr>
            <td class="table-data" colspan="2">
              {{ `${customerData.name}  ${customerData.surname}` }}
            </td>
          </tr>
          <tr>
            <td class="table-data" colspan="2">
              email: {{ `${customerData.email}` }}<br />
            </td>
          </tr>
          <tr>
            <td class="table-data" colspan="2">
              phone: {{ `${customerData.phone}` }}
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="addBook">Add Book Record</button>
      <button >Update Customer Record</button>
      <button >Delete Customer Record</button>
    </div>

    <div class="books-container" >
      <div v-for="book in getBooks" :key="book.ISBN" >
        <TheBookTable v-bind:bookData="{...book, customerEmail: customerData.email}" v-on:refreshData="refreshData()" />
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import TheBookTable from "@/components/TheBookTable.vue";
import { getBooks } from "@/graphql.js";

function addBook() {
  this.getBooks.unshift({
    id: null,
    ISBN: "",
    description: "",
    price: "",
    purchaseDate: ""
  });
};


export default {
  data() {
    return {
      getBooks: "",
    };
  },
  methods: {
    addBook: addBook,
    refreshData: function() {
      // This function needs to be fixed. To allow a refetch of the book data
      // this.$apollo.getBooks.query.refresh();
    }
  },
  props: ["customerData"],
  components: {
    TheBookTable,
  },
  apollo: {
      getBooks: {
        query: getBooks,
        variables() {
          return {
            customerEmail: this.customerData.email,
          };
        },
        result ({data}) {
          this.getBooks = data.getBooks;
        },
        throttle: 500,
    }
  }
};
</script>

<style scoped>
.table-container {
  display: flex;
  margin-bottom: 1.5rem;
  background-color: rgba(15, 65, 35, 0.911);
  box-shadow: 3px 10px 18px #000;;
  width: 90%;
  color: white;
  margin-left: 5%;
  padding-top: 1.4rem;
  padding-bottom: 1rem;
}

.books-container {
  display: flex;
  flex: 0.7;
  flex-direction: column;
  padding-right: 2rem;
}

.customer-container {
  display: flex;
  flex: 0.3;
  flex-direction: column;
  padding-left: 2rem;
  padding-right: 1.5rem;
}

.buttons-part {
  display: flex;
  flex-direction: column;
}

.cutomer-reccord {
  text-align: left;
  color:  bisque;
}

.table-data {
  font-size: 1.15rem;
}

table {
  padding-bottom: 1rem;
}

hr {
  color: bisque;
}

button {
  background-color: rgb(206, 206, 206);
  border: none;
  padding: 0.2rem;
  margin-top: 0.5rem;
}
button:hover {
  background-color:  bisque;
}
</style>