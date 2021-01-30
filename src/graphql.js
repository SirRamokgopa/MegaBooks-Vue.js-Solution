import gql from 'graphql-tag';

export const getUser = gql`
  query getUser($email: String!) {
    getUser(email: $email) {
      name
      surname
    }
  }
`;

export const registerUser = gql`
  mutation registerUser($name: String!, $surname: String!, $email: String!) {
    registerUser(name: $name, surname: $surname, email: $email) { 
      name
      surname
      email
    }
  }
`;

export const getCustomers = gql`
  query Query {
    getCustomers {
      name
      surname
      email
      phone
    }
  }
`;

export const getBooks = gql`
  query Query($customerEmail: String!) {
    getBooks(customerEmail: $customerEmail) {
      id
      description
      ISBN
      purchaseDate
      price
    }
  }
`;

export const addBook = gql`
  mutation Mutate(
    $customerEmail: String!,
    $description: String!,
    $ISBN: String!,
    $price: Int!,
    $purchaseDate: String!
  ) {
    addBook(
      customerEmail: $customerEmail,
      description: $description,
      ISBN: $ISBN,
      price: $price,
      purchaseDate: $purchaseDate
    )
  }
`;

export const updateBook = gql`
  mutation Mutate(
    $id: String!,
    $customerEmail: String!,
    $description: String!,
    $ISBN: String!,
    $price: Int!,
    $purchaseDate: String!
  ) {
    updateBook(
      id: $id,
      customerEmail: $customerEmail,
      description: $description,
      ISBN: $ISBN,
      price: $price,
      purchaseDate: $purchaseDate
    ) 
  }
`;

export const deleteBook = gql`
  mutation Mutate($id: String!) {
    deleteBook(id: $id) 
  }
`;



