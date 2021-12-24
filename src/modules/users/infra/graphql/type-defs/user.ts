import { gql } from 'apollo-server-express';

const userTypes = gql`
  extend type Query {
    listUsers: [User!]
  }

  type User {
    name: String!
    email: String!
  }
`;

export { userTypes };
