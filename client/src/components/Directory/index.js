// import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import DisplayData from '../DisplayData'; import { Link } from 'react-router-dom';

function Directory() {

    return ( 
        <>

            <section className="bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6 pt-28 dark:bg-gray-900">
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Browse Our Courses</h1>       
                    <div className="mt-8 lg:-mx-12 lg:flex xl:mt-16">
                    <div className="lg:mx-12">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>
            
                        <div className="mt-4 space-y-4 lg:mt-8">
                        <Link to="/products/" className="block text-base font-semibold leading-7 text-amber-600">Web design</Link>
                        <Link to="/products/" className="block text-base font-semibold leading-7 text-gray-600">App design</Link>
                        <Link to="/products/" className="block text-base font-semibold leading-7 text-gray-600">Branding</Link>
                        <Link to="/products/" className="block text-base font-semibold leading-7 text-gray-600">Animation</Link>
                        </div>
                    </div>
            
                    <div className="mt-8 flex-1 lg:mx-12 lg:mt-0">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                            {/* Display Data */}
                            <DisplayData />
                        
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>

     );
}

export default Directory;