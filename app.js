const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resovlers/index');
//schema object destructuring

//middle ware
const graphqlHTTP = require('express-graphql');
const app = express();
app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    //schemaProperty
    schema: graphQlSchema,

    //root value resolver
    rootValue: graphQlResolvers,

    //web interface for dev
    graphiql: true
  })
);

//TODO:Connect to our database
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@c0-vf1sr.mongodb.net/${process.env.MONGO_DB}?retryWrites=true
    `,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Listen on 3000');

    app.listen(3000);
  })
  .catch(err => {
    console.log('Can not Connect: ', err);
  });
