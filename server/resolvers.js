const resolvers = {
  Query: {
    async getUser(root, { id }, { models }) {
      return models.User.findByPk(id);
    },
    async getAllUsers(root, args, { models }) {
      return models.User.findAll();
    },
    async getProviders(root, { id }, { models }) {
      return models.Providers.findByPk(id);
    }
  },

  Mutation: {
    async createUser(root, { firstName, lastName, email }, { models }) {
      console.log("create user");
      return models.User.create({
        firstName,
        lastName,
        email
      });
    },
    async createProvider(root, { userId, name }, { models }) {
      return models.Providers.create({
        userId,
        name
      });
    }
  },

  User: {
    async providers(providers) {
      return providers.getProviders();
    }
  },

  Providers: {
    async user(user) {
      return user.getUser();
    }
  }
};
