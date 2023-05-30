import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { FIND_MOVIE_BY_ID } from "../../graphql-operations";


function Single() {
    const { postId } = useParams();
    console.log('postId:', postId);
  
    const { loading, error, data } = useQuery(FIND_MOVIE_BY_ID, {
      // variables: { id: postId },
      variables: { query: { id: postId } }
    });

  
    if (loading) {
        return <p>Loading...</p>;
    }
  
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    // Check if data and getMovie field exist
    if (!data || !data.getMovie) {
        // Handle case when data or getMovie is undefined
        return <p>No movie data available.</p>;
    }
  
    // Access movie data
    const movie = data?.getMovie;
    console.log('movie', movie);

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      {/* Render additional post details */}
    </div>
  );
}

export default Single;