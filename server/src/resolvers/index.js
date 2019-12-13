import { GraphQLDateTime } from 'graphql-iso-date';
import userResolvers from './user';
import recipientsResolvers from './recipients';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [customScalarResolver, userResolvers, recipientsResolvers];
