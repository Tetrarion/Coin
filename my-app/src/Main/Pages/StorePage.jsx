import CoinList from "../../Components/CoinList";
import { useSelector } from "react-redux";

export default function StorePage(props){
    const tasks = useSelector(state => state);

    return (
        <div className="store">
            <div className="container">
                <CoinList tasks={ tasks }/>
            </div>
        </div>
    )
}