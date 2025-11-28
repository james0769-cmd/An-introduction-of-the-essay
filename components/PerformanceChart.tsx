import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: '低冲突', baseline: 60, narrator: 85 },
  { name: '中低', baseline: 55, narrator: 83 },
  { name: '中等', baseline: 40, narrator: 80 },
  { name: '中高', baseline: 25, narrator: 78 },
  { name: '高冲突', baseline: 15, narrator: 75 },
];

const PerformanceChart: React.FC = () => {
  return (
    <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">防御效果评估</h3>
        <p className="text-sm text-slate-400">在不同攻击强度下的角色一致性 (Role Fidelity) 得分</p>
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
                name="原始模型 (Baseline)" 
                stroke="#ef4444" 
                strokeWidth={2} 
                dot={{r: 4, fill: '#ef4444'}}
                activeDot={{r: 6}}
            />
            <Line 
                type="monotone" 
                dataKey="narrator" 
                name="叙事增强模型 (Ours)" 
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