import { Fixed } from '../../Functions/fixed';
import { Link } from 'react-router-dom';

export default function CoinBlock ({ coins, handleCoinSubmit }) {

    return (
        <div className="coins-block">
            {
                coins.map(coin => (
                    <div className="row py-3 align-items-center" id={coin.id} key={coin.id}>
                            <div className="col-lg text-center">
                                {coin.rank}
                            </div>
                            <div className="col-lg-2 text-center">
                            <Link to={`/infopage/${coin.id}`} style={{ textDecoration: 'none', color: 'black'}}><div>
                                    {coin.name}
                                </div>
                                <div>
                                    {coin.symbol}
                                </div></Link>
                            </div>
                            <div className="col-lg text-center">
                                ${Fixed(coin.priceUsd)}
                            </div>
                            <div className="col-lg text-center">
                                ${Fixed(coin.marketCapUsd)}
                            </div>
                            <div className="col-lg text-center">
                                ${Fixed(coin.vwap24Hr)}
                            </div>
                            <div className="col-lg text-center">
                                ${Fixed(coin.supply)}
                            </div>
                            <div className="col-lg text-center">
                                ${Fixed(coin.maxSupply)}
                            </div>
                            <div className="col-lg text-center">
                                ${Fixed(coin.volumeUsd24Hr)}
                            </div>
                            <div className="col-lg text-center">
                                {Fixed(coin.changePercent24Hr)}%
                            </div>
                            <div className="col-lg text-center">
                                <button onClick={handleCoinSubmit}>+</button>
                            </div>
                        </div>
                ))
            }
        </div>
    )
}