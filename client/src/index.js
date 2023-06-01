import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// React
import { createRoot } from "react-dom/client";
// Apollo
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { makeVar } from '@apollo/client';
import { CustomInMemoryCache } from './components/Cache/Cache';


// Realm
import * as Realm from "realm-web";

export const APP_ID = process.env.REACT_APP_MONGO_ID;

// Connect to your MongoDB Realm app
const app = new Realm.App({ id: APP_ID });

// Create an anonymous credential
const credentials = Realm.Credentials.anonymous();

// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user. The logged in user will have a valid
    // access token.
    // const user = await app.logIn(credentials);
    // console.assert(user.id === app.currentUser.id);

    await app.logIn(Realm.Credentials.anonymous());

  } else {
    // An already logged in user's access token might be stale. To guarantee that the token is
    // valid, we refresh the user's custom data which also refreshes their access token.
    await app.currentUser.refreshCustomData();
  }
  
  return app.currentUser.accessToken;
}

export const itemsInCart = makeVar([]) // We start with no item selected


// const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: { // boilerplate
//         cartItemIds: {
//           read() {
//             return itemsInCart()
//           }
//         }
//       }
//     }
//   }
// })


// schema cached
// https://www.mongodb.com/community/forums/t/graphql-schema-update/5043

// Configure the ApolloClient to connect to your app's GraphQL endpoint
const client = new ApolloClient({
  link: new HttpLink({
    // uri: `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`,
    uri: `https://us-west-2.aws.realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`,
    // We define a custom fetch handler for the Apollo client that lets us authenticate GraphQL requests.
    // The function intercepts every Apollo HTTP request and adds an Authorization header with a valid
    // access token before sending the request.
    fetch: async (uri, options) => {
      console.log(uri)
      const accessToken = await getValidAccessToken();
      options.headers.Authorization = `Bearer ${accessToken}`;
      return fetch(uri, options);
    },
  }),
  cache: CustomInMemoryCache
});

client.resetStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
