import { GetInfo } from "../API/api";
import { Fixed } from "./fixed";
import * as actions from "../Store/actions";

export const handleCoinSubmit = async ( id, dispatch ) => {

    let coininf = await GetInfo(`assets/${id}`);
    let count = window.prompt('How much?');
    let price = coininf.priceUsd*count;
    price = Fixed(price);
    let name = coininf.name;
    dispatch(actions.addCoin({
      title: {
          name: name,
          count: count,
          price: price,
          key: id
      }
    }));
    
};