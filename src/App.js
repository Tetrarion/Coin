import ListPage from "./Main/Pages/ListPage";
import './Styles/styles.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import StorePage from "./Main/Pages/StorePage";
import InfoPage from "./Main/Pages/InfoPage";
import { getInfo } from "./API/api";
import { useEffect, useState } from "react";
import Header from "./Head/Header";
import { useSelector } from "react-redux";

function App() {
  const minute = 6e4;

  const [coins, setCoins] = useState([]);
  const [time, setTime] = useState(0);

  const tasks = useSelector(state => state);

  const getCoins = async () => {
    let coinsInfo = await getInfo('assets');
    setCoins(coinsInfo);
};

  useEffect(() => {
    getCoins();
  }, []);

  setInterval(() => {
    setTime(time + 1);
  }, minute);

  return (
    <BrowserRouter>
      <Header coins={coins} tasks={tasks}/>
      <Routes>
        <Route path="/*" element={<ListPage coins={coins} tasks={tasks}/>} />
        <Route path="/storepage" element={<StorePage tasks={tasks}/>} />
        <Route path="/infopage/:id" element={<InfoPage/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
