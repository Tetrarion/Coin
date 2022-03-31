import React from 'react';
import { Input } from '../components/Input/Input';
import '../components/Input/input.css';

export default {

  title: 'Input',
  component: Input,
  argTypes: {
    errorMessage: {
      description: 'Text that will be displayed when user enters an incorrect value',
      controle: { type: 'text' },
    },
    showValue: {
      description: 'Function for sending entered value',
      action: 'value',
    },
    hidden: {
      description: 'Boolean value that hides or shows an `errorMessage`',
      controle: { type: 'boolean' },
    },
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Input {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  hidden: true,
  errorMessage: 'Error',
};
