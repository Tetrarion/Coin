import React from 'react';
import Coin from './Coin';

const CoinList = ({ tasks }) => {
  if (tasks.length)
    return (
          tasks.map(task => 
            <Coin key={task.id} task={task} /> 
          )
    )
  else return null;
}
export default CoinList;