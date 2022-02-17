import { fixed } from "../../Functions/fixed";

export default function Information ({ coininf, handleCoinSubmit }) {
    return (
        <div className="container">
            <div className="row py-3 align-items-center">
                <div className="col-lg col-sm">
                    <div>
                        {coininf.name}
                    </div>
                    <div>
                        {coininf.symbol}
                    </div>
                </div>
                <div className="col-lg col-sm">
                    priceUsd: ${fixed(coininf.priceUsd)}
                </div>
                <div className="col-lg col-sm">
                    <input type="text"/>
                    <button onClick={handleCoinSubmit}>Add</button>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-lg col-sm">
                    marketCapUsd: ${fixed(coininf.marketCapUsd)}
                </div>
                <div className="col-lg col-sm">
                    vwap24Hr: ${fixed(coininf.vwap24Hr)}
                </div>
                <div className="col-lg col-sm">
                    supply: ${fixed(coininf.supply)}
                </div>
            </div>
            <div className="row py-3">
                <div className="col-lg col-sm">
                    maxSupply: ${fixed(coininf.maxSupply)}
                </div>
                <div className="col-lg col-sm">
                    olumeUsd24Hr: ${fixed(coininf.volumeUsd24Hr)}
                </div>
                <div className="col-lg col-sm">
                    changePercent24Hr: {fixed(coininf.changePercent24Hr)}%  
                </div>
            </div>
        </div>
    )
}