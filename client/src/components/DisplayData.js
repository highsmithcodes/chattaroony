import { useQuery, gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { FIND_MOVIE, UPDATE_MOVIE } from "../graphql-operations";


const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            _id
            title
        }
    }
`

function DisplayData(props) {

    const APP_ID = process.env.REACT_APP_MONGO_ID;
    // console.log(APP_ID)

    // const [searchText, setSearchText] = useState("Big Hero 6");
    // const { loading, data } = useQuery(FIND_MOVIE, {
    //   variables: { query: { title: searchText } }
    // });
  
    // const movie = data ? data.movie : null;
    // const [updateMovie, { loading: updating }] = useMutation(UPDATE_MOVIE);
    // const [newTitleText, setNewTitleText] = useState("Add New Title Here");
    const { data } = useQuery(QUERY_ALL_MOVIES);

    if(data) {
        console.log('data2', data);
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

    return ( 
        <>
            {data && data.movies.map((movie) => {
              return   <div>
                  <img class="h-96 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80" alt="" />
                  <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">{movie.title}</h2>
                  <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">{movie.title}</p>
              </div>
             })}

        </>
     );
}

export default DisplayData;