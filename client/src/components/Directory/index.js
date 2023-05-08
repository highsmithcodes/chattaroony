// import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import DisplayData from '../DisplayData';
// const dotenv = require('dotenv/config');
import * as Realm from "realm-web";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

function Directory() {

    const graphqlUri = `http://localhost:4000/`;

    const client = new ApolloClient({
        link: new HttpLink({
            uri: graphqlUri,
        }),
        cache: new InMemoryCache(),
    })
    

    return ( 
        <ApolloProvider client={client}>
            <div>
                <div>
                    <h1>List Of Movies</h1>
                    {/* Display Data */}
                    <DisplayData />
                </div>
            </div>
        </ApolloProvider>
     );
}

export default Directory;