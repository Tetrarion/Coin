import { useEffect, useState } from "react";
import { GetInfo } from "../../API/api";
import CoinBlock from '../../Components/ListPageComponents/CoinBlock';
import Header from "../../Components/ListPageComponents/Header";
import Pagination from "../../Components/ListPageComponents/Pagination";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Store/actions";
import { Fixed } from "../../Functions/fixed";

export default function ListPage() {
    const minute = 6e4;
    
    const [coins, setCoins] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [time, setTime] = useState(0);
    const [loading, SetLoading] = useState(false);
    const [coinsPerPage] = useState(10);

    const tasks = useSelector(state => state);
    const dispatch = useDispatch();    

    useEffect(() => {
        const getCoins = async () => {
            SetLoading(true);
            let coinsInfo = await GetInfo('assets');
            setCoins(coinsInfo);
            SetLoading(false);
        };

        getCoins();
    }, []);

    const lastCoinsIndex = currentPage * coinsPerPage;
    const firstCoinsIndex = (currentPage * coinsPerPage) - coinsPerPage;
    const currentCoins = coins.slice(firstCoinsIndex, lastCoinsIndex);

    const pagination = (pageNamber) => setCurrentPage(pageNamber);
    

    const handleTaskSubmit = async (e) => {
        let coininf = await GetInfo(`assets/${e.target.parentElement.parentElement.id}`);
        let count = window.prompt('How much?');
        let price = coininf.priceUsd*count;
        price = Fixed(price);
        let name = coininf.name;
        dispatch(actions.addCoin({
          title: {
              name: name,
              count: count,
              price: price
          }
        }));
        
    };

    setInterval(() => {
        setTime(time + 1);
    }, minute);

    return (
        <div className="mainpage">
            <div className="container">
                <Header tasks={ tasks }/>
                <CoinBlock coins={currentCoins} handleTaskSubmit={handleTaskSubmit} loading={loading}/> 
                <Pagination coinsPerPage={coinsPerPage} totalCoins={coins.length} pagination={pagination}/>
            </div>
        </div>

    );
}