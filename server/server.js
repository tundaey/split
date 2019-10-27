const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const port = 4000;

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const models = require("./models");

const jwt = require('express-jwt')

const auth = jwt({
  secret: process.env.JWT_SECRET,
  credentialsRequired: false
})
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || ''
    const user = models.User.findOne({
      where: { email }
    });
    return { models }
  } 
});
const app = express();
server.applyMiddleware({ app });
models.sequelize.authenticate();
models.sequelize.sync();

app.listen(port, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
