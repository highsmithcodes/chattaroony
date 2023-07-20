import { gql, useQuery  } from '@apollo/client';
import { GET_CART_ITEMS } from '../../graphql-operations';
import { Link } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/outline'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { cartItemsVar } from '../../components/Cache/Cache';
import { useReactiveVar } from "@apollo/client";
import getStripe from '../../lib/getStripe';
// import dotenv from 'dotenv';
// dotenv.config();

async function handleCheckout() {
  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout({
    lineItems: [
      {
        price: process.env.REACT_APP_PUBLIC_STRIPE_PRICE_ID,
        quantity: 1,
      },
    ],
    mode: 'payment',
    successUrl: `${window.location.href}/success`,
    cancelUrl: `${window.location.href}/cancel`,
    customerEmail: 'customer@email.com',
  });
  console.warn(error.message);
}

function Cart() {

  const { postId } = useParams();
  // const postIdHardcoded = '646e68ea58db9b5d3b8cc499';
  console.log('postId:', postId);

  const { loading, error, data } = useQuery(GET_CART_ITEMS);

  // if(loading) return "Loading Cart!";
  // if(error) return <p>Error: {error.message}</p>

  const [movie, setMovie] = useState([]);

  // Access movie data
  // const movie = data?.movie;

  // Cart Functionality
  const CartItems = useReactiveVar(cartItemsVar);
  const moveId = movie._id
  let isInCart = CartItems.some(movie => movie._id === moveId);

  useEffect(() => {
    console.log('code', process.env.REACT_APP_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    if(data) {
      setMovie(data);
    }
  }, [data])


  const handleCartButtonClick = () => {
    // cartItemsVar(
    //   CartItems.filter(movie)
    // );
    // console.log('working')
  }



  return (
    <>
     <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-center">
      <h4>Cart</h4>
      {data && data.cartItems.length === 0 ? (
        <p className='pb-5'>There are no items in your cart!</p>
      ) : (<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-2xl lg:px-8 text-center'>
        <ul role="list" className="divide-y divide-blue-200 bg-gray-50 p-4 mb-5">
          {data && data.cartItems.map((item) => (
            <li key={item.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex gap-x-4 justify-center items-center">
              <form>
              <button onClick={handleCartButtonClick}>
              <XCircleIcon className='h-5 w-5 flex-shrink-0'
                    aria-hidden="true" /></button>
                    </form>
              <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={item.thumbnail} alt="" />
            </div><div className="hidden sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{item.title}</p>
              <div className="mt-1 flex items-center gap-x-1.5">
           
                <p className="text-xs leading-5 text-gray-500">$30.00</p>
              </div>
 
          </div>
            </li>

          ))}
        </ul>
        <button
                onClick={handleCheckout}
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Checkout
              </button></div>
      )}
      </div>
      </div>

      
    </>
  )

}

export default Cart;