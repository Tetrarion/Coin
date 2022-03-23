import React from 'react';
import { Header } from '../Main/BasketPage/components/Header';
import ASCImage from '../images/down--v2.png';
import DESCImage from '../images/down--v1.png';
import '../Styles/top.css';

export default {

  title: 'Header',
  component: Header,
  argTypes: {
    screenWidth: {
      description: 'The width of your screen',
      control: { type: 'number' },
    },
    names: {
      description: 'Array of words that will be used in header',
      control: { type: 'object' },
    },
    namesForLargeScreeen: {
      description: 'Array of words that will be visible only on large screen. They must belong to the `names`',
      control: { type: 'object' },
    },
    sort: {
      description: 'You need to send this function only if you need to build your header with sorting',
      action: 'sorting',
    },
    ASCImage: {
      description: 'You must send this prop if you sent `sort`. Image which will be displayed when choosed ASC sorting',
      control: { type: 'file' },
    },
    DESCImage: {
      description: 'You must send this prop if you sent `sort`. Image which will be displayed when choosed DESC sorting',
      control: { type: 'file' },
    },
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
  ASCImage: 'none',
  DESCImage: 'none',
};

export const withSorting = Template.bind({});
withSorting.args = {
  names: ['Name', 'Count', 'Price', 'Total price', 'Supply', 'Sale'],
  namesForLargeScreeen: ['Sale', 'Supply'],
  screenWidth: 1000,
  ASCImage,
  DESCImage,
};
