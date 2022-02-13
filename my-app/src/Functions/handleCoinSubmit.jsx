import { getInfo } from "../API/api";
import { fixed } from "./fixed";
import * as actions from "../Store/actions";

export const handleCoinSubmit = async ( id, dispatch ) => {
    let coininf = await getInfo(`assets/${id}`);
    let count = window.prompt('How much?');
    let price = coininf.priceUsd*count;
    price = fixed(price);
    let name = coininf.name;
    dispatch(actions.addCoin({
      title: {
          name: name,
          count: count,
          priceUsd: price,
          key: id
      }
    }));
    
};