const { User, Customer, Book } = require("./database/dbSchema");

module.exports = {
  // Get handlers////////////////////////////////////////////////////////////////
  Query: {
    async getUser(_, { email }) {
      console.log(`searching for ${email}`)
      const foundUser = await User.find({ email: `${email}` }, (err, user) => {
        if (err) {
          console.log(err);
        }
        console.log("found user:");
        console.log(user);
        return user;
      });
      console.log("returning user:");
      console.log(foundUser[0]);
      return foundUser[0];
    },

    async getCustomers() {
      console.log(`searching for customers`)
      const foundCustomers = await Customer.find((err, customers) => {
        if (err) {
          console.log(err);
        }
        return customers
      });
      console.log("found customer:");
      console.log(foundCustomers)
      return foundCustomers;
    },

    async getBooks(_, {customerEmail}) {
      console.log(`searching for books`)
      const foundBooks = await Book.find({ customerEmail: `${customerEmail}` }, (err, books) => {
        if (err) {
          console.log(err);
        }
        return books;
      });
      console.log("found books:");
      console.log(foundBooks)
      return foundBooks;
    }
  },


  Mutation: {
    registerUser(_, { email, name, surname }) {
      const newUser = new User({
        email: email,
        name: name,
        surname: surname
      })
      console.log("doing the things")
      const user = newUser.save((err, newUser) => {
        if (err) {
          console.log(err);
        }
        console.log("new user created");
        console.log(newUser);
        return newUser;
      });
      console.log("returned");
      console.log(newUser);
      return newUser;
    },

    // Add handlers//////////////////////////////////////////////////////////////
    addCustomer(_, {
      name,
      surname,
      email,
      phone
    }) {
      const newCustomer = new Customer({
        name: name,
        surname: surname,
        email: email,
        phone: phone
      });
      console.log("doing the things")
      const customer = newCustomer.save((err, newCustomer) => {
        if (err) {
          console.log(err);
        }
        console.log("new customer created");
        console.log(newCustomer);
        return newCustomer;
      });
      console.log("returned");
      return customer
    },

    async addBook(_, {
      customerEmail,
      description,
      ISBN,
      price,
      purchaseDate
    }) {
      const newBook = new Book({
        customerEmail: customerEmail,
        description: description,
        ISBN: ISBN,
        price: price,
        purchaseDate: purchaseDate
      });
      console.log("doing the things")
      newBook.save((err, newBook) => {
        if (err) {
          console.log(err);
        }
        console.log("new book created");
        console.log(newBook);
      });
      return true;
    },

    // Upddate handlers///////////////////////////////////////////////////////////
    updateBook(_, {
      id,
      customerEmail,
      description,
      ISBN,
      price,
      purchaseDate
    }) {
      const newBook = {
        customerEmail: customerEmail,
        description: description,
        ISBN: ISBN,
        price: price,
        purchaseDate: purchaseDate
      };
      console.log("trying to update:")
      console.log(newBook)
      Book.findByIdAndUpdate(id, newBook, {lean:true, new:true}, (err, bookUpdate) => {
        if (err) {
          console.log(err);
        }
        console.log("updated book");
        console.log(bookUpdate);
        return true;
      });
    },

    // Delete handlers/////////////////////////////////////////////////////////////
    deleteBook(_, {id}) {
      Book.findByIdAndDelete(id, (err) => {
        if (err) console.log(err);
        console.log("Deleted book");
      });
      return true;
    }
  }
}