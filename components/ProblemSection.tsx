import React from 'react';
import { AlertTriangle, Fingerprint, MessageSquareX } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column: Magazine Lead */}
        <div className="md:col-span-5">
          <h2 className="text-4xl font-serif text-white mb-8 border-l-4 border-accent-red pl-6">
            角色幻觉：<br />
            <span className="text-slate-500 text-2xl italic">当AI忘记了它是谁</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed text-justify">
            <span className="float-left text-5xl font-serif text-accent-gold pr-3 pt-2 leading-none">随</span>
            着大语言模型在情感陪伴领域的应用日益广泛，"角色扮演"（Role-Playing）已成为核心功能之一。然而，我们的研究发现，即便是最先进的模型（如GPT-4, Claude-3），在面对特定类型的攻击时，也会发生"角色幻觉"（Character Hallucination）。
          </p>
          <p className="mt-6 text-slate-400 leading-relaxed">
             这不仅仅是回答错误，而是模型彻底背离了预设的人格设定，生成了与角色身份、知识背景或行为模式完全不符的内容。这对于追求沉浸式体验的用户来说，是毁灭性的打击。
          </p>
        </div>

        {/* Right Column: Key Concepts */}
        <div className="md:col-span-7 grid gap-8">
            <div className="group p-8 border border-slate-800 bg-slate-800/20 hover:bg-slate-800/40 transition-all duration-300 hover:border-accent-red/30">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-900 rounded-lg text-accent-red group-hover:scale-110 transition-transform">
                        <Fingerprint size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">RoleBreak 框架</h3>
                        <p className="text-slate-400">
                            我们首次从攻击视角对角色幻觉进行了系统性分析，提出了 RoleBreak 框架。该框架揭示了导致幻觉的两个根本机制。
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 border-t border-slate-700">
                    <div className="flex items-center gap-3 mb-4 text-accent-gold">
                        <AlertTriangle size={20} />
                        <h4 className="font-bold">查询稀疏性 (Query Sparsity)</h4>
                    </div>
                    <p className="text-sm text-slate-400">
                        角色设定的多样性远超训练数据的覆盖范围。当用户提出训练集中罕见的长尾问题（Out-of-Distribution）时，模型防御失效。
                    </p>
                </div>
                <div className="p-6 border-t border-slate-700">
                    <div className="flex items-center gap-3 mb-4 text-accent-gold">
                         <MessageSquareX size={20} />
                        <h4 className="font-bold">角色-查询冲突 (Role-Query Conflict)</h4>
                    </div>
                    <p className="text-sm text-slate-400">
                        当用户的指令（如"写一段Python代码"）与角色设定（如"我是贝多芬"）发生本质冲突时，模型往往优先满足指令而牺牲角色一致性。
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;