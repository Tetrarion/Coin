import { useEffect, useState } from "react";
import { GetInfo } from "../../API/api";
import CreateBlock from '../../Components/coinsblock';
import CreateHead from "../../Components/coinshead";
import CreateScroll from "../../Components/coinsscroll";
import { choose } from "../../Functions/Choose";

export function MainPage() {
    const minute = 6e4;
    const [coins, SetCoins] = useState('');
    const [page, SetPage] = useState(1);
    const [time, SetTime] = useState(0);

    useEffect(async () => {
        let coinsinf = await GetInfo();
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
            />
                )
            }
        }
        ))
    },[page, time]);

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