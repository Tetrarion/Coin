import React from 'react';
import { Pagination } from '../Main/LitsPage/components/Pagination';
import '../Main/LitsPage/styles/pagination.css';

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
      control: { type: 'number' },
    },
    visiblePagesFromCurrentPage: {
      description: 'How much pages will be displayed from the current page',
      control: { type: 'number' },
    },
    visiblePagesFromThеEdges: {
      description: 'How much pages will be displayed from the edges of block',
      control: { type: 'number' },
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
