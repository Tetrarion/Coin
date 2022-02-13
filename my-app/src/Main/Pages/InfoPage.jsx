import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetInfo } from "../../API/api";
import History from "../../Components/InfoPageComponents/History";
import { useDispatch } from "react-redux";
import Information from "../../Components/InfoPageComponents/Information";
import { handleCoinSubmit } from "../../Functions/handleCoinSubmit";

export default function InfoPage(){
    const [info, SetInfo] = useState('');

    const dispatch = useDispatch(); 

    const params = useParams();
    const prodId = params.id;

    useEffect(() => {
        const getInfo = async () => {
            let coininf = await GetInfo(`assets/${prodId}`); 
            SetInfo(coininf);
        };
        getInfo();
    }, []);

    return (
        <div className="info-page">
            <Information coininf={info} handleCoinSubmit={() => {handleCoinSubmit(prodId, dispatch)}}/>
            <History prodId={prodId}/>
        </div>
    )
}