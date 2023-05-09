import './default.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage/index';
import Registration from './pages/Registration';
import Login from './pages/Login/index';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Protected from './components/Protected';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from "apollo-link-context";
// Realm
import * as Realm from "realm-web";


const APP_ID = "data-tfgdc";

// Connect to your MongoDB Realm app
const app = new Realm.App(APP_ID);
// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user. The logged in user will have a valid
    // access token.
    await app.logIn(Realm.Credentials.anonymous());
  } else {
    // An already logged in user's access token might be stale. Tokens must be refreshed after 
    // 30 minutes. To guarantee that the token is valid, we refresh the user's access token.
    await app.currentUser.refreshAccessToken();
  }
  return app.currentUser.accessToken;
}
// Configure the ApolloClient to connect to your app's GraphQL endpoint
const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`,
    // We define a custom fetch handler for the Apollo client that lets us authenticate GraphQL requests.
    // The function intercepts every Apollo HTTP request and adds an Authorization header with a valid
    // access token before sending the request.
    fetch: async (uri, options) => {
      const accessToken = await getValidAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: new InMemoryCache(),
});



function App() {


  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AuthContextProvider>
          {/* Add Jest */}
          <Header/>
          <Routes>
            <Route exact path="/" element={<Homepage/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/account" element={<Protected><Account/></Protected>} />
          </Routes>
        </AuthContextProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
