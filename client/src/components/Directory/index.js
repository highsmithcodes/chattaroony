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

    const graphqlUri = `mongodb+srv://ezrahighsmith:t7UjAQ7NN37bV9Hw@cluster0.cyx9iuz.mongodb.net/?retryWrites=true&w=majority`;

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