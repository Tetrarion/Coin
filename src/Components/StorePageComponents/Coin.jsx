import React from "react";
import { useDispatch } from "react-redux";
import { removeCoin }  from "../../Store/actions";

const Coin = ({ task }) => {
    const { id, name, count, priceUsd, totalpriceUsd } = task;
    
    const dispatch = useDispatch();

    return (
        <div className="row my-1" id={id}>
            <div className='col-lg col-sm'>
                {name}
            </div>
            <div className='col-lg col-sm'>
                {count}
            </div>
            <div className='col-lg col-sm'>
                ${priceUsd}
            </div>
            <div className='col-lg col-sm'>
                ${totalpriceUsd}
            </div>
            <div className='col-lg col-sm'>
                <span onClick={() => dispatch(removeCoin(id))}>Remove</span>
            </div>
        </div>
    
    )
}
export default Coin;