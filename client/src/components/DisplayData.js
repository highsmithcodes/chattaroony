import { useQuery, gql, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { FIND_MOVIE, UPDATE_MOVIE } from "../graphql-operations";


const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            _id
            title
            thumbnail
            description
        }
    }
`


function DisplayData(props) {

    // const [searchText, setSearchText] = useState("Big Hero 6");
    // const { loading, data } = useQuery(FIND_MOVIE, {
    //   variables: { query: { title: searchText } }
    // });
  
    // const movie = data ? data.movie : null;
    // const [updateMovie, { loading: updating }] = useMutation(UPDATE_MOVIE);
    // const [newTitleText, setNewTitleText] = useState("Add New Title Here");

    
    // const { data } = useQuery(QUERY_ALL_MOVIES);
    // Solution to Caching issue in article below
    // https://www.apollographql.com/docs/react/data/queries/#updating-cached-query-results

    const { loading, error, data, startPolling, stopPolling } = useQuery(QUERY_ALL_MOVIES)

    if(data) {
        console.log('data', data);
    }

    // const updateMovieTitle = async () => {
    //     if (!movie) return;
    //     await updateMovie({
    //         variables: {
    //         query: { title: movie.title },
    //         set: { title: newTitleText }
    //         }
    //     });
    //     setSearchText(newTitleText);
    // };

    useEffect(() => {
        startPolling(); // poll interval
    
        return () => {
          stopPolling();
        };
      }, []);
    return ( 
        <>
            {data && data.movies.map((movie) => {
              return   <div>
                  <img class="h-96 w-full rounded-lg object-cover" src={movie.thumbnail} alt="" />
                  <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">{movie.title}</h2>
                  <p class="mt-2 text-lg tracking-wider text-blue-500 dark:text-blue-400">{movie.description}</p>
              </div>
             })}
        </>
     );
}

export default DisplayData;