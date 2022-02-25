import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ListPage from './Main/Pages/ListPage';
import './Styles/styles.scss';
import StorePage from './Main/Pages/StorePage';
import InfoPage from './Main/Pages/InfoPage';
import getInfo from './API/api';
import Header from './Head/Header';

function App() {
  const [coins, setCoins] = useState([]);

  const tasks = useSelector((state) => state);

  useEffect(() => {
    const getCoins = async () => {
      const response = await getInfo('assets');
      setCoins(response);
      setTimeout(getCoins, 1000);
    };
    getCoins();
  }, []);

  return (
    <BrowserRouter>
      <Header coins={coins} tasks={tasks} />
      <Routes>
        <Route path="/*" element={<ListPage coins={coins} tasks={tasks} />} />
        <Route path="/storepage" element={<StorePage tasks={tasks} />} />
        <Route path="/infopage/:id" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
