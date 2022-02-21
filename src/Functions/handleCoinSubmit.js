import { getInfo } from '../API/api';
import * as actions from '../Store/actions';

async function handleCoinSubmit(id, dispatch, target) {
  const coininf = await getInfo(`assets/${id}`);
  const input = target.querySelector('input');
  const count = Number(input.value);
  if (count === 0 || count === ' ') return;
  input.value = '';
  const price = Number(coininf.priceUsd);
  const totalPrice = price * count;
  const { name } = coininf;

  dispatch(actions.addCoin({
    title: {
      name,
      count,
      priceUsd: price,
      totalpriceUsd: totalPrice,
      key: id,
    },
  }));
}

export default handleCoinSubmit;
