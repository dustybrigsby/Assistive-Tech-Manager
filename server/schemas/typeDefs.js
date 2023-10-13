const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Student {
    _id: ID
    sid: String!
    firstName: String!
    lastName: String!
    middleName: String
    nickName: String
    email: String!
    team: [Staff]!
    loans: [Loan]
  }

  type Staff {
    _id: ID
    firstName: String!
    lastName: String!
    middleName: String
    email: String!
    students: [Student]
    schools: [School]
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
    tickets: [String]
  }

  type Category {
    _id: ID
    name: String!
  }

  type Loan {
    _id: ID
    status: String!
    tools: [Tool!]
    student: Student!
    staff: [Staff]
  }

  type School {
    _id: ID
    name: String!
    students: [Student]
    staff: [Staff]
  }

  type Loan {
    _id: ID
    student: Student!
    tool: Tool!
    checkoutDate: Date
    dueDate: Date
    checkinDate: Date
  }




  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    staff: Staff
  }

  input ToolInput {
    _id: ID
    purchaseQuantity: Int
    name: String
    image: String
    price: Float
    quantity: Int
  }

  type Query {
    categories: [Category]
    tools(category: ID, name: String): [Tool]
    tool(_id: ID!): Tool
    staff: Staff
  }

  type Mutation {
    addStaff(firstName: String!, lastName: String!, middleName: String, email: String!, password: String!): Auth
    addStudent(sid: String!, firstName: String!, lastName: String!, middleName: String, nickName: String, email: String!, school: ): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
