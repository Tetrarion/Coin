import React from 'react';
import {
  AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

export function History({ history }) {
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
