import getInfo from './API/api.js';
import { ApolloServer } from 'apollo-server';
import { schema } from './schema.js';
import getFixedHistory from './utilities/getHistory.js';
import { sortCoins } from './utilities/sortCoins.js';

const resolvers = {
  Query: {
    getCoin: async (_, { id }) => {
      const responce = await getInfo(`assets/${id}`);
      return responce;
    },
    getCurrentCoins: async (_, { firstIndex, coinsPerPage }) => {
      const responce = await getInfo(`assets?offset=${firstIndex}&limit=${coinsPerPage}`);
      return responce;
    },
    getRate: async (_, { id }) => {
      const responce = await getInfo(`rates/${id}`);
      return responce;
    },
    getAllRates: async () => {
      const responce = await getInfo(`rates`);
      return responce;
    },
    getHistory: async (_, { id, interval }) => {
      let responce = await getInfo(`assets/${id}/history?interval=${interval}`);
      responce = getFixedHistory(responce, interval);
      return responce;
    },
    getCurrentSearchedCoins: async (_, { search, firstIndex, coinsPerPage }) => {
      const responce = await getInfo(`assets?search=${search}&offset=${firstIndex}&limit=${coinsPerPage}`);
      return responce;
    },
    getSearchedCoins: async (_, { search }) => {
      const responce = await getInfo(`assets?search=${search}&limit=2000`);
      return responce;
    },
    getCurrentSortedCoins: async (_, { sortingName, firstIndex, coinsPerPage }) => {
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

app.listen({ port: process.env.PORT || 4000 });
