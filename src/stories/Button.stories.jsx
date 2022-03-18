import React from 'react';
import { Button } from '../components/Button/Button';

export default {

  title: 'Button',
  component: Button,
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Button {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
  func: () => console.log(1),
};
