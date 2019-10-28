const resolvers = {
  Query: {
    recipients: async (parent, args, { models }) => models.Recipient.findAll(),
    recipient: async (parent, { id }, { models }) => models.Recipient.findByPk(id),
  },
  Mutation: {
    createRecipient: async (parent, { name }, { me, models }) => {
      try {
        return models.Recipient.create({
          name,
          userId: me.id,
        });
      } catch (error) {
        throw new Error(error);
      }
    },
    deleteRecipient: async (parent, { id }, { models }) => {
      return models.Message.destroy({ where: { id } });
    },
  },
  Recipient: {
    user: async (recipient, args, { models }) => {
      return models.User.findByPk(recipient.userId);
    },
  },
};

export default resolvers;
