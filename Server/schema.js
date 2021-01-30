const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    name: String!
    surname: String!
    email: String!
  }
  
  type Customer {
    name: String!
    surname: String!
    email: String!
    phone: String!
  }

  type Book {
    id: ID!
    customerEmail: String!,
    description: String
    ISBN: String!
    price: Int!
    purchaseDate: String!
  }

  type Query {
    getUser(email: String!): User 

    getCustomers: [Customer]

    getBooks(customerEmail:String!): [Book]
  }
  
  type Mutation {
    registerUser(email: String!, name: String!, surname: String!): User

    addCustomer(
      name: String!,
      surname: String!, 
      email: String!, 
      phone: String!, 
    ): Customer

    addBook(
      customerEmail: String!,
      description: String!,
      ISBN: String!,
      price: Int!,
      purchaseDate: String!
    ): Boolean

    updateBook(
      id: String,
      customerEmail: String!,
      description: String!,
      ISBN: String!,
      price: Int!,
      purchaseDate: String!
    ): Boolean

    deleteBook(id: String!): Boolean
  }
`;

module.exports = typeDefs;



