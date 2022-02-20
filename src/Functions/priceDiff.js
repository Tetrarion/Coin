function priceDiff(array, tasks) {
  let price = 0;

  // eslint-disable-next-line no-restricted-syntax
  for (const task of tasks) {
    // eslint-disable-next-line no-restricted-syntax
    for (const element of array) {
      if (element !== undefined) {
        if (task.key === element.id) {
          price += (element.priceUsd * task.count);
        }
      }
    }
  }

  return price;
}

export default priceDiff;
