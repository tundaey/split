const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const port = 4000

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const models = require('./models')

const server = new ApolloServer({ typeDefs, resolvers, context: { models } });
const app = express();
server.applyMiddleware({ app });
models.sequelize.authenticate();
models.sequelize.sync()

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:ocalhost:${port}${server.graphqlPath}`)
);