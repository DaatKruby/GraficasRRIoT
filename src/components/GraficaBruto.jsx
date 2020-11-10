import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  
  const data = [
    {
      name: 'Sept 1', Movimiento: 60, Sonido: 34, amt: 2400,
    },
    {
      name: 'Sept 20', Movimiento: 80, Sonido: 55, amt: 2210,
    },
    {
      name: 'Sept 1', Movimiento: 80, Sonido: 34, amt: 2400,
    },
    {
      name: 'Sept 20', Movimiento: 27, Sonido: 90, amt: 2210,
    },
  ];
  
  export default class GraficaActividad extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';
  
    render() {
      return (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Movimiento" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Sonido" stroke="#82ca9d" />
        </LineChart>
      );
    }
  }
  