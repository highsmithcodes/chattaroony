const dotenv = require('dotenv/config');
const { mongoose } = require("mongoose");
const { ApolloServer } = require("apollo-server");

const { typeDefs } = require("./schema/typeDef");
const { resolvers } = require("./schema/resolvers");
const { Movies } = require('./schema/dataSources/movies');
const { Movie: MovieModel} = require('./schema/models/movie');


// const MovieModel = MongoDataSource;

const uri = process.env.DATABASE_URL;
const main = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
};

main()
  .then(console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));

const dataSources = () => ({
  movies: new Movies(MovieModel),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources })

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});