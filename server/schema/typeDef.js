const { gql } = require("apollo-server");

const typeDefs = gql`
  type Movie{
    id: ID!
    title: String!
    thumbnail: String!
    description: String!
  }

  type Query {
    getMovies: [Movie!]!,
    getMovie(id: ID!): Movie!
    getCartMovies(ids: [ID!]!): [Movie!]!
  }

  type Mutation {
    createMovie(title: String!, thumbnail: String!, description: String!): Movie!
  }
`;

module.exports = { typeDefs };