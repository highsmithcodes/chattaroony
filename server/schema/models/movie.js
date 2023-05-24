const { mongoose } = require("mongoose");

const Movie = mongoose.model("Movie", {
  title: String,
  rating: Number,
  image: String,
});

module.exports = { Movie };