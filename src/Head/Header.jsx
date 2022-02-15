import { useEffect, useState } from "react";
import HeaderBlocks from "../Components/Header/HeaderBlocks";
import { totalPrice } from "../Functions/totalprice";
import {Link} from 'react-router-dom';
import { priceDiff } from "../Functions/priceDiff"; 
import { fixed } from "../Functions/fixed";

export default function Header ({ coins, tasks }) {
    const [totalprice, SetTotalPrice] = useState(0);
    const [priceDifferences, setPriceDifferences] = useState(null);
    const [priceProcent, setPriceProcent] = useState(null);

    let currentCoins = coins.slice(0, 3);

    const getUpdateCoins = () => {
        let array = [];
        tasks.forEach(task => {
            let updateCoins = coins.find(coin => coin.id === task.key);
            array.push(updateCoins);
        });
        return array;
    };

    const getProcent = (totalprice, priceDifferences) => {
        if (!tasks.length) return setPriceProcent(null);
        let procent = priceDifferences / (totalprice / 100);
        setPriceProcent(fixed(procent));
    };

    const getTotalPrice = () => {
        if (!tasks.length) return SetTotalPrice(0);
        let totalprice = totalPrice(tasks);
        SetTotalPrice(totalprice); 
        return totalprice;
    };

    const getPriceDifferences = (totalprice) => {
        if (!tasks.length) return setPriceDifferences(null);
        let array = getUpdateCoins();
        let updateprice = priceDiff(array, tasks);
        let priceDifferences = totalprice - updateprice;
        priceDifferences = fixed(priceDifferences);
        setPriceDifferences(priceDifferences);
        return priceDifferences;
    };

    useEffect(() => {
        let totalprice = getTotalPrice();
        let priceDifferences = getPriceDifferences(totalprice);
        getProcent(totalprice, priceDifferences);
    });

    return (
        <div className="header">
            <div className="container">
                <div className="row align-items-center mb-4 mt-2">
                    <HeaderBlocks currentCoins={currentCoins}/>
                    <div className="col-lg col-sm text-center">
                        <Link to={'/*'}>List page</Link>
                    </div>
                    <div className="col-lg col-sm text-center">
                    <Link to={'/storepage'}>Store:</Link> ${totalprice} {priceDifferences} ({priceProcent}%)
                    </div>
                </div>
            </div>
        </div>
    )
}