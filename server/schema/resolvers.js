const { MovieList } = require("../Movies");
const _ = require("lodash");

const resolvers = {
  Query: {
    getMovies: async (_, _args, { dataSources: { movies } }) => {
      return movies.getMovies();
    },
    getMovie: async (_, { id }, { dataSources: { movies } }) => {
      return movies.getMovie(id);
    }
  },
  Mutation: {
    createMovie: async (_, args, { dataSources: { movies } }) => {
      return movies.createMovie(args)
    }
  }

}
module.exports = { resolvers };