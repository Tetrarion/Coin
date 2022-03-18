import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListPage from './Main/LitsPage/ListPage';
import { StorePage } from './Main/BasketPage/StorePage';
import InfoPage from './Main/InfoPage/InfoPage';
import getInfo from './API/api';
import Header from './Header/Header';
import Message from './Message';
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
  const [rateId, setRateId] = useState('');
  const [rate, setRate] = useState(initialState);

  const tasks = useSelector((state) => state);

  useEffect(() => {
    const getCoins = async () => {
      const response = await getInfo('assets/?offset=0&limit=4');
      setCoins(response);
      setTimeout(getCoins, 10000);
    };
    getCoins();
  }, []);

  useEffect(() => {
    const getRate = async () => {
      if (rateId) {
        const response = await getInfo(`rates/${rateId}`);
        if (response) {
          setRate({
            id: response.id,
            value: response.rateUsd,
            symbol: response.currencySymbol,
          });
        }
      }
    };
    getRate();
  }, [rateId]);

  const search = (text) => setSearchText(text);

  const takeCoinsPerPage = (number) => setCoinsPerPage(number);

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
