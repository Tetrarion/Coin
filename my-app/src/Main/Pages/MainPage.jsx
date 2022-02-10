import { useEffect, useState } from "react";
import { GetInfo } from "../../API/api";
import CreateBlock from '../../Components/coinsblock';
import CreateHead from "../../Components/coinshead";
import CreateScroll from "../../Components/coinsscroll";
import { choose } from "../../Functions/Choose";
import { useDispatch } from "react-redux";
import * as actions from "../../Store/actions";
import { Fixed } from "../../Functions/Fixed";

export function MainPage() {
    const minute = 6e4;
    const [coins, SetCoins] = useState('');
    const [page, SetPage] = useState(1);
    const [time, SetTime] = useState(0);
    const dispatch = useDispatch();
    

    useEffect(async () => {
        let coinsinf = await GetInfo('assets');
        let pages = choose(page);
        SetCoins(coinsinf.map((coin, index) => {
            if (index > pages[0] && index < pages[1]){
                return (
                <CreateBlock
                id={coin.id}
                rank={coin.rank}
                name={coin.name}
                symbol={coin.symbol}
                priceUsd={coin.priceUsd}
                marketCapUsd={coin.marketCapUsd}
                vwap24Hr={coin.vwap24Hr}
                supply={coin.supply}
                maxSupply={coin.maxSupply}
                volumeUsd24Hr={coin.volumeUsd24Hr}
                changePercent24Hr={coin.changePercent24Hr}
                handleTaskSubmit={handleTaskSubmit}
            />
                )
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
                <CreateHead/>
                {coins}
                <CreateScroll click={click}/>
            </div>
        </div>

    );
}