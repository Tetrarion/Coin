import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import { TotalPrice } from "../../Functions/totalprice";

export default function Header({ tasks }){
    const [totalprice, SetTotalPrice] = useState(0);


    useEffect(() => {
        if (!tasks.length) return SetTotalPrice(0);
        let totalprice = TotalPrice(tasks);
        SetTotalPrice(totalprice);
    });


    return (
        <div className="head">
            <div className="row">
                <div className="col-lg text-center">
                    Rank
                </div>
                <div className="col-lg-2 text-center">
                    Name
                </div>
                <div className="col-lg text-center">
                    Price
                </div>
                <div className="col-lg text-center">
                    MarketCap
                </div>
                <div className="col-lg text-center">
                    Vwap(24Hr)
                </div>
                <div className="col-lg text-center">
                    Supply
                </div>
                <div className="col-lg text-center">
                    MaxSupply
                </div>
                <div className="col-lg text-center">
                    Volume(24Hr)
                </div>
                <div className="col-lg text-center">
                    Change(24Hr)
                </div>
                <div className="col-lg text-center">
                    <Link to={'/storepage'}>Store </Link>(${totalprice})
                </div>
            </div>
        </div>
    )
}