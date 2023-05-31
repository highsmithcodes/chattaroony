import { QUERY_ALL_MOVIES } from "../../graphql-operations";
import { useQuery, gql, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


export default function Products() {

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
            
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Products</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {data && data.movies.map((movie) => {
                    return   <>
                     <Link to={"/products" + movie._id}>
                    <div className="p-8" key={movie._id}>
                    <div className="bg-white max-w-2xl rounded-3xl ring-1 ring-gray-200 p-5 lg:mx-0 lg:flex lg:max-w-none">
                  <img className="h-96 w-full rounded-lg object-cover" src={movie.thumbnail} alt="" style={{ width: 100, height: 100, margin: '0 auto' }} />
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold capitalize text-gray-800 dark:text-white">{movie.title}</h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-500 dark:text-blue-400">{movie.type}</p>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 mb-5">{movie.description}</p>
                  <Link  to={`/products/${movie._id}`} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Learn More</Link>
              </div>
              </Link>
              </>
            })}
          </div>
        </div>
      </div>
    
      </>
    )
  }