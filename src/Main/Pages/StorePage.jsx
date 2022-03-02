import React from 'react';
import StoreCoinList from '../../Components/StorePageComponents/StoreCoinList';
import Header from '../../Components/StorePageComponents/Header';

function StorePage({ tasks }) {
  return (
    <div className="basket">
      <Header tasks={tasks} />
      <StoreCoinList tasks={tasks} />
    </div>
  );
}

export default StorePage;
