const { MovieList } = require("../Movies");
const _ = require("lodash");

const resolvers = {
  Query: {
    getMovies: async (_, _args, { dataSources: { movies } }) => {
      return movies.getMovies();
    },
    // getMovie: async (_, { id }, { dataSources: { movies } }) => {
    //   return movies.getMovie(id);
    // }
    getMovie: async (_, { id }, { dataSources: { movies } }) => {
      try {
        const movie = await Movie.findById(id);
        return movie;
      } catch (error) {
        console.error("Error fetching movie:", error);
        throw new Error("Failed to fetch movie.");
      }
    },
  },
  Mutation: {
    createMovie: async (_, args, { dataSources: { movies } }) => {
      return movies.createMovie(args)
    }
  }

}
module.exports = { resolvers };