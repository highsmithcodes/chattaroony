import gql from "graphql-tag";

export const FIND_MOVIE = gql`
  query FindMovie($query: MovieQueryInput) {
    movie(query: $query) {
      _id
      title
      thumbnail
      description
    }
  }
`;

// Error: Variable "$id" got invalid value "646e68ea58db9b5d3b8cc499". Expected "MovieQueryInput", found not an object.
// export const FIND_MOVIE_BY_ID = gql`    
//   query FindMovieByID($id: MovieQueryInput! ) {
//     movie(query: { _id: $id }) {
//       _id
//       title
//       thumbnail
//       description
//     }
//   }
// `;


export const FIND_MOVIE_BY_ID = gql`    
  query FindMovieByID($id: ObjectId! ) {
    movie(query: { _id: $id }) {
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