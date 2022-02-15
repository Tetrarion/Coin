import { getInfo } from "../API/api";
import { fixed } from "./fixed";
import * as actions from "../Store/actions";

export const handleCoinSubmit = async ( id, dispatch, target ) => { 
    let coininf = await getInfo(`assets/${id}`);
    let input = target.querySelector('input');
    let count = input.value;
    input.value = '';
    
    if (!Number(count)) {
      alert('Please, enter integer or float value');
      return;
    }

    let price = fixed(coininf.priceUsd);
    let totalPrice = fixed((price * count));
    let name = coininf.name;

    dispatch(actions.addCoin({
      title: {
          name: name,
          count: count,
          priceUsd: price,
          totalpriceUsd: totalPrice,
          key: id
      }
    }));
    
};