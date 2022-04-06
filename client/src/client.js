import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://coin-proxy-servere.herokuapp.com/',
  cache: new InMemoryCache(),
});
