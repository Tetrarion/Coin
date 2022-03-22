import React from 'react';
import { Pagination } from '../Main/LitsPage/components/Pagination';

export default {

  title: 'Pagination',
  component: Pagination,
  argTypes: {
    pagination: {
      description: 'It`s a function that send a number of current page',
      action: 'pageNumber',
    },
    totalPages: {
      description: 'Total number of pages',
      control: { type: 'text' },
    },
    visiblePagesFromCurrentPage: {
      description: 'How much pages will be displayed from the current page',
      control: { type: 'text' },
    },
    visiblePagesFromThеEdges: {
      description: 'How much pages will be displayed from the edges of block',
      control: { type: 'text' },
    },
  },
};

function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Pagination {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  totalPages: 100,
  visiblePagesFromCurrentPage: 8,
  visiblePagesFromThеEdges: 10,
};
