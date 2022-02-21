import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { getInfo } from '../../API/api';

function History({ id, choosedValue }) {
  const [history, SetHistory] = useState('');

  const getHistory = async (interval) => {
    let truncatedArray = [];
    const dateInformation = await getInfo(`assets/${id}/history?interval=${interval}`);
    if (interval === 'd1') {
      truncatedArray = dateInformation.map((dateinfo) => {
        const container = {};
        container.priceUsd = dateinfo.priceUsd;
        container.date = dateinfo.date.substr(0, 10);
        return container;
      });
    } else {
      truncatedArray = dateInformation.map((dateinfo) => {
        const container = {};
        container.priceUsd = dateinfo.priceUsd;
        container.date = dateinfo.date.substr(11, 5);
        return container;
      });
    }
    SetHistory(truncatedArray);
  };

  useEffect(() => {
    const selectValue = document.querySelector('.info-page__select');
    const select = selectValue.value;
    getHistory(select);
  }, [choosedValue]);

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={history}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="priceUsd" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default History;
