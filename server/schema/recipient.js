import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    recipients: [Recipient]!
    recipient(id: ID!): Recipient!
  }

  extend type Mutation {
    createRecipient(name: String!): Recipient!
    deleteRecipient(id: ID!): Boolean!
  }

  type Recipient {
    id: ID!
    name: String!
    user: User!
  }
`;
