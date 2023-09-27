import { useQuery, gql, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import { QUERY_ALL_MOVIES } from "../graphql-operations";
import {Link, useNavigate} from 'react-router-dom';
import AWS from 'aws-sdk';
import { useReactiveVar } from "@apollo/client";
import { cartItemsVar } from '../components/Cache/Cache';



function DisplayData() {
  let navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const moveId = movie._id

  const CartItems = useReactiveVar(cartItemsVar);
  let isInCart = CartItems.some(movie => movie.id === moveId);

  const handleCartButtonClick = () => {
    cartItemsVar(
      isInCart ? CartItems.filter(movie => movie.id !== moveId) : [...CartItems, movie]
    );
    let path = `/cart/`; 
    navigate('/cart/');
  }

    const { loading, error, data, startPolling, stopPolling } = useQuery(QUERY_ALL_MOVIES)

    if(data) {
        console.log('data', data);
    }

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
                    <div className="bg-white max-w-2xl rounded-3xl shadow-md p-5 lg:mx-0 flex flex-col lg:max-w-none">
                  <img className="h-96 w-full rounded-lg object-cover" src={movie.thumbnail} alt="" style={{ width: 100, height: 100, margin: '0 auto' }} />
                  
                  <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">{movie.title}</h2>
                  <p className="mt-2 text-lg tracking-wider text-cyan-500 dark:text-blue-400">{movie.type}</p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 mb-5">{movie.description}</p>
                  <div className="flex flex-row mt-5">
                    <button onClick={handleCartButtonClick} className="flex items-center justify-center rounded-md border border-transparent bg-cyan-500 px-4 py-3 text-base font-medium text-white hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-4">Add to Cart</button>
                    <Link to={`/products/${movie._id}`} className="flex items-center justify-center border-solid border-cyan-500 rounded-md border bg-white px-4 py-3 text-base font-medium text-cyan-500 hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Learn More</Link>
                  </div>                  
                  </div>
              </div>
  
                </>
             })}
        </>
     );
}

export default DisplayData;