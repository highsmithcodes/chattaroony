import { useQuery, gql } from '@apollo/client';

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        getMovies {
            id
            title
        }
    }
`

function DisplayData() {

    const { data } = useQuery(QUERY_ALL_MOVIES);

    if(data) {
        // console.log(data);
    }

    return ( 
        <div>

        </div>
     );
}

export default DisplayData;