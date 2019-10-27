const resolvers = {
  Query: {
    me: async (parent, args, { me, models }) => {
      return models.User.findByPk(me.id);
    },
    user: async (parent, { id }, { models }) => {
      return models.User.findById(id);
    },
    users: async (parent, args, { models }) => {
      return models.User.findAll();
    },
  },
  User: {
    recipients: async (user, args, { models }) => {
      return models.Recipient.findAll({ where: { userId: user.id } });
    },
  },
};

export default resolvers;
