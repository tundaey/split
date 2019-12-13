import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';

import { ApolloServer, AuthenticationError } from 'apollo-server-express';
import schema from './schema';
import resolvers from './resolvers';
import models from './models';

const app = express();
app.use(cors());

// eslint-disable-next-line consistent-return
const getMe = async ({ req }) => {
  const token = req.headers['x-token'];
  if (token) {
    try {
      return await jwt.verify(token, process.env.SECRET);
    } catch (e) {
      throw new AuthenticationError('Your session expired. Sign in again.');
    }
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async req => {
    return {
      models,
      me: await getMe(req),
      secret: process.env.SECRET,
    };
  },
});

const port = 4000;

const createUsersWithMessages = async date => {
  await models.User.create(
    {
      username: 'admin',
      email: 'admin@admin.com',
      password: 'admin123',
      role: 'ADMIN',
      Recipients: [
        {
          name: 'john doe',
          createdAt: date.setSeconds(date.getSeconds() + 1),
        },
      ],
    },
    {
      include: [models.Recipient],
    }
  );

  await models.User.create(
    {
      username: 'tundaey',
      email: 'tundaey@gmail.com',
      password: 'admin123',
      Recipients: [
        {
          name: 'jane doe',
          createdAt: date.setSeconds(date.getSeconds() + 1),
        },
      ],
    },
    {
      include: [models.Recipient],
    }
  );
};

server.applyMiddleware({ app, path: '/api' });
models.sequelize.authenticate();

const eraseDatabaseOnSync = true;
const isTest = process.env.NODE_ENV === 'test';
console.log('isTest', isTest);
models.sequelize.sync({ force: isTest }).then(async () => {
  if (isTest) {
    createUsersWithMessages(new Date());
  }
  app.listen({ port }, () => {
    console.log('Apollo Server on http://localhost:4000/api');
  });
});
