function getTotalPrice(tasks) {
  let price = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const task of tasks) {
    price += task.coinTotalPriceUsd;
  }
  return price;
}

export default getTotalPrice;
