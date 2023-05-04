const { MongoDataSource } = require('apollo-datasource-mongodb');

class Movies extends MongoDataSource {
  async getMovies() {
    return await this.model.find();
  }

  async getMovie(id) {
    return await this.findOneById(id);
  }

  async createMovie({ title, rating, year }) {
    return await this.model.create({ title, rating, year });
  }
}

module.exports = { Movies };