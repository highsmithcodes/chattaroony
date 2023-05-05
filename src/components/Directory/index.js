import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import DisplayData from '../DisplayData';

function Directory() {

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        uri: "mongodb://ezrahighsmith:t7UjAQ7NN37bV9Hw@cluster0.cyx9iuz.mongodb.net/?retryWrites=true&w=majority"
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