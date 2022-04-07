import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://serene-shore-47601.herokuapp.com/',
  cache: new InMemoryCache(),
});
