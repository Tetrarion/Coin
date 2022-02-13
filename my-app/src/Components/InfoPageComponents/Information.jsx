import { Fixed } from "../../Functions/fixed"

export default function Information ({ coininf, handleCoinSubmit }) {
    
    return (
        <div className="container">
            <div className="row py-3 align-items-center">
                <div className="col-lg">
                    <div>
                        {coininf.name}
                    </div>
                    <div>
                        {coininf.symbol}
                    </div>
                </div>
                <div className="col-lg">
                    priceUsd: ${Fixed(coininf.priceUsd)}
                </div>
                <div className="col-lg ">
                    <button onClick={handleCoinSubmit}>+</button>
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
    )
}