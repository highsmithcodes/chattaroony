import gql from "graphql-tag";

export const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            _id
            title
            thumbnail
            description
        }
    }
`

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

// export const ADD_MOVIE_TO_CART = gql`
//   query AddMovieToCart {
//     cartItems @client
//   }
// `

export const GET_CART_ITEMS = gql`
  query GetAllCartItems {
    cartItems @client
  }
`

