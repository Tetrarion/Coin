import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListPage from './Main/LitsPage/CoinsPage';
import { StorePage } from './Main/BasketPage/StorePage';
import InfoPage from './Main/InfoPage/InfoPage';
import Header from './Header/Header';
import Message from './Message';
import { GET_RATE_INFO } from './query/rates';
import { GET_CURRENT_COINS_FOR_HEADER } from './query/coins';
import './Styles/styles.scss';

const initialState = {
  id: 'united-states-dollar',
  value: 1,
  symbol: '$',
};

function App() {
  const [coins, setCoins] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const [rateId, setRateId] = useState('united-states-dollar');
  const [rate, setRate] = useState(initialState);
  const { loading, data } = useQuery(GET_RATE_INFO, {
    variables: {
      id: rateId,
    },
  });
  const { loading: loadingCurrentCoins, data: currentCoins } = useQuery(GET_CURRENT_COINS_FOR_HEADER, {
    variables: {
      firstIndex: 0,
      coinsPerPage: 4,
    },
    pollInterval: 10000,
  });

  const tasks = useSelector((state) => state);

  useEffect(() => {
    if (!loadingCurrentCoins) setCoins(currentCoins.getCurrentCoins);
  }, [currentCoins]);

  useEffect(() => {
    if (rateId && !loading) {
      const response = data.getRate;
      if (response) {
        setRate({
          id: response.id,
          value: response.rateUsd,
          symbol: response.currencySymbol,
        });
      }
    }
  }, [data]);

  const search = (text) => setSearchText(text);

  const takeCoinsPerPage = (number) => setCoinsPerPage(Number(number));

  const getRateId = (id) => setRateId(id);

  return (
    <BrowserRouter>
      <Header coins={coins} rate={rate} tasks={tasks} search={search} takeCoinsPerPage={takeCoinsPerPage} getRateId={getRateId} />
      <Routes>
        <Route path="/*" element={<ListPage searchText={searchText} coinsPerPage={coinsPerPage} rate={rate} />} />
        <Route path="/storepage" element={<StorePage tasks={tasks} />} />
        <Route path="/infopage/:id" element={<InfoPage rate={rate} />} />
      </Routes>
      <Message />
    </BrowserRouter>

  );
}

export default App;
