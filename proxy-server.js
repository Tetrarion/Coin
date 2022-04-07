import getInfo from './API/api.js';
import express from 'express';
import cors from 'cors';
import {graphqlHTTP } from 'express-graphql';
import { schema } from './schema.js';
import getFixedHistory from './utilities/getHistory.js';
import { sortCoins } from './utilities/sortCoins.js';

const port = process.env.PORT || 4000

const root = {
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

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

server.listen(port);
