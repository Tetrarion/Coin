import React from 'react';
import { Button } from '../components/Button/Button';

export default {

  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      description: 'It`s a button modifier',
      options: ['add', 'remove'],
      control: { type: 'radio' },
    },
    text: {
      description: 'Button text',
      control: { type: 'text' },
    },
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  type: 'add',
  text: 'Add to basket',
};
