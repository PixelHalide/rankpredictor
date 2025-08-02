'use client'
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const METChart = () => {
  // Data from the vanilla JS site for MET 2025
  const rawXData = [31.25, 31.66666667, 33.95833333, 35.83333333, 37.5, 39.375, 39.375, 40.0, 42.08333333, 45.41666667, 46.04166667, 47.70833333, 47.91666667, 48.54166667, 48.95833333, 49.79166667, 51.04166667, 51.66666667, 52.08333333, 52.70833333, 53.125, 53.75, 55.41666667, 56.66666667, 57.08333333, 57.5, 57.5, 57.70833333, 58.95833333, 59.375, 59.58333333, 60.8333, 61.04166667, 61.25, 61.875, 62.08333333, 62.91666667, 63.95833333, 64.3, 64.79166667, 65.20833333, 66.04166667, 66.667, 66.875, 67.08333333, 67.29166667, 67.5, 67.91666667, 68.125, 68.33333333, 68.54166667, 69.16666667, 69.375, 69.58333333, 70.0, 70.20833333, 71.04166667, 71.25, 71.45833333, 71.875, 72.08333333, 72.29166667, 72.70833333, 72.91666667, 73.125, 73.54166667, 73.75, 73.95833333, 74.16666667, 74.375, 74.58333333, 75.0, 75.20833333, 75.625, 75.83333333, 76.04166667, 76.25, 76.45833333, 76.66666667, 76.875, 77.08333333, 77.29166667, 78.125, 78.33333333, 78.95833333, 79.16666667, 79.58333333, 80.20833333, 81.25, 81.45833333, 81.66666667, 82.08333333, 82.70833333, 84.375, 84.375, 85.0, 85.41666667, 85.83333333, 88.54166667, 91.25];

  const rawYData = [32043, 31803, 30599, 29500, 28300, 27555, 27503, 27100, 25719, 23458, 22810, 21765, 21285, 20894, 20490, 19859, 18716, 18216, 17960, 17364, 16900, 16000, 14983, 14000, 13652, 13286, 13171, 13101, 11994, 11612, 11570, 10500, 10380, 10127, 9642, 9472, 8817, 8000, 7750, 7454, 7169, 6610, 6217, 6051, 5941, 5859, 5675, 5434, 5349, 5193, 5071, 4675, 4653, 4483, 4267, 4170, 3776, 3553, 3551, 3383, 3285, 3144, 2970, 2896, 2801, 2665, 2583, 2493, 2436, 2370, 2271, 2100, 2066, 1936, 1827, 1800, 1680, 1648, 1590, 1549, 1469, 1399, 1223, 1200, 1053, 1000, 941, 831, 625, 605, 585, 533, 450, 305, 298, 238, 216, 187, 83, 74];

  // Combine the data for Recharts format
  const data = rawXData.map((bandScore, index) => ({
    bandScore: parseFloat(bandScore.toFixed(1)),
    rank: rawYData[index]
  }));

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 border border-gray-600 rounded p-2 text-white">
          <p className="text-sm">{`Band Score: ${label}`}</p>
          <p className="text-sm text-blue-300">{`Rank: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-4/5 mx-auto mb-4">
      <h2 className="text-white text-center text-lg font-semibold mb-4">
        MET 2025 Ranks vs Band Scores
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#555555" />
          <XAxis
            dataKey="bandScore"
            stroke="white"
            tick={{ fill: 'white', fontSize: 12 }}
            label={{ value: 'Band Score', position: 'insideBottom', offset: -10, style: { textAnchor: 'middle', fill: 'white' } }}
          />
          <YAxis
            stroke="white"
            tick={{ fill: 'white', fontSize: 12 }}
            label={{ value: 'Rank', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: 'white' } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ color: 'white' }}
          />
          <Line
            type="monotone"
            dataKey="rank"
            stroke="white"
            strokeWidth={2}
            dot={{ fill: 'white', strokeWidth: 2, r: 3 }}
            activeDot={{ r: 5, fill: 'white' }}
            name="Rank vs Band Score"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default METChart;
