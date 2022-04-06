import getInfo from './API/api.js';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import { schema } from './schema.js';
import getFixedHistory from './utilities/getHistory.js';
import { sortCoins } from './utilities/sortCoins.js';

const resolvers = {
  Query: {
    getCoin: async ({ id }) => {
      const responce = await getInfo(`assets/${id}`);
      return responce;
    },
    getCurrentCoins: async ({ firstIndex, coinsPerPage }) => {
      const responce = await getInfo(`assets?offset=${firstIndex}&limit=${coinsPerPage}`);
      return responce;
    },
    getRate: async ({ id }) => {
      const responce = await getInfo(`rates/${id}`);
      return responce;
    },
    getAllRates: async () => {
      const responce = await getInfo(`rates`);
      return responce;
    },
    getHistory: async ({ id, interval }) => {
      let responce = await getInfo(`assets/${id}/history?interval=${interval}`);
      responce = getFixedHistory(responce, interval);
      return responce;
    },
    getCurrentSearchedCoins: async ({ search, firstIndex, coinsPerPage }) => {
      const responce = await getInfo(`assets?search=${search}&offset=${firstIndex}&limit=${coinsPerPage}`);
      return responce;
    },
    getSearchedCoins: async ({ search }) => {
      const responce = await getInfo(`assets?search=${search}&limit=2000`);
      return responce;
    },
    getCurrentSortedCoins: async ({ sortingName, firstIndex, coinsPerPage }) => {
      let responce = await getInfo('assets?limit=2000');
      responce = sortCoins(sortingName, responce, firstIndex, coinsPerPage);
      return responce;
    },
  }
}

const server = new ApolloServer({ 
  typeDefs: schema, 
  resolvers, 
});

await server.start();

const app = express();

app.use(cors());

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: process.env.PORT || 4000 }).then(({ url }) => console.log(`Server ready at ${url}`));
