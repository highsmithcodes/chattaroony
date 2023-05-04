const { mongoose } = require("mongoose");

const Movie = mongoose.model("Movie", {
  title: String,
  rating: Number,
  year: Number,
});

module.exports = { Movie };