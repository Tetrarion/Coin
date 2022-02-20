import React from 'react';
import StoreCoinList from '../../Components/StorePageComponents/StoreCoinList';
import Header from '../../Components/StorePageComponents/Header';

function StorePage({ tasks }) {
  return (
    <div className="basket">
      <Header />
      <div className="coins-purchase-list">
        <StoreCoinList tasks={tasks} />
      </div>
    </div>
  );
}

export default StorePage;
