import { useEffect, useState } from "react";
import HeaderBlocks from "../Components/Header/HeaderBlocks";
import { TotalPrice } from "../Functions/totalprice";
import {Link} from 'react-router-dom';

export default function Header ({ coins, tasks }) {
    const [totalprice, SetTotalPrice] = useState(0);

    let currentCoins = coins.slice(0, 3);

    useEffect(() => {
        if (!tasks.length) return SetTotalPrice(0);
        let totalprice = TotalPrice(tasks);
        SetTotalPrice(totalprice); 
    });

    return (
        <div className="header">
            <div className="container">
                <div className="row align-items-center mb-4 mt-2">
                    <HeaderBlocks currentCoins={currentCoins}/>
                    <div className="col-lg text-center">
                    <Link to={'/storepage'}>Store:</Link> ${totalprice}
                    </div>
                </div>
            </div>
        </div>
    )
}