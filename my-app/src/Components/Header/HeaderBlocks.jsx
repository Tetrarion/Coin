import { Fixed } from "../../Functions/fixed";

export default function HeaderBlocks ({ currentCoins }) {

    return (
        currentCoins.map(coin => (
            <div className="col-lg text-center">
                <div>
                     №{coin.rank} {coin.name}
                </div>
                <div>
                    {Fixed(coin.priceUsd)}
                </div>
            </div>
        ))
    )
}