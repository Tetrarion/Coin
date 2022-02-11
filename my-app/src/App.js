import ListPage from "./Main/Pages/ListPage";
import './Styles/styles.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import StorePage from "./Main/Pages/StorePage";
import InfoPage from "./Main/Pages/InfoPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage/>} />
        <Route path="/storepage" element={<StorePage/>} />
        <Route path="/infopage/:id" element={<InfoPage/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
