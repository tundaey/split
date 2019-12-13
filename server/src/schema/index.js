import { gql } from 'apollo-server-express';
import userSchema from './user';
import recipientSchema from './recipient';

const linkSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, userSchema, recipientSchema];
