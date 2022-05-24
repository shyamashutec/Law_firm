var { buildSchema } = require('graphql');
var schema = buildSchema(`
input User{
  firstname:String!
  lastname:String!
  gender:String!
  phoneno:Int!
  address:String!
  pincode:Int!
  email:String!
  password:String!
  email_verified:Boolean!
  accepted_terms:Boolean!
}
type Users{
  id:String!
  firstname:String!
  lastname:String!
  password:String!
}
  type Mutation{
    verifyUserEmail(username:String!):String!
    addUser(credentials:User!):String!
  }
  type Query {
    getUser(firstname:String!):Users!,
    getAllUsers:[Users]!
}

`);
export { schema };
