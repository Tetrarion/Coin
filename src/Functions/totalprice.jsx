import { fixed } from "./fixed";

export function totalPrice(tasks){
    let price = 0;

    for (let task of tasks){
        price = price + Number(task.totalpriceUsd);
    }

    let totalprice = fixed(price);

    return totalprice;
}