const { mongoose } = require("mongoose");

const Movie = mongoose.model("Movie", {
  title: String,
  thumbnail: String,
  description: String,
});

module.exports = { Movie };