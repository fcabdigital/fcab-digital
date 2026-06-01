'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

const data = [
  { month: 'Jan', traffic: 400, conversions: 40 },
  { month: 'Feb', traffic: 520, conversions: 60 },
  { month: 'Mar', traffic: 680, conversions: 85 },
  { month: 'Apr', traffic: 820, conversions: 110 },
  { month: 'May', traffic: 950, conversions: 135 },
  { month: 'Jun', traffic: 1200, conversions: 180 },
];

export default function TrajectoryChart() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`w-full h-80 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
            cursor={{ stroke: '#f97316', strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="traffic"
            stroke="#f97316"
            strokeWidth={3}
            dot={{ fill: '#f97316', r: 5 }}
            activeDot={{ r: 7 }}
            isAnimationActive={true}
            animationDuration={2000}
            name="Traffic"
          />
          <Line
            type="monotone"
            dataKey="conversions"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{ fill: '#22c55e', r: 5 }}
            activeDot={{ r: 7 }}
            isAnimationActive={true}
            animationDuration={2000}
            name="Conversions"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
