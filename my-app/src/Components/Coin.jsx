import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCoin }  from "../Store/actions";

const Coin = ({ task }) => {

    const { id, name, count, price } = task;
    const dispatch = useDispatch();
    return (
        
                <div className="row" id={id}>
                    <div className='col-lg-1'>
                        {name}
                    </div>
                    <div className='col-lg-1'>
                        {count}
                    </div>
                    <div className='col-lg-1'>
                        {price}
                    </div>
                    <div className='col-lg-3'>
                        <span onClick={() => dispatch(removeCoin(id))}>Удалить</span>
                    </div>
                </div>
    
    )
}
export default Coin;