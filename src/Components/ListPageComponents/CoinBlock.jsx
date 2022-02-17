import { fixed } from '../../Functions/fixed';
import { Link } from 'react-router-dom';

export default function CoinBlock ({ coins, handleCoinSubmit, showInputForCount, clearText }) {
    return (
        <div className="coins-block">
            {
                coins.map(coin => (
                    <div className="row py-2 align-items-center" id={coin.id} key={coin.id} onClick={showInputForCount}>
                            <div className="col-lg col-sm text-center">
                                {coin.rank}
                            </div>
                            <div className="col-lg col-sm text-center">
                            <Link to={`/infopage/${coin.id}`} style={{ textDecoration: 'none', color: 'white'}}><div>
                                    {coin.name}
                                </div>
                                <div>
                                    {coin.symbol}
                                </div></Link>
                            </div>
                            <div className="col-lg col-sm text-center">
                                ${fixed(coin.priceUsd)}
                            </div>
                            <div className="col-lg col-sm text-center">
                                ${fixed(coin.marketCapUsd)}
                            </div>
                            <div className="col-lg col-sm text-center">
                                ${fixed(coin.vwap24Hr)}
                            </div>
                            <div className="col-lg col-sm text-center">
                                ${fixed(coin.supply)}
                            </div>
                            <div className="col-lg col-sm text-center">
                                ${fixed(coin.volumeUsd24Hr)}
                            </div>
                            <div className="col-lg col-sm text-center">
                                {fixed(coin.changePercent24Hr)}%
                            </div>
                            <div className="col-lg-12 col-sm-12 text-center">
                                <div className='display none'>
                                        <input type="text" onBlur={clearText}/>
                                        <button onClick={handleCoinSubmit}>Add</button>
                                </div>
                            </div>
                        </div>
                ))
            }
        </div>
    )
}