
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const data = [
  { name: 'Low', baseline: 60, narrator: 85 },
  { name: 'Med-Low', baseline: 55, narrator: 83 },
  { name: 'Medium', baseline: 40, narrator: 80 },
  { name: 'Med-High', baseline: 25, narrator: 78 },
  { name: 'High', baseline: 15, narrator: 75 },
];

const PerformanceChart: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
        title: 'Defense Evaluation',
        subtitle: 'Role Fidelity Scores under different attack intensities',
        xAxis: 'Conflict Level',
        legendBase: 'Vanilla Model',
        legendOurs: 'Narrator Enhanced (Ours)'
    },
    zh: {
        title: '防御评估',
        subtitle: '不同攻击强度下的角色一致性得分',
        xAxis: '冲突等级',
        legendBase: '原始模型',
        legendOurs: '叙事增强模型 (Ours)'
    }
  };

  const t = content[language];

  return (
    <motion.div 
      className="bg-slate-800/40 p-6 rounded-xl border border-slate-700"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">{t.title}</h3>
        <p className="text-sm text-slate-400">{t.subtitle}</p>
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
                label={{ value: t.xAxis, position: 'insideBottom', offset: -5, fill: '#94a3b8' }}
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
                name={t.legendBase} 
                stroke="#ef4444" 
                strokeWidth={2} 
                dot={{r: 4, fill: '#ef4444'}}
                activeDot={{r: 6}}
            />
            <Line 
                type="monotone" 
                dataKey="narrator" 
                name={t.legendOurs} 
                stroke="#fbbf24" 
                strokeWidth={2} 
                dot={{r: 4, fill: '#fbbf24'}}
                activeDot={{r: 6}}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default PerformanceChart;
