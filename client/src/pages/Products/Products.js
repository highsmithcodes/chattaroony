import { QUERY_ALL_MOVIES } from "../../graphql-operations";
import { useQuery, gql, useMutation } from '@apollo/client';
import { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useReactiveVar } from "@apollo/client";
import { cartItemsVar } from '../../components/Cache/Cache';


export default function Products() {
  let navigate = useNavigate();
    const { loading, error, data, startPolling, stopPolling } = useQuery(QUERY_ALL_MOVIES)
    const [movie, setMovie] = useState([]);
    const CartItems = useReactiveVar(cartItemsVar);
    const moveId = movie._id
    // console.log("movieId",moveId)
    let isInCart = CartItems.some(movie => movie.id === moveId);

    const handleCartButtonClick = () => {
      cartItemsVar(
        isInCart ? CartItems.filter(movie => movie.id !== moveId) : [...CartItems, movie]
      );
      let path = `/cart/`; 
      navigate('/cart/');
    }


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

          <section class="bg-white">
         <div className="pt-6 lg:px-0 xl:px-0 px-4">
          <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
              <div class="text-xs text-black pb-4 text-gray-600"><Link to="/" className='text-gray-600'>Home</Link> <span class="px-1">/</span> Products</div>
            </div>
          </div>

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="mb-4 text-4xl tracking-tight font-bold text-center text-black">All Products</h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {data && data.movies.map((movie) => {
                    return   <>

                    <div className="p-8" key={movie._id}>
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
          </div>
        </div>
      {/* </div> */}
      </section>

      <section class="bg-gray-50">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required />
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
        </div>
      </section>
    
      </>
    )
  }