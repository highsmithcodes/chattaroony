import Directory from "../../components/Directory";
import '../../default.scss';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import bannerimage from '../../education.jpg';
import student from '../../faq_graphic.jpeg';

const features = [
    {
      name: 'Browse Collection.',
      description:
        'Our courses come with relevant information matching industry standards practiced today.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Purchase Courses.',
      description: 'Affordable and educational, BrainBee has the courses you need to succeed in your technical field.',
      icon: LockClosedIcon,
    },
    {
      name: 'Expand your mind.',
      description: 'Modern information in courses that prepare you for the real world.',
      icon: ServerIcon,
    },
  ]

  const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
  ]
function Homepage() {
    return ( 
        <>
 
      <div
        class="bg-neutral-100 px-6 py-60 text-center text-neutral-800 bg-gradient-to-b from-cyan-500 to-blue-500">
        <h1 class="mb-6 text-5xl font-bold text-white">Discover. Learn. Enjoy</h1>
        <h3 class="mb-8 text-3xl font-light text-white">Courses for creatives around the world</h3>
        <Link  to="/products/" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-cyan-500 shadow-sm hover:text-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Browse Products</Link>
      </div>

      <div className="mx-auto max-w-lg" id="neg-form"> 
        <div class="bg-white py-5 px-10 rounded-3xl shadow-md my-5">
          <h3 class="mb-8 text-xl font-bold text-black text-center">Sign up for our email list!</h3>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
            </div>
            <input type="text" id="email-address-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" />
          </div>
        </div>
      </div>
       
      <Directory />

      <div class="bg-neutral-100 my-10 px-6 py-20 text-center text-neutral-800 bg-gradient-to-b from-cyan-500 to-blue-500">
        <div className="mx-auto max-w-7xl">  
          <h1 class="text-5xl font-bold text-white">How does it work?</h1>  


          <div className="mx-auto max-w-4xl py-20"> 
          <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
              {features.map((feature) => (
                  <li class="flex items-center space-x-3 relative pl-10 pb-5" key={feature.name}>
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-8 w-8 text-white" aria-hidden="true" />
                    </dt>{' '}
                    <div class="flex flex-col text-white">
                    <div class="text-3xl text-white font-bold pb-4">{feature.name}</div>
                    <dd className="inline">{feature.description}</dd>
                    </div>
                  </li>
                ))}
          </ul>
          </div>


        </div>
      </div>


      <div class="my-10 px-6 py-40 mx-auto max-w-7xl">
        <div class="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <h3 class="mb-8 text-3xl font-bold text-black">Frequently Asked Questions</h3>
            <img src={student} alt="student" />
          </div>
          <div class="flex flex-col justify-center content-center">
            <div id="accordion-collapse" data-accordion="collapse">
              <h2 id="accordion-collapse-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                  <span>What is BrainBee?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">BrainBee is an educational platform of tech tutorials ranging from marketing to data science to coding.</p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-2">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                  <span>How many courses does BrainBee offer</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">We're a relatively new platform, so our catalog is limited but if you check back frequently you'll find new courses available.</p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                  <span>What makes BrainBee tutorials different?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that we stay up to date with trends in technology and our courses reflect that.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All Access Pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pay for what you want or sign up for a subscription to unlock all of BrainBee's courses.
          </p>
        </div>
        <div className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
                Instead of paying for individual courses, pay for a lifetime membership and gain access to everything unlimited.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-cyan-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-cyan-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 ">
            <div className="rounded-2xl bg-cyan-500 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-white">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">$100</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-white">USD</span>
                </p>
                <Link
                  to="/products/"
                  className="mt-10 block w-full rounded-md bg-gray-50 px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get access
                </Link>
                <p className="mt-6 text-xs leading-5 text-white">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
     );
}

export default Homepage;