import React from 'react';
import { Pagination } from '../Main/LitsPage/components/Pagination';

export default {

  title: 'Pagination',
  component: Pagination,
  argTypes: { pagination: { action: 'pageNumber' } },
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
