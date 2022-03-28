function priceDiff(array, tasks, totalAmount) {
  console.log(totalAmount);
  let price = 0;

  tasks.forEach((task) => {
    array.forEach((element) => {
      if (element) {
        if (task.key === element.id) {
          price += (element.priceUsd * task.count);
        }
      }
    });
  });

  price = totalAmount - price;

  return price;
}

export default priceDiff;
