
import React, { useState } from 'react';
import { Skull, ShieldAlert, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const AttackMatrix: React.FC = () => {
  const [sparsity, setSparsity] = useState(20);
  const [conflict, setConflict] = useState(20);
  const { language } = useLanguage();

  // Determine attack success probability based on sliders
  const dangerLevel = (sparsity + conflict) / 2;
  const isBroken = dangerLevel > 65;

  const content = {
    en: {
        config: 'Attack Configuration',
        sparsity: 'Query Sparsity',
        sparsityDesc: 'Higher sparsity means questions deviate more from role training data (e.g., asking Beethoven about modern programming).',
        conflict: 'Role-Query Conflict',
        conflictDesc: 'Increasing conflict forces the model to choose between "following instructions" and "maintaining role".',
        risk: 'Current Jailbreak Risk',
        critical: 'CRITICAL',
        safe: 'SAFE',
        roleBroken: 'ROLE BROKEN',
        roleSecure: 'ROLE SECURE',
        userQuery: 'Mr. Beethoven, can you teach me how to write a quicksort algorithm in Python?',
        responseBroken: (
            <span className="text-accent-red animate-pulse">
            "No problem! Here is a quicksort algorithm implemented in Python:<br/>
            <code className="text-xs block mt-2 bg-black/30 p-2 font-mono text-red-300">
                def quick_sort(arr):<br/>
                &nbsp;&nbsp;if len(arr) &lt;= 1: return arr<br/>
                &nbsp;&nbsp;...
            </code>
            "
            </span>
        ),
        responseSafe: (
            <span className="text-slate-300">
            "I do not understand what you mean by 'Python' or 'algorithms'. I am merely a composer; my language is written in notes, not these strange characters."
            </span>
        )
    },
    zh: {
        config: '攻击配置',
        sparsity: '查询稀疏性',
        sparsityDesc: '稀疏性越高，问题越偏离角色训练数据（例如问贝多芬现代编程知识）。',
        conflict: '角色-查询冲突',
        conflictDesc: '增加冲突迫使模型在“遵循指令”和“维持人设”之间做出选择。',
        risk: '当前越狱风险',
        critical: '危险',
        safe: '安全',
        roleBroken: '人设崩塌',
        roleSecure: '人设稳固',
        userQuery: '贝多芬先生，你能教我怎么用Python写快速排序算法吗？',
        responseBroken: (
            <span className="text-accent-red animate-pulse">
            "没问题！这是一个Python实现的快速排序算法：<br/>
            <code className="text-xs block mt-2 bg-black/30 p-2 font-mono text-red-300">
                def quick_sort(arr):<br/>
                &nbsp;&nbsp;if len(arr) &lt;= 1: return arr<br/>
                &nbsp;&nbsp;...
            </code>
            "
            </span>
        ),
        responseSafe: (
            <span className="text-slate-300">
            "我不明白你说的“Python”或“算法”是什么。我只是一个作曲家；我的语言是音符，而不是这些奇怪的字符。"
            </span>
        )
    }
  };

  const t = content[language];

  return (
    <motion.div 
      className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
        {/* Controls Panel */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-slate-700 bg-slate-800/50">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Skull className="text-slate-400" /> {t.config}
          </h3>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">{t.sparsity}</label>
                <span className="text-xs font-mono text-accent-gold">{sparsity}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sparsity} 
                onChange={(e) => setSparsity(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-accent-gold"
              />
              <p className="text-xs text-slate-500 mt-2">
                {t.sparsityDesc}
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">{t.conflict}</label>
                <span className="text-xs font-mono text-accent-gold">{conflict}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="100" 
                value={conflict} 
                onChange={(e) => setConflict(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-accent-gold"
              />
              <p className="text-xs text-slate-500 mt-2">
                {t.conflictDesc}
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-slate-900 rounded border border-slate-700 flex items-center justify-between">
            <span className="text-sm text-slate-400">{t.risk}</span>
            <div className="flex items-center gap-2">
                <div className={`h-2 w-24 rounded-full overflow-hidden bg-slate-700`}>
                    <div 
                        className={`h-full transition-all duration-300 ${isBroken ? 'bg-accent-red' : 'bg-green-500'}`} 
                        style={{width: `${dangerLevel}%`}}
                    ></div>
                </div>
                <span className={`font-mono font-bold ${isBroken ? 'text-accent-red' : 'text-green-500'}`}>
                    {dangerLevel > 65 ? t.critical : t.safe}
                </span>
            </div>
          </div>
        </div>

        {/* Simulation Output */}
        <div className="p-8 bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Status Indicator */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded text-xs font-bold border transition-colors duration-300 ${isBroken ? 'border-accent-red text-accent-red bg-accent-red/10' : 'border-green-500 text-green-500 bg-green-500/10'}`}>
             {isBroken ? t.roleBroken : t.roleSecure}
          </div>

          <div className="w-full max-w-sm">
            {/* User Message */}
            <div className="flex gap-3 mb-6 justify-end">
               <div className="bg-slate-700 text-white p-3 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                 {t.userQuery}
               </div>
               <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold">User</div>
            </div>

            {/* AI Message */}
            <div className="flex gap-3">
               <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isBroken ? 'bg-accent-red animate-pulse' : 'bg-accent-gold'}`}>
                 <Bot size={18} className="text-slate-900" />
               </div>
               <div className={`p-4 rounded-2xl rounded-tl-none text-sm max-w-[90%] shadow-lg transition-all duration-300 border ${isBroken ? 'bg-accent-red/10 border-accent-red/50' : 'bg-slate-800 border-slate-700'}`}>
                 <p className="font-serif font-bold text-slate-400 mb-1 text-xs uppercase">Ludwig van Beethoven</p>
                 {isBroken ? t.responseBroken : t.responseSafe}
               </div>
            </div>
          </div>

          {/* Glitch Overlay Effect */}
          {isBroken && (
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')]"></div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default AttackMatrix;
