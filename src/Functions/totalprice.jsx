function totalPrice(tasks) {
  let price = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const task of tasks) {
    const totalPriceUsd = Number(task.priceUsd * task.count);
    price += totalPriceUsd;
  }

  return price;
}

export default totalPrice;
