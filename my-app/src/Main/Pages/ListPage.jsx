import { useState } from "react";
import CoinBlock from '../../Components/ListPageComponents/CoinBlock';
import Header from "../../Components/ListPageComponents/Header";
import Pagination from "../../Components/ListPageComponents/Pagination";
import { useDispatch } from "react-redux";
import { handleCoinSubmit } from "../../Functions/handleCoinSubmit";

export default function ListPage ({ coins, tasks }) {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [coinsPerPage] = useState(10);

    const dispatch = useDispatch();    

    const lastCoinsIndex = currentPage * coinsPerPage;
    const firstCoinsIndex = (currentPage * coinsPerPage) - coinsPerPage;
    const currentCoins = coins.slice(firstCoinsIndex, lastCoinsIndex);

    const pagination = (pageNamber) => setCurrentPage(pageNamber);

    return (
        <div className="list-page">
            <div className="container">
                <Header tasks={ tasks }/>
                <CoinBlock coins={currentCoins} handleCoinSubmit={(e) => {handleCoinSubmit(e.target.parentElement.parentElement.id, dispatch)}}/> 
                <Pagination coinsPerPage={coinsPerPage} totalCoins={coins.length} pagination={pagination}/>
            </div>
        </div>

    );
}