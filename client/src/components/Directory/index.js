import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import DisplayData from '../DisplayData';
const dotenv = require('dotenv/config');

function Directory() {

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: process.env.DATABASE_URL
    })

    return ( 
        <ApolloProvider client={client}>
            <div>
                <div>
                    <h1>List Of Movies</h1>
                    <DisplayData />
                </div>
            </div>
        </ApolloProvider>
     );
}

export default Directory;