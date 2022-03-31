import React from 'react';
import { History } from '../Main/InfoPage/components/History';

export default {

  title: 'Graph',
  component: History,
  argTypes: {
    data: {
      description: 'Array of objects',
      control: { type: 'object' },
    },
    XAxisKey: {
      description: 'Which object key will be used as X axis',
      control: { type: 'object' },
    },
    YAxisKey: {
      description: 'Which object key will be used as Y axis',
      control: { type: 'object' },
    },
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <History {...args} />;
}

const arr = [
  {
    priceUsd: '6379.3997635993342453',
    time: 1530403200000,
  },
  {
    priceUsd: '6466.3135622762295280',
    time: 1530489600000,
  },
  {
    priceUsd: '6601.0724971279524219',
    time: 1530576000000,
  },
  {
    priceUsd: '7389.6890782016167515',
    time: 1533254400000,
  },
  {
    priceUsd: '7247.2622645760407444',
    time: 1533340800000,
  },
  {
    priceUsd: '6987.2119251945676799',
    time: 1533427200000,
  },
];

export const PriceHistory = Template.bind({});
PriceHistory.args = {
  data: arr,
  XAxisKey: 'priceUsd',
  YAxisKey: 'time',
};
