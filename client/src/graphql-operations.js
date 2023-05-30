import gql from "graphql-tag";

export const FIND_MOVIE = gql`
  query FindMovie($query: MovieQueryInput!) {
    movie(query: $query) {
      _id
      title
      thumbnail
      description
    }
  }
`;

export const FIND_MOVIE_BY_ID = gql`
  query FindMovieByID($query: MovieQueryInput) {
    movie(query: $query) {
      _id
      title
      thumbnail
      description
    }
  }
`;

export const UPDATE_MOVIE = gql`
  mutation UpdateMovie($query: MovieQueryInput!, $set: MovieUpdateInput!) {
    updateOneMovie(query: $query, set: $set) {
      _id
      title
      thumbnail
      description
    }
  }
`;