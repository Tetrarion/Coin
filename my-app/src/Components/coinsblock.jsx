import { Fixed } from '../Functions/Fixed';

export default function CreateBlock(props){

    return (
        <div className="body">
            <div className="row py-3 align-items-center" key={props.id}>
                    <div className="col-lg text-center">
                        {props.rank}
                    </div>
                    <div className="col-lg-2 text-center">
                        <div>
                            {props.name}
                        </div>
                        <div>
                            {props.symbol}
                        </div>
                    </div>
                    <div className="col-lg text-center">
                        ${Fixed(props.priceUsd)}
                    </div>
                    <div className="col-lg text-center">
                        ${Fixed(props.marketCapUsd)}
                    </div>
                    <div className="col-lg text-center">
                        ${Fixed(props.vwap24Hr)}
                    </div>
                    <div className="col-lg text-center">
                        ${Fixed(props.supply)}
                    </div>
                    <div className="col-lg text-center">
                        ${Fixed(props.maxSupply)}
                    </div>
                    <div className="col-lg text-center">
                        ${Fixed(props.volumeUsd24Hr)}
                    </div>
                    <div className="col-lg text-center">
                        {Fixed(props.changePercent24Hr)}%
                    </div>
                    <div className="col-lg text-center">
                        Add
                    </div>
                </div>
            </div>
    )
}