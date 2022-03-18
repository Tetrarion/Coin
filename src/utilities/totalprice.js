function getTotalPrice(tasks) {
  let price = 0;

  tasks.forEach((task) => {
    price += task.coinTotalPriceUsd;
  });

  return price;
}

export default getTotalPrice;
