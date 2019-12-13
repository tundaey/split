import { combineResolvers } from 'graphql-resolvers';
import { isAuthenticated, isRecipientOwner } from './authorization';

const resolvers = {
  Query: {
    recipients: async (parent, args, { models }) => models.Recipient.findAll(),
    recipient: async (parent, { id }, { models }) => models.Recipient.findByPk(id),
  },
  Mutation: {
    createRecipient: combineResolvers(isAuthenticated, async (parent, { name }, { me, models }) => {
      try {
        return models.Recipient.create({
          name,
          userId: me.id,
        });
      } catch (error) {
        throw new Error(error);
      }
    }),
    deleteRecipient: combineResolvers(
      isAuthenticated,
      isRecipientOwner,
      async (parent, { id }, { models }) => {
        return models.Message.destroy({ where: { id } });
      }
    ),
  },
  Recipient: {
    user: async (recipient, args, { models }) => {
      return models.User.findByPk(recipient.UserId);
    },
  },
};

export default resolvers;
