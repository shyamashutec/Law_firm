import express from 'express';
import cors from 'cors';
import { Auth } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
import { schema, addUser, verifyUserEmail } from './users';
import { db_connection } from './utils';
var { graphqlHTTP } = require('express-graphql');
Auth.configure(awsconfig);
const app = express();

var root = {
  addUser: (credentials) => addUser(credentials),
  verifyUserEmail: (username) => verifyUserEmail(username),
};

// connecting database
db_connection();

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    customFormatErrorFn: (err) => {
      return err.message;
    },
  })
);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
