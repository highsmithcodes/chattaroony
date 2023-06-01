import { makeVar, InMemoryCache } from '@apollo/client';

export const cartItemsVar = makeVar([]);

export const CustomInMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cartItemIds: {
          read() {
            return cartItemsVar();
          },
        },
      },
    },
  },
});