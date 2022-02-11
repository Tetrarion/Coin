import { Fixed } from "./fixed";

export function TotalPrice(tasks){
    let price = 0;

    for (let task of tasks){
        price = price + Number(task.price);
    }

    let totalprice = Fixed(price);

    return totalprice;
}