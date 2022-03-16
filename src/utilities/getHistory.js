import getInfo from '../API/api';
import fixed from './fixed';

export default async function getHistory(interval, id) {
  let truncatedArray = [];
  const dateInformation = await getInfo(`assets/${id}/history?interval=${interval}`);
  if (interval === 'd1') {
    truncatedArray = dateInformation.map((dateinfo) => {
      const container = {};
      container.priceUsd = fixed(dateinfo.priceUsd);
      container.date = dateinfo.date.substr(0, 10);
      return container;
    });
  } else {
    truncatedArray = dateInformation.map((dateinfo) => {
      const container = {};
      container.priceUsd = fixed(dateinfo.priceUsd);
      container.date = dateinfo.date.substr(11, 5);
      return container;
    });
  }
  return truncatedArray;
}
