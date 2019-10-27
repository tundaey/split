import express from 'express';
import cors from 'cors';

import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import resolvers from './resolvers';
import models from './models';

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
  },
  // context: async () => ({
  //   models,
  //   me: await models.User.findByLogin('tunde'),
  // }),
});

const port = 4000;

server.applyMiddleware({ app, path: '/api' });
models.sequelize.authenticate();
models.sequelize.sync();

app.listen({ port }, () => {
  console.log('Apollo Server on http://localhost:4000/api');
});
