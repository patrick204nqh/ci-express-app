var { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Query {
    users: [User]
    posts: [Post]
  }

  type User {
    id: ID
    name: String
    username: String
    email: String
    phone: String
    website: String
    address: Address
    company: Company
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type Geo {
    lat: String
    lng: String
  }

  type Company {
    name: String
    catchPhrase: String
    bs: String
  }

  type Post {
    id: ID
    title: String
    body: String
  }
`);
