
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Roadmap: React.FC = () => {
  const { language } = useLanguage();

  const phases = [
    {
      id: 1,
      title: { en: "Dataset Construction", zh: "数据集构建" },
      date: { en: "Dec 2025", zh: "2025年12月" },
      desc: { 
          en: "Built high-sparsity test set (RoleBreakEval) containing 100+ roles, covering historical figures, fictional characters, and professionals.",
          zh: "构建高稀疏性测试集 (RoleBreakEval)，包含100+个角色，覆盖历史人物、虚构角色和专业人士。"
      },
      status: "done"
    },
    {
      id: 2,
      title: { en: "Attack Evaluation", zh: "攻击评测" },
      date: { en: "Feb 2026", zh: "2026年2月" },
      desc: {
          en: "Benchmarked mainstream LLMs (GPT-4, Llama 3) to quantify the impact of query sparsity and role conflict on hallucinations.",
          zh: "评测主流大模型 (GPT-4, Llama 3)，量化查询稀疏性和角色冲突对幻觉的影响。"
      },
      status: "active"
    },
    {
      id: 3,
      title: { en: "Defense Construction", zh: "防御构建" },
      date: { en: "May 2026", zh: "2026年5月" },
      desc: {
          en: "Develop Narrator Mode, integrating dynamic scene generation and context fusion modules.",
          zh: "开发旁白模式，集成动态场景生成与上下文融合模块。"
      },
      status: "pending"
    },
    {
      id: 4,
      title: { en: "System Integration", zh: "系统集成" },
      date: { en: "Aug 2026", zh: "2026年8月" },
      desc: {
          en: "Encapsulate defense layer as middleware, deploy interactive demo, conduct manual evaluation and red-teaming.",
          zh: "封装防御层为中间件，部署交互式演示，进行人工评估与红队测试。"
      },
      status: "pending"
    },
    {
      id: 5,
      title: { en: "Conclusion & Publication", zh: "结题发表" },
      date: { en: "Oct 2026", zh: "2026年10月" },
      desc: {
          en: "Compile experimental data, write academic paper, and open-source dataset and evaluation code.",
          zh: "整理实验数据，撰写学术论文，并开源数据集与评测代码。"
      },
      status: "pending"
    }
  ];

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
                    {phase.date[language]}
                  </span>
                  <h3 className={`text-xl font-bold mb-2 ${isDone || isActive ? 'text-white' : 'text-slate-400'}`}>
                    {phase.title[language]}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {phase.desc[language]}
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
