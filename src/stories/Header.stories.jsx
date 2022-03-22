import React from 'react';
import { Header } from '../Main/BasketPage/components/Header';
import ASCImage from '../images/down--v2.png';
import DESCImage from '../images/down--v1.png';

export default {

  title: 'Header',
  component: Header,
  argTypes: {
    names: { control: 'object' },
    namesForLargeScreeen: { control: 'object' },
    ASCImage: { control: 'file' },
    DESCImage: { control: 'file' },
    sort: { action: 'sorting' },
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Header {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  names: ['Name', 'Count', 'Price', 'Total price', ' '],
  namesForLargeScreeen: [' '],
  screenWidth: 1000,
};

export const withSorting = Template.bind({});
withSorting.args = {
  names: ['Name', 'Count', 'Price', 'Total price', 'Supply', 'Sale'],
  namesForLargeScreeen: ['Sale', 'Supply'],
  screenWidth: 1000,
  ASCImage,
  DESCImage,
};
