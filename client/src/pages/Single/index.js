import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

// Define your GraphQL query

const GET_MOVIE = gql`
  query getMovie($id: ID!) {
    movies(id: $id) {
      title
      description
    }
  }
`;



function Single() {
  const { postId } = useParams();

  // Execute the GraphQL query
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { postId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const post = data?.post;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      {/* Render additional post details */}
    </div>
  );
}

export default Single;