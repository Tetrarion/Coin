import { useEffect, useState } from "react";
import { GetInfo } from "../../API/api";
import CoinBlock from '../../Components/ListPageComponents/CoinBlock';
import Header from "../../Components/ListPageComponents/Header";
import Pagination from "../../Components/ListPageComponents/Pagination";
import { choose } from "../../Functions/choose";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Store/actions";
import { Fixed } from "../../Functions/fixed";

export default function ListPage() {
    const minute = 6e4;
    
    const [coins, SetCoins] = useState('');
    const [page, SetPage] = useState(1);
    const [time, SetTime] = useState(0);

    const tasks = useSelector(state => state);
    const dispatch = useDispatch();
    

    useEffect(async () => {
        let coinsinf = await GetInfo('assets');
        let pages = choose(page);
        SetCoins(coinsinf.map((coin, index) => {
            if (index > pages[0] && index < pages[1]){
                return <CoinBlock coin={coin} handleTaskSubmit={handleTaskSubmit}/>
            }
        }
        ))
    },[page, time]);

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

    function click(e){
        SetPage(e.target.innerHTML);
    }

    setInterval(() => {
        SetTime(time + 1);
    }, minute);

    return (
        <div className="mainpage">
            <div className="container">
                <Header tasks={ tasks }/>
                {coins}
                <Pagination click={click}/>
            </div>
        </div>

    );
}