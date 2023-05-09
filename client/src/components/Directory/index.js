// import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import DisplayData from '../DisplayData';

function Directory() {

   

    return ( 
      
        <div>
            <div>
                <h1>List Of Movies</h1>
                {/* Display Data */}
                <DisplayData />
            </div>
        </div>

     );
}

export default Directory;