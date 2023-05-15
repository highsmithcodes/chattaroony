import { useQuery, gql, useMutation } from '@apollo/client';
import { useState } from 'react';
import { FIND_MOVIE, UPDATE_MOVIE } from "../graphql-operations";


const QUERY_ALL_MOVIES = gql`
    query GetAllMovies {
        movies {
            _id
            title
        }
    }
`

function DisplayData(props) {

    const APP_ID = process.env.REACT_APP_MONGO_ID;
    // console.log(APP_ID)

    const [searchText, setSearchText] = useState("Big Hero 6");
    const { loading, data } = useQuery(FIND_MOVIE, {
      variables: { query: { title: searchText } }
    });
  
    const movie = data ? data.movie : null;
    const [updateMovie, { loading: updating }] = useMutation(UPDATE_MOVIE);
    const [newTitleText, setNewTitleText] = useState("Add New Title Here");
    // const { data } = useQuery(QUERY_ALL_MOVIES);

    // if(data) {
    //     console.log('data', data);
    // }

    const updateMovieTitle = async () => {
        if (!movie) return;
        await updateMovie({
            variables: {
            query: { title: movie.title },
            set: { title: newTitleText }
            }
        });
        setSearchText(newTitleText);
    };

    return ( 
        <>
          <div className='text-5xl pb-4 mb-5'>Find a Movie and Change the title</div>
          <span className="subheading mb-3">
            The app automatically searches as you type
          </span>
          {/* Fix the case sensitivity when searching */}
          <div className="title-input">
            <input
              className="border-solid border-2 border-indigo-600 p-2"
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              type="text"
            />
          </div>
          {APP_ID === "data-tfgdc" ? (
            <>
            </>
          ) : (
            !loading &&
            !movie && <div className="status">No movie with that name in this database.</div>
          )}
          {movie && (
            <div>
              <div className='text-xl pb-4 font-bold text-center mt-4'>{movie.title}</div>
            <img alt={`Poster for ${movie.title}`} src={movie.poster} />
              <br />
              {!updating && (
                <div className="title-input mt-5 text-center">
                  <div className='text-xl mb-2 font-bold text-center mt-4'>Change <b>{movie.title}</b> movie title to:</div>
                  <input
                    type="text"
                    className="border-solid border-2 border-indigo-600 p-2 mt-4"
                    value={newTitleText}
                    onChange={e => setNewTitleText(e.target.value)}
                  />
                  <button
                    className="bg-gray-400 p-4 rounded-xl block mx-auto mt-4"
                    onClick={() => updateMovieTitle()}
                  >
                    Submit Title Change
                  </button>
                
                </div>
              )}
            </div>
          )}
            <ul className='list-disc'>
                {/* {data && data.movies.map((movie) => {
                    return <li>
                        <h4>{movie.title}</h4>
                    </li>
                })} */}
            </ul>
        </>
     );
}

export default DisplayData;