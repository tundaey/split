import jwt from 'jsonwebtoken';
import { combineResolvers } from 'graphql-resolvers';
import { AuthenticationError, UserInputError } from 'apollo-server';

import { isAdmin } from './authorization';

const TOKEN_EXPIRES_IN = '1h';
const createToken = async (user, secret, expiresIn) => {
  const { id, email, username, role } = user;
  return jwt.sign({ id, email, username, role }, secret, {
    expiresIn,
  });
};

const resolvers = {
  Query: {
    me: async (parent, args, { me, models }) => {
      const profile = await me();
      return models.User.findByPk(profile.id);
    },
    user: async (parent, { id }, { models }) => {
      console.log('models', models);
      return models.User.findById(id);
    },
    users: async (parent, args, { models }) => {
      return models.User.findAll();
    },
  },
  Mutation: {
    signUp: async (parent, { username, email, password }, { models, secret }) => {
      const user = await models.User.create({
        username,
        email,
        password,
      });
      return { token: createToken(user, secret, TOKEN_EXPIRES_IN) };
    },
    signIn: async (parent, { login, password }, { models, secret }) => {
      const user = await models.User.findByLogin(login);
      if (!user) {
        throw new UserInputError('No user found with this login credentials');
      }
      const isValid = await user.validatePassword(password);
      if (!isValid) {
        throw new AuthenticationError('Invalid password');
      }

      return { token: createToken(user, secret, TOKEN_EXPIRES_IN) };
    },
    deleteUser: combineResolvers(isAdmin, async (parent, { id }, { models }) => {
      return models.User.destroy({
        where: { id },
      });
    }),
  },
  User: {
    recipients: async (user, args, { models }) => {
      return models.Recipient.findAll({ where: { UserId: user.id } });
    },
  },
};

export default resolvers;
