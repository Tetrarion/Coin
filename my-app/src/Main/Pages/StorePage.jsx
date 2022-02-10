import CoinList from "../../Components/CoinList";
import { useSelector } from "react-redux";
import TotalAmount from "../../Components/StoreTotalAmount";

export default function StorePage(){
    const tasks = useSelector(state => state);

    return (
        <div className="store">
            <div className="container">
                <TotalAmount tasks={ tasks }/>
                <div className="row">
                    <div className="col-lg">
                        Name
                    </div>
                    <div className="col-lg">
                        Count
                    </div>
                    <div className="col-lg">
                        Price
                    </div>
                    <div className="col-lg">
                       
                    </div>
                </div>
                <CoinList tasks={ tasks }/>
            </div>
        </div>
    )
}