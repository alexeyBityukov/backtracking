import React from 'react';
import './App.css';
import { listOfInstruments } from './const';
import quotes from './quotes';
import { Bar } from 'react-chartjs-2';

export default () => {
    const data = {
        labels: quotes[listOfInstruments.SBGB].dates,
        datasets: [{
            label: 'SBGB',
            backgroundColor: 'rgba(75,192,192,0.4)',
            data: quotes[listOfInstruments.SBGB].prices
        }]
    };
  return (
    <>
        <Bar
            data={data}
            width={1000}
            height={1000}
            options={{ maintainAspectRatio: false }}
        />
    </>
  );
}
