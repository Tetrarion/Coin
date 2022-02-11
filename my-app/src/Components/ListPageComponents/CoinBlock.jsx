import { Fixed } from '../../Functions/fixed';
import { Link } from 'react-router-dom';

export default function CoinBlock(props){

    return (
        <div className="body">
            <div className="row py-3 align-items-center" id={props.coin.id} key={props.coin.id}>
                    <div className="col-lg text-center">
                        {props.rank}
                    </div>
                    <div className="col-lg-2 text-center">
                    <Link to={`/infopage/${props.coin.id}`} style={{ textDecoration: 'none', color: 'black'}}><div>
                            {props.coin.name}
                        </div>
                        <div>
                            {props.coin.symbol}
                        </div></Link>
                    </div>
                    <div className="col-lg text-center">
                        ${Fixed(props.coin.priceUsd)}
                    </div>
                    <div className="col-lg text-center">
                        ${Fixed(props.coin.marketCapUsd)}
                    </div>
                    <div className="col-lg text-center">
                        ${Fixed(props.coin.vwap24Hr)}
                    </div>
                    <div className="col-lg text-center">
                        ${Fixed(props.coin.supply)}
                    </div>
                    <div className="col-lg text-center">
                        ${Fixed(props.coin.maxSupply)}
                    </div>
                    <div className="col-lg text-center">
                        ${Fixed(props.coin.volumeUsd24Hr)}
                    </div>
                    <div className="col-lg text-center">
                        {Fixed(props.coin.changePercent24Hr)}%
                    </div>
                    <div className="col-lg text-center">
                        <button onClick={props.handleTaskSubmit}>+</button>
                    </div>
                </div>
            </div>
    )
}