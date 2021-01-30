const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  surname: String,
  email: String
});

const CustomerSchema = mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  phone: String
});

const BookSchema = mongoose.Schema({
  customerEmail: String,
  description: String,
  ISBN: String,
  price: Number,
  purchaseDate: String
});

const User = mongoose.model("User", UserSchema);
const Customer = mongoose.model("Customer", CustomerSchema);
const Book = mongoose.model("Book", BookSchema);

module.exports = { User, Customer, Book };