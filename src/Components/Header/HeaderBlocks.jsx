import { fixed } from "../../Functions/fixed";

export default function HeaderBlocks ({ currentCoins }) {
    return (
        currentCoins.map(coin => (
            <div className="col-lg col-sm text-center">
                <div>
                     №{coin.rank} {coin.name}
                </div>
                <div>
                    ${fixed(coin.priceUsd)}
                </div>
            </div>
        ))
    )
}