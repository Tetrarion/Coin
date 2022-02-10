import React from "react";
import { useDispatch } from "react-redux";
import { removeCoin }  from "../Store/actions";

const Coin = ({ task }) => {

    const { id, name, count, price } = task;
    const dispatch = useDispatch();
    return (
        
                <div className="row my-1" id={id}>
                    <div className='col-lg-3'>
                        {name}
                    </div>
                    <div className='col-lg-3'>
                        {count}
                    </div>
                    <div className='col-lg-3'>
                        ${price}
                    </div>
                    <div className='col-lg'>
                        <span onClick={() => dispatch(removeCoin(id))}>Удалить</span>
                    </div>
                </div>
    
    )
}
export default Coin;