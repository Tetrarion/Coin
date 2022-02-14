import { fixed } from "./fixed";

export function priceDiff(array, tasks){
    let price = 0;

    for (let task of tasks){
        for (let element of array){
            if (element !== undefined){
                if (task.key === element.id){
                    price = price + (Number(element.priceUsd) * task.count);
                }
            }                         
        }
    }

    let totalprice = fixed(price);

    return totalprice;
}