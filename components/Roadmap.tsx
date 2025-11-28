import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    id: 1,
    title: "Dataset Construction",
    date: "Dec 2025",
    desc: "Built high-sparsity test set (RoleBreakEval) containing 100+ roles, covering historical figures, fictional characters, and professionals.",
    status: "done"
  },
  {
    id: 2,
    title: "Attack Evaluation",
    date: "Feb 2026",
    desc: "Benchmarked mainstream LLMs (GPT-4, Llama 3) to quantify the impact of query sparsity and role conflict on hallucinations.",
    status: "active"
  },
  {
    id: 3,
    title: "Defense Construction",
    date: "May 2026",
    desc: "Develop Narrator Mode, integrating dynamic scene generation and context fusion modules.",
    status: "pending"
  },
  {
    id: 4,
    title: "System Integration",
    date: "Aug 2026",
    desc: "Encapsulate defense layer as middleware, deploy interactive demo, conduct manual evaluation and red-teaming.",
    status: "pending"
  },
  {
    id: 5,
    title: "Conclusion & Publication",
    date: "Oct 2026",
    desc: "Compile experimental data, write academic paper, and open-source dataset and evaluation code.",
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