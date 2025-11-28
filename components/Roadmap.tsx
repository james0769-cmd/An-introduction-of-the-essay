import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    id: 1,
    title: "数据集构建",
    date: "Dec 2025",
    desc: "构建包含100+角色的高稀疏性测试集 (RoleBreakEval)，涵盖历史人物、虚构角色与专业人士。",
    status: "done"
  },
  {
    id: 2,
    title: "攻击机制评测",
    date: "Feb 2026",
    desc: "对主流LLM (GPT-4, Llama 3) 进行基准测试，量化查询稀疏性与角色冲突对幻觉的影响。",
    status: "active"
  },
  {
    id: 3,
    title: "叙事防御构建",
    date: "May 2026",
    desc: "开发叙事者模式 (Narrator Mode)，集成动态场景生成与语境融合模块。",
    status: "pending"
  },
  {
    id: 4,
    title: "系统集成验证",
    date: "Aug 2026",
    desc: "将防御层封装为中间件，部署交互式Demo，进行人工评估与红队测试。",
    status: "pending"
  },
  {
    id: 5,
    title: "结题与发表",
    date: "Oct 2026",
    desc: "整理实验数据，撰写学术论文，开源数据集与评估代码。",
    status: "pending"
  }
];

const Roadmap: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Central Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-700/50"></div>

      <div className="space-y-12">
        {phases.map((phase, index) => {
          const isLeft = index % 2 === 0;
          const isActive = phase.status === "active";
          const isDone = phase.status === "done";
          
          return (
            <motion.div 
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center justify-between ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content Card */}
              <div className={`w-[45%] ${isLeft ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${isActive ? 'bg-slate-800 border-accent-gold shadow-[0_0_20px_rgba(251,191,36,0.1)]' : 'bg-slate-900 border-slate-700 hover:border-slate-500'}`}>
                  <span className={`text-xs font-bold tracking-wider uppercase mb-2 block ${isActive ? 'text-accent-gold' : 'text-slate-500'}`}>
                    {phase.date}
                  </span>
                  <h3 className={`text-xl font-bold mb-2 ${isDone || isActive ? 'text-white' : 'text-slate-400'}`}>
                    {phase.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>

              {/* Center Node */}
              <div className="relative z-10 w-8 h-8 rounded-full border-4 border-slate-900 flex items-center justify-center bg-slate-800">
                  <div className={`w-3 h-3 rounded-full transition-all duration-500 ${isActive ? 'bg-accent-gold scale-125 shadow-[0_0_10px_#fbbf24]' : isDone ? 'bg-slate-400' : 'bg-slate-700'}`}></div>
              </div>

              {/* Spacer for the other side */}
              <div className="w-[45%]"></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;