const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    providers: [Providers!]!
  }

  type Providers {
    id: Int!
    name: String!
    user: User!
  }

  type  Query {
    getUser(id: Int!): User
    getAllUsers: [User!]!
    getProviders(id: Int!): Providers
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createProvider(userId: Int!, name: String!): Providers!
  }
`
module.exports = typeDefs;