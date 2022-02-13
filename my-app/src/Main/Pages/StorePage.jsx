import StoreCoinList from "../../Components/StorePageComponents/StoreCoinList";
import Header from "../../Components/StorePageComponents/Header";

export default function StorePage({ tasks }){
    return (
        <div className="store">
            <div className="container">
                <Header/>
                <StoreCoinList tasks={ tasks }/>
            </div>
        </div>
    )
}