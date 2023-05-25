// import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import DisplayData from '../DisplayData';

function Directory() {

   

    return ( 
        <>

            <section class="bg-white dark:bg-gray-900">
                <div class="container mx-auto px-6 pt-28 dark:bg-gray-900">
                    <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Browse Our Collection</h1>
            
                    <div class="mt-8 lg:-mx-12 lg:flex xl:mt-16">
                    <div class="lg:mx-12">
                        <h1 class="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>
            
                        <div class="mt-4 space-y-4 lg:mt-8">
                        <a href="#" class="block text-blue-500 hover:underline dark:text-blue-400">Web design</a>
                        <a href="#" class="block text-gray-500 hover:underline dark:text-gray-300">App design</a>
                        <a href="#" class="block text-gray-500 hover:underline dark:text-gray-300">Branding</a>
                        <a href="#" class="block text-gray-500 hover:underline dark:text-gray-300">Animation</a>
                        </div>
                    </div>
            
                    <div class="mt-8 flex-1 lg:mx-12 lg:mt-0">
                        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

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