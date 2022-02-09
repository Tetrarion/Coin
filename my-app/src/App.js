import { MainPage } from "./Main/Pages/MainPage";
import './Styles/styles.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import StorePage from "./Main/Pages/StorePage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/storepage" element={<StorePage/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
