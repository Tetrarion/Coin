import { useState } from "react";
import CoinBlock from '../../Components/ListPageComponents/CoinBlock';
import Header from "../../Components/ListPageComponents/Header";
import Pagination from "../../Components/ListPageComponents/Pagination";
import { useDispatch } from "react-redux";
import { handleCoinSubmit } from "../../Functions/handleCoinSubmit";
import { showInputForCount } from "../../Functions/showInputForCount";

export default function ListPage ({ coins, tasks }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [coinsPerPage] = useState(18);

    const dispatch = useDispatch();    

    const lastCoinsIndex = currentPage * coinsPerPage;
    const firstCoinsIndex = (currentPage * coinsPerPage) - coinsPerPage;
    const currentCoins = coins.slice(firstCoinsIndex, lastCoinsIndex);

    const pagination = (pageNamber) => setCurrentPage(pageNamber);

    const clearText = (event) => {
        if (!Number(event.target.value)) {
            event.target.classList.add('error');
        } 
        else {
            if (event.target.classList.contains('error')){
                event.target.classList.remove('error');
            }
        }
    };

    return (
        <div className="list-page">
            <div className="container">
                <Header tasks={ tasks }/>
                <CoinBlock coins={currentCoins} clearText={clearText} handleCoinSubmit={(e) => handleCoinSubmit(e.target.parentElement.parentElement.parentElement.id, dispatch, e.target.parentElement)} showInputForCount={(event) => showInputForCount(event)}/> 
                <Pagination coinsPerPage={coinsPerPage} totalCoins={coins.length} pagination={pagination}/>
            </div>
        </div>

    );
}