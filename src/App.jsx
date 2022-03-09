import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListPage from './Main/Pages/ListPage';
import './Styles/styles.scss';
import StorePage from './Main/Pages/StorePage';
import InfoPage from './Main/Pages/InfoPage';
import getInfo from './API/api';
import Header from './Head/Header';
import Message from './Components/Message';

function App() {
  const [coins, setCoins] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const [rate, setRate] = useState({
    symbol: '$',
    value: 1,
  });

  const tasks = useSelector((state) => state);

  useEffect(() => {
    const getCoins = async () => {
      const response = await getInfo('assets/?offset=0&limit=4');
      setCoins(response);
      setTimeout(getCoins, 10000);
    };
    getCoins();
  }, []);

  const search = (text) => setSearchText(text);

  const takeCoinsPerPage = (number) => setCoinsPerPage(number);

  const getRate = (value, symbol) => setRate({
    symbol,
    value,
  });

  return (
    <BrowserRouter>
      <Header coins={coins} rate={rate} tasks={tasks} search={search} takeCoinsPerPage={takeCoinsPerPage} getRate={getRate} />
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
