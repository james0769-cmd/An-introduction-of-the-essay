import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Database, BookOpen } from 'lucide-react';

const DefenseDemo: React.FC = () => {
  return (
    <div className="relative">
       <h3 className="text-2xl font-serif text-white mb-8">
         叙事防御引擎 <span className="text-sm font-sans font-normal text-slate-500 block mt-2">Narrator Mode Pipeline</span>
       </h3>

       <div className="space-y-6 relative">
          {/* Connecting Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-700 -z-10"></div>

          {/* Step 1: Input Analysis */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6"
          >
             <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center shrink-0 z-10">
                <Database size={20} className="text-accent-red" />
             </div>
             <div className="flex-1 bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                <h4 className="text-sm font-bold text-white">1. 攻击识别</h4>
                <p className="text-xs text-slate-400 mt-1">检测到查询稀疏性与角色冲突。输入与角色知识库不匹配。</p>
             </div>
          </motion.div>

          {/* Step 2: Narrative Generation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-6"
          >
             <div className="w-12 h-12 rounded-full bg-slate-800 border border-accent-gold shadow-[0_0_15px_rgba(251,191,36,0.3)] flex items-center justify-center shrink-0 z-10">
                <BookOpen size={20} className="text-accent-gold" />
             </div>
             <div className="flex-1 bg-gradient-to-r from-accent-gold/10 to-transparent p-4 rounded-lg border border-accent-gold/30">
                <h4 className="text-sm font-bold text-accent-gold flex items-center gap-2">
                    <Sparkles size={14} />
                    2. 叙事生成 (Narrator Mode)
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                    系统自动生成 "桥接场景"：<br/>
                    <em className="text-slate-400">"贝多芬看着手中奇怪的发光矩形（手机），困惑地皱起眉头，试图理解你提到的未来术语..."</em>
                </p>
             </div>
          </motion.div>

          {/* Step 3: Context Fusion */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="flex items-center gap-6"
          >
             <div className="w-12 h-12 rounded-full bg-green-900/50 border border-green-500 flex items-center justify-center shrink-0 z-10">
                <ShieldCheck size={20} className="text-green-500" />
             </div>
             <div className="flex-1 bg-green-900/10 p-4 rounded-lg border border-green-500/30">
                <h4 className="text-sm font-bold text-green-400">3. 安全输出</h4>
                <p className="text-xs text-slate-300 mt-1">
                    在维持角色设定的前提下回应用户，将拒绝转化为情节的一部分，而非生硬的系统提示。
                </p>
             </div>
          </motion.div>
       </div>
    </div>
  );
};

export default DefenseDemo;