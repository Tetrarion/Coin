import StoreCoinList from "../../Components/StorePageComponents/StoreCoinList";
import { useSelector } from "react-redux";
import TotalAmount from "../../Components/StorePageComponents/StoreTotalAmount";
import Header from "../../Components/StorePageComponents/Header";

export default function StorePage(){
    const tasks = useSelector(state => state);

    return (
        <div className="store">
            <div className="container">
                <TotalAmount tasks={ tasks }/>
                <Header/>
                <StoreCoinList tasks={ tasks }/>
            </div>
        </div>
    )
}