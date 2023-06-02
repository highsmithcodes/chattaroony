import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { FIND_MOVIE_BY_ID } from "../../graphql-operations";
import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { GET_CART } from '../../graphql-operations';
import { cartItemsVar } from '../../components/Cache/Cache';
import { useReactiveVar } from "@apollo/client";
import {itemsInCart} from '../../index';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';


const product = {
  name: 'Basic Tee 6-Pack',
  price: '$30',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Products', href: '/products/' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Heavily reasearched topics',
    'Easy to follow tutorials',
    'Relevant & Marketable information',
    'Quality Product',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Single() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    const { postId } = useParams();
    // const postIdHardcoded = '646e68ea58db9b5d3b8cc499';
    console.log('postId:', postId);
  
    const { loading, error, data } = useQuery(FIND_MOVIE_BY_ID, {
      variables: { id: postId },
    });

    // if (loading) {
    //     return <p>Loading...</p>;
    // }
  
    // if (error) {
    //     return <p>Error: {error.message}</p>;
    // }
  
    // if (!data) {
    //   // Handle case when data or getMovie is undefined
    //   return <p>No movie data available.</p>;
    // }
    // if (data) {
    //   console.log(data);
    // }

    const [movie, setMovie] = useState([]);
  
    // Access movie data
    // const movie = data?.movie;

    // Cart Functionality
    const CartItems = useReactiveVar(cartItemsVar);
    const moveId = movie.id
    let isInCart = CartItems.some(movie => movie.id === moveId);

    useEffect(() => {
      if(data) {
        setMovie(data?.movie);
      }
    }, [data])


    const handleCartButtonClick = () => {
      cartItemsVar(
        isInCart ? CartItems.filter(movie => movie.id !== moveId) : [...CartItems, movie]
      );
      console.log('working')
    }

    // console.log('movie', movie.title);

    // useEffect(() => {
    //   (async () => {
    //     const users = await fetchUsers();
    //     setUsers(users);
    //   })();
    
    //   return () => {
    //     // this now gets called when the component unmounts
    //   };
    // }, []);

    

  return (
    <div className="bg-white">
    <div className="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          {product.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <Link to={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                  {breadcrumb.name}
                </Link>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          ))}
          <li className="text-sm">
            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
              {movie.title}
            </a>
          </li>
        </ol>
      </nav>

      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{movie.title}</h1>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
              <a href={reviews.href} className="ml-3 text-sm font-medium text-blue-600 hover:text-blue-500">
                {reviews.totalCount} reviews
              </a>
            </div>
          </div>

          <div className="mt-10">
           
          <button
        onClick={handleCartButtonClick}
        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
              { isInCart ? ("Remove from Cart") : ("Add to Cart")}
            </button>
          </div>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Description</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{movie.description}</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="text-gray-400">
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
}

export default Single;