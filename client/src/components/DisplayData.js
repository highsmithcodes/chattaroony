import { useQuery, gql, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { QUERY_ALL_MOVIES } from "../graphql-operations";
import {Link} from 'react-router-dom';


function DisplayData() {

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
              return   <><div className="p-8" key={movie._id}>
                    <div className="bg-white max-w-2xl rounded-3xl ring-1 ring-gray-200 p-5 lg:mx-0 lg:flex lg:max-w-none">
                  <img className="h-96 w-full rounded-lg object-cover" src={movie.thumbnail} alt="" style={{ width: 100, height: 100, margin: '0 auto' }} />
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">{movie.title}</h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-500 dark:text-blue-400">{movie.type}</p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 mb-5">{movie.description}</p>
                  <Link  to={`/products/${movie._id}`} className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600">Learn More</Link>
              </div>
  
                </>
             })}
        </>
     );
}

export default DisplayData;