import Directory from "../../components/Directory";
import '../../default.scss';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import bannerimage from '../../education.jpg';
import student from '../../student.jpg';

const features = [
    {
      name: 'Browse Collection.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Purchase Courses.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Expand your mind.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
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
        <div className="bg-white">
   

      <div className="relative p-14">
        <div className="container rounded-xl flex lg:flex-row xl:flex-row bg-gray-100">
          <div className="basis-1/2 hidden xs:hidden sm:hidden md:hidden xl:flex lg:flex">
            <img src={bannerimage} className="rounded-xl" />
          </div>
          <div className="lg:basis-1/2 md:basis-full sm:basis-full xs:basis-full basis-full">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 flex-col">
              <div className="hidden sm:mb-8 sm:flex sm:justify-start">
                <div className="relative rounded-full ml-5 px-3 py-1 text-sm leading-2 text-white bg-blue-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Browse our catalog of courses.{' '}
                  <Link to="/products/" className="font-semibold text-white">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Go to Courses <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="text-left p-4">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Courses to expand your technical journey
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Find a new topic, continue expanding on your passions, enjoy an affordable collection of courses.
                </p>
                <div className="mt-10 flex items-center justify-start gap-x-6">
                  <Link
                    to="/products/"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Get Started
                  </Link>
                  {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
       
            <Directory />

        

            <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What our learners say</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={student}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Pay for what you want or sign up for a subscription to unlock all of BrainBee's courses.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
              repellendus etur quidem assumenda.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$30</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <Link
                  to="/products/"
                  className="mt-10 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Get access
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
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