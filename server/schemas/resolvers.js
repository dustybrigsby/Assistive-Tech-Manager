const { AuthenticationError } = require("apollo-server-express");
const { Student, Staff, Tool, Category, Loan } = require("../models");
// const { signToken } = require("../utils/auth");
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    students: async () => {
      return await Student.find();
    },
  },
  Mutation: {
    addStudent: async (parent, args) => {
      const student = await Student.create(args);
      return student;
    },
  },
};

module.exports = resolvers;
