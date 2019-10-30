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
const getMe = async req => {
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
  context: async req => ({
    models,
    me: await getMe(req),
    secret: process.env.SECRET,
  }),
});

const port = 4000;

server.applyMiddleware({ app, path: '/api' });
models.sequelize.authenticate();
models.sequelize.sync();

app.listen({ port }, () => {
  console.log('Apollo Server on http://localhost:4000/api');
});
