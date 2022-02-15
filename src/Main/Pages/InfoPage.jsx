import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getInfo } from "../../API/api";
import History from "../../Components/InfoPageComponents/History";
import { useDispatch } from "react-redux";
import Information from "../../Components/InfoPageComponents/Information";
import { handleCoinSubmit } from "../../Functions/handleCoinSubmit";

export default function InfoPage(){
    const [info, SetInfo] = useState('');

    const dispatch = useDispatch(); 

    const params = useParams();
    const prodId = params.id;

    const getInformation = async () => {
        let coininf = await getInfo(`assets/${prodId}`); 
        SetInfo(coininf);
    };

    useEffect(() => {
        getInformation();
    }, []);

    return (
        <div className="info-page">
            <Information coininf={info} handleCoinSubmit={(event) => {handleCoinSubmit(prodId, dispatch, event.target.parentElement)}}/>
            <History prodId={prodId}/>
        </div>
    )
}