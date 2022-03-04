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

  const tasks = useSelector((state) => state);

  useEffect(() => {
    const getCoins = async () => {
      const response = await getInfo('?offset=0&limit=100');
      setCoins(response);
      setTimeout(getCoins, 10000);
    };
    getCoins();
  }, []);

  return (
    <BrowserRouter>
      <Header coins={coins} tasks={tasks} />
      <Routes>
        <Route path="/*" element={<ListPage />} />
        <Route path="/storepage" element={<StorePage tasks={tasks} />} />
        <Route path="/infopage/:id" element={<InfoPage />} />
      </Routes>
      <Message />
    </BrowserRouter>

  );
}

export default App;
