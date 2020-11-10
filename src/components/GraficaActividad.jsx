import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
  
  const data = [
    {
      name: 'Sept 1', Positivo: 0, amt: 2400,
    },
    {
      name: 'Sept 2', Positivo: 1, amt: 2210,
    },
    {
        name: 'Sept 3', Positivo: 0.5, amt: 2400,
      },
      {
        name: 'Sept 4', Positivo: 1.5, amt: 2210,
      },
      {
        name: 'Sept 5', Positivo: 0.8, amt: 2400,
      },
      {
        name: 'Sept 6', Positivo: 0.4, amt: 2210,
      },
      {
        name: 'Sept 7', Positivo: 2, amt: 2400,
      },
      {
        name: 'Sept 8', Positivo: 3, amt: 2210,
      },
      {
        name: 'Sept 9', Positivo: 4, amt: 2400,
      },
  ];
  
  export default class Example extends PureComponent {
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
          <Line type="monotone" dataKey="Positivo" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      );
    }
  }
  