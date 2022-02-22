import * as actions from '../Store/actions';

async function handleCoinSubmit(id, dispatch, target) {
  const input = target.querySelector('input');
  const count = Number(input.value);
  if (count === 0 || count === ' ') return;
  input.value = '';

  dispatch(actions.loadCoin({
    count,
    id,
  }));
}

export default handleCoinSubmit;
