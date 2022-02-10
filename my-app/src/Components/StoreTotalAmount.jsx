import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fixed } from "../Functions/Fixed";

const TotalAmount = ({ tasks }) => {
    let Price = 0;

    const { id, name, count, price } = tasks;
    const [totalprice, SetTotalPrice] = useState(0);

    useEffect(() => {
        if (!tasks.length) return;
        for (let task of tasks){
            Price = Price + Number(task.price);
        }
        let price = Fixed(Price);
        SetTotalPrice(price);
    });

    return (
        <div className="row my-1 text-center">
            <div className="col-lg-12">
                Total amount: ${totalprice}
            </div>
        </div>
    )
}
export default TotalAmount;