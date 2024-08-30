import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Example data with time and tide height
const data = [
  { time: '00:00', Tide_Height: 2.3 },
  { time: '03:00', Tide_Height: 3.1 },
  { time: '06:00', Tide_Height: 2.8 },
  { time: '09:00', Tide_Height: 4.0 },
  { time: '12:00', Tide_Height: 3.7 },
  { time: '15:00', Tide_Height: 2.9 },
  { time: '18:00', Tide_Height: 3.4 },
  { time: '21:00', Tide_Height: 2.6 },
];

const TideBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        {/* <YAxis label={{ value: 'Tide Height (m)', angle: -90, position: 'insideLeft' }} /> */}
        <Tooltip />
        <Legend />
        <Bar dataKey="Tide_Height" fill="#588dff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TideBarChart;
