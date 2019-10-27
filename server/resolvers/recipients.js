const resolvers = {
  Query: {
    recipients: async (parent, args, { models }) => models.Recipient.findAll(),
    recipient: async (parent, { id }, { models }) => models.Recipient.findByPk(id),
  },
  Mutation: {
    createRecipient: async (parent, { name }, { me, models }) => {
      return models.Recipient.create({
        name,
        userId: me.id,
      });
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
