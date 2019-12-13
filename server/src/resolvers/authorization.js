import { ForbiddenError } from 'apollo-server';
import { skip, combineResolvers } from 'graphql-resolvers';

export const isAuthenticated = (parent, args, { me }) =>
  me ? skip : new ForbiddenError('Not authenticated as user');

export const isAdmin = combineResolvers(isAuthenticated, (parent, args, { me: { role } }) =>
  role === 'ADMIN' ? skip : new ForbiddenError('Not authenticated as owner')
);

export const isRecipientOwner = async (parent, { id }, { models, me }) => {
  const recipient = await models.Recipient.findByPk(id, { raw: true });
  if (recipient.userId !== me.id) {
    throw new ForbiddenError('Not authenticated as owner');
  }
  return skip;
};
