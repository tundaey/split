const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

module.exports = {
  Query: {
    async getUser(root, { id }, { models, user }) {
      if(!user) throw new Error('You are not authenticated')
      return models.User.findByPk(id);
    },
    async getAllUsers(root, args, { models }) {
      return models.User.findAll();
    }
    // async getProviders(root, { id }, { models }) {
    //   return models.Providers.findByPk(id);
    // }
  },

  Mutation: {
    async createUser(root, { firstName, lastName, email, password }, { models }) {
      const user = models.User.create({
        firstName,
        lastName,
        email,
        password: await bcrypt.hash(password, 10)
      });

      return jsonwebtoken.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1m' }
      )
    }

    async login(root, { email, password }, { models }) {
      const user = models.User.findOne({
        where: { email }
      });

      if(!user) {
        throw new Error('No user with that email')
      }

      const validUser = await bcrypt.compare(password, user.password)

      return jsonwebtoken.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      )
    }
    // async createProvider(root, { userId, name }, { models }) {
    //   return models.Providers.create({
    //     userId,
    //     name
    //   });
    // }
  },

  User: {
    // async providers(providers) {
    //   return providers.getProviders();
    // }
  }

  // Providers: {
  //   async user(user) {
  //     return user.getUser();
  //   }
  // }
};
