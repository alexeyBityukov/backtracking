import React from 'react';
import './App.css';
import { listOfInstruments, chartSettings } from './const';
import quotes from './quotes';
import { Line } from 'react-chartjs-2';

export default () => {
    const data = {
        labels: quotes[listOfInstruments.SBGB].dates,
        datasets: [{
            label: 'SBGB',
            borderColor: 'rgba(0,0,192,1)',
            data: quotes[listOfInstruments.SBGB].prices,
            ...chartSettings,
        },{
            label: 'SBCB',
            borderColor: 'rgba(75,192,192,1)',
            data: quotes[listOfInstruments.SBCB].prices,
            ...chartSettings,
        }]
    };
  return (
    <>
        <Line
            data={data}
            width={1000}
            height={1000}
            options={{ maintainAspectRatio: false }}
        />
    </>
  );
}
