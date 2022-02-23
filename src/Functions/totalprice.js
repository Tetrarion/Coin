function totalPrice(tasks) {
  let price = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const task of tasks) {
    price += task.coinTotalPrice;
  }
  return price;
}

export default totalPrice;
