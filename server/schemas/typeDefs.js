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
    school: School
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
    checkoutDate: Date
    dueDate: Date
    checkinDate: Date
  }

  type School {
    _id: ID
    name: String!
    students: [Student]
    staff: [Staff]
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
    students: [Student]
  }

  type Mutation {
    addStudent(sid: String!, firstName: String!, lastName: String!, middleName: String, nickName: String, email: String!, school: String!, team:[Staff], loans: [Loan] ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
