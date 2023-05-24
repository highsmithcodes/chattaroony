import { useQuery, gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { FIND_MOVIE, UPDATE_MOVIE } from "../graphql-operations";

// caching issue 
// https://www.apollographql.com/docs/react/data/mutations/#refetching-queries

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

    const APP_ID = process.env.REACT_APP_MONGO_ID;
    // console.log(APP_ID)

    // const [searchText, setSearchText] = useState("Big Hero 6");
    // const { loading, data } = useQuery(FIND_MOVIE, {
    //   variables: { query: { title: searchText } }
    // });
  
    // const movie = data ? data.movie : null;
    // const [updateMovie, { loading: updating }] = useMutation(UPDATE_MOVIE);
    // const [newTitleText, setNewTitleText] = useState("Add New Title Here");

    
    // const { data } = useQuery(QUERY_ALL_MOVIES);

    const { data} =
    useMutation(DELETE_FROM_CART, {
      variables: { productId, userId: cart?.userId },
    update(cache, { data }) {
      cache.modify({
        fields: {
          getUserCart(existingCart, { readField }) {
            if (data) {
    //If your existingCart is an object, then use something else instead of filter. I am assuming that your getUserCart returns an array
              return existingCart.filter(
                (taskRef) => data.deleteProductFromCart.id !== readField("id", taskRef)
              );
            }
          },
        },
      });
    },
    });
 

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

    return ( 
        <>
            {data && data.movies.map((movie) => {
              return   <div>
                  {/* <img class="h-96 w-full rounded-lg object-cover" src={movie.image} alt="" /> */}
                  <h2 class="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">{movie.title}</h2>
                  <p class="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400">{movie.title}</p>

              </div>
             })}

        </>
     );
}

export default DisplayData;