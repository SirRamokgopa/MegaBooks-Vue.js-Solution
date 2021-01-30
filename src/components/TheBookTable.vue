<template>
  <div class="booktable-container" >
    <modal v-if="showModal" @close="showModal = false" class="update-record">
      <h3 slot="header">Update Record</h3>
      <form class="inputs" slot="body">
        <table class="tg">
          <thead></thead>
          <tbody>
            <tr>
              <td >Book description:</td>
              <td >
                <input type="text" v-model="description" placeholder="Book description" />
              </td>
            </tr>
            <tr>
              <td >ISBN:</td>
              <td >
                <input type="text" v-model="ISBN" placeholder="Book ISBN" />
              </td>
            </tr>
            <tr>
              <td>Purchase date:</td>
              <td>
                <input type="date" v-model="purchaseDate" placeholder="Purchase date" />
              </td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>
                <input type="text" v-model="price" placeholder="Book price" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div slot="footer">
        <div class="modal-buttons-part">
          <button class="cancel" @click="showModal = false">Cancel</button>
          <button class="save" @click="updateBookFunc">Update</button>
        </div>
      </div>
    </modal>

    <table class="book-table" v-if="!showModal">
      <thead></thead>
      <tbody>
        <tr>
          <td class="table-data">
            Book description: {{ `${bookData.description}` }}
          </td>
        </tr>
        <tr>
          <td class="table-data">ISBN: {{ `${bookData.ISBN}` }}<br /></td>
        </tr>
        <tr>
          <td class="table-data">
            Purchase date: {{ `${bookData.purchaseDate}` }}
          </td>
        </tr>
        <tr>
          <td class="table-data">Price: {{ `R${bookData.price}` }}</td>
        </tr>
      </tbody>
    </table>

    <div class="buttons-part" v-if="!showModal">
      <button class="update-button" @click="showModal = true">
        Update Record
      </button>
      <button class="delete-button"  @click="deleteBookFunc">Delete Record</button>
    </div>
  </div>
</template>

<script>
import Modal from "./TheModal.vue";
import { updateBook, addBook, deleteBook } from "@/graphql.js";

function updateBookFunc() {
  // Updates by book ID. If there is no ID then it creates a new book.
  const vars = {
    description: this.description,
    ISBN: this.ISBN,
    purchaseDate: this.purchaseDate,
    price: Number.parseInt(this.price),
    customerEmail: this.bookData.customerEmail,
  };
  if (this.bookData.id === null) {
    this.$apollo.mutate({
      mutation: addBook,
      variables:vars
    });
  } else {
    vars.id = this.bookData.id;
    this.$apollo.mutate({
      mutation: updateBook,
      variables: vars
    });
  }
  this.$emit("refreshData");
  this.showModal = false;
}

function deleteBookFunc() {
  this.$apollo.mutate({
      mutation: deleteBook,
      variables: {id: this.bookData.id}
    });
    this.$emit("refreshData");
}

export default {
  components: { Modal },
  props: ["bookData"],
  data() {
    return {
      showModal: false,
      description: this.bookData.description,
      ISBN: this.bookData.ISBN,
      purchaseDate: this.bookData.purchaseDate,
      price: this.bookData.price,
    };
  },
  methods: {
    updateBookFunc: updateBookFunc,
    deleteBookFunc: deleteBookFunc,
  }
};
</script>

<style scoped>
.booktable-container {
  display: flex;
  padding-bottom: 0.7rem;
  justify-content: space-between;
}

.buttons-part {
  display: flex;
  flex-direction: column;
  padding-right: 0.8rem;
}

.modal-buttons-part {
  display: flex;
  justify-content: space-around;
}

.book-table {
  text-align: left;
  padding-left: 0.8rem;
}
button {
  margin-top: 1rem;
  background-color: rgb(206, 206, 206);
  border: none;
  padding: 0.3rem;
}
button:hover {
  background-color: bisque;
}

h3 {
  color: bisque;
  text-decoration: underline;
  text-align: center;
}

form.inputs {
  text-align: left;
}
</style>