import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Low', baseline: 60, narrator: 85 },
  { name: 'Med-Low', baseline: 55, narrator: 83 },
  { name: 'Medium', baseline: 40, narrator: 80 },
  { name: 'Med-High', baseline: 25, narrator: 78 },
  { name: 'High', baseline: 15, narrator: 75 },
];

const PerformanceChart: React.FC = () => {
  return (
    <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">Defense Evaluation</h3>
        <p className="text-sm text-slate-400">Role Fidelity Scores under different attack intensities</p>
      </div>
      
      <div className="h-[300px] w-full text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis 
                dataKey="name" 
                stroke="#94a3b8" 
                tick={{fill: '#94a3b8'}} 
                tickLine={false}
                axisLine={{stroke: '#475569'}}
                label={{ value: 'Conflict Level', position: 'insideBottom', offset: -5, fill: '#94a3b8' }}
            />
            <YAxis 
                stroke="#94a3b8" 
                tick={{fill: '#94a3b8'}} 
                tickLine={false}
                axisLine={{stroke: '#475569'}}
                domain={[0, 100]}
            />
            <Tooltip 
                contentStyle={{backgroundColor: '#0f172a', borderColor: '#334155', color: '#e2e8f0'}} 
                itemStyle={{color: '#e2e8f0'}}
            />
            <Legend wrapperStyle={{paddingTop: '20px'}}/>
            <Line 
                type="monotone" 
                dataKey="baseline" 
                name="Vanilla Model" 
                stroke="#ef4444" 
                strokeWidth={2} 
                dot={{r: 4, fill: '#ef4444'}}
                activeDot={{r: 6}}
            />
            <Line 
                type="monotone" 
                dataKey="narrator" 
                name="Narrator Enhanced (Ours)" 
                stroke="#fbbf24" 
                strokeWidth={2} 
                dot={{r: 4, fill: '#fbbf24'}}
                activeDot={{r: 6}}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;