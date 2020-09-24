import React from 'react';
import './index.css';
import { Line } from 'react-chartjs-2';
import { useData } from './hooks.js';

export default () => {
  const data = useData();

  return (
    <Line
      data={data}
      width={1000}
      height={1000}
      options={{ maintainAspectRatio: false }}
    />
  );
};
