import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetInfo } from "../../API/api";
import { Fixed } from "../../Functions/fixed";
import History from "../../Components/InfoPageComponents/History";

export default function InfoPage(){
    const [info, SetInfo] = useState('');

    const params = useParams();
    const prodId = params.id;

    useEffect(async () => {
        let coininf = await GetInfo(`assets/${prodId}`);
        
        SetInfo(() => 
            <div className="container">
                <div className="row py-3">
                    <div className="col-lg-2">
                        <div>
                            {coininf.name}
                        </div>
                        <div>
                            {coininf.symbol}
                        </div>
                    </div>
                    <div className="col-lg-2">
                        priceUsd: ${Fixed(coininf.priceUsd)}
                    </div>
                    </div>
                <div className="row py-3">
                    <div className="col-lg">
                        marketCapUsd: ${Fixed(coininf.marketCapUsd)}
                    </div>
                    <div className="col-lg">
                        vwap24Hr: ${Fixed(coininf.vwap24Hr)}
                    </div>
                    <div className="col-lg">
                        supply: ${Fixed(coininf.supply)}
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-lg">
                        maxSupply: ${Fixed(coininf.maxSupply)}
                    </div>
                    <div className="col-lg">
                        olumeUsd24Hr: ${Fixed(coininf.volumeUsd24Hr)}
                    </div>
                    <div className="col-lg">
                        changePercent24Hr: {Fixed(coininf.changePercent24Hr)}%  
                    </div>
                </div>
            </div>
        );
    }, []);

    return (
        <div className="info">
            {info}
            <History prodId={prodId}/>
        </div>
    )
}