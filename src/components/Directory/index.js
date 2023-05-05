import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import DisplayData from '../DisplayData';
import * as dotenv from 'dotenv';
dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL;

function Directory() {

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: DATABASE_URL
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