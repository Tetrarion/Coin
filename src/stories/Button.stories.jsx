import React from 'react';
import { Button } from '../components/Button/Button';

export default {

  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      options: ['add', 'remove'],
      control: { type: 'radio' },
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
