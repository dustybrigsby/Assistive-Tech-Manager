const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Student {
    _id: ID
    sid: Int!
    firstName: String!
    lastName: String!
    middleName: String
    nickName: String
    email: String!
    team: [Staff]!
    loans: [Loan]
  }

  type Category {
    _id: ID
    name: String
  }

  type Tool {
    _id: ID
    assetTag: String!
    name: String!
    description: String
    serial: String
    model: String
    image: String
    quantity: Int!
    available: Int!
    categories: [Category]!
  }

  type Loan {
    _id: ID
    status: String!
    tools: [Tool!]
    student: Student!
    staff: [Staff]!
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  input ProductInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ProductInput]): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
