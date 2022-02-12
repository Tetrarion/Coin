import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { TotalPrice } from "../../Functions/totalprice";

const TotalAmount = ({ tasks }) => {

    const [totalprice, SetTotalPrice] = useState(0);

    useEffect(() => {
        if (!tasks.length) return SetTotalPrice(0);
        let totalprice = TotalPrice(tasks);
        SetTotalPrice(totalprice);
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