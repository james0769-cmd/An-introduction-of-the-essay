
import React from 'react';
import { AlertTriangle, Fingerprint, MessageSquareX } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const ProblemSection: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      headline: 'Character Hallucination',
      subHeadline: 'When AI Forgets Who It Is',
      lead: (
        <>
            <span className="float-left text-5xl font-serif text-accent-gold pr-3 pt-2 leading-none">W</span>
            ith the widespread application of Large Language Models in emotional companionship, "Role-Playing" has become a core feature. However, our research reveals that even the most advanced models (like GPT-4, Claude-3) suffer from "Character Hallucination" when facing specific types of attacks.
        </>
      ),
      para2: 'This is not just a factual error, but a complete deviation from the preset persona, generating content completely inconsistent with the character\'s identity, background knowledge, or behavioral patterns. For users seeking an immersive experience, this is a devastating blow.',
      framework: 'The RoleBreak Framework',
      frameworkDesc: 'We present the first systematic analysis of character hallucination from an attack perspective, introducing the RoleBreak framework. This framework identifies two fundamental mechanisms driving hallucinations.',
      factor1Title: 'Query Sparsity',
      factor1Desc: 'The diversity of role settings far exceeds the coverage of training data. When users ask long-tail questions (Out-of-Distribution) rare in the training set, model defenses fail.',
      factor2Title: 'Role-Query Conflict',
      factor2Desc: 'When user instructions (e.g., "Write Python code") conflict fundamentally with the role setting (e.g., "I am Beethoven"), models often prioritize satisfying the instruction at the expense of role consistency.'
    },
    zh: {
      headline: '角色幻觉',
      subHeadline: '当AI遗忘自我',
      lead: (
        <>
            <span className="float-left text-5xl font-serif text-accent-gold pr-3 pt-2 leading-none">随</span>
            着大语言模型在情感陪伴领域的广泛应用，“角色扮演”已成为核心功能。然而，我们的研究表明，即使是GPT-4、Claude-3等最先进的模型，在面对特定类型的攻击时也会遭遇“角色幻觉”。
        </>
      ),
      para2: '这不仅仅是事实错误，而是完全偏离了预设的人设，生成了与角色身份、背景知识或行为模式完全不符的内容。对于寻求沉浸式体验的用户来说，这是一个毁灭性的打击。',
      framework: 'RoleBreak 框架',
      frameworkDesc: '我们首次从攻击视角对角色幻觉进行了系统分析，提出了 RoleBreak 框架。该框架确定了导致幻觉的两个根本机制。',
      factor1Title: '查询稀疏性',
      factor1Desc: '角色设定的多样性远超训练数据的覆盖范围。当用户提出训练集中罕见的长尾问题（分布外）时，模型防御就会失效。',
      factor2Title: '角色-查询冲突',
      factor2Desc: '当用户指令（如“写Python代码”）与角色设定（如“我是贝多芬”）发生根本冲突时，模型往往会为了满足指令而牺牲角色一致性。'
    }
  };

  const t = content[language];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column: Magazine Lead */}
        <motion.div 
          className="md:col-span-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif text-white mb-8 border-l-4 border-accent-red pl-6">
            {t.headline}:<br />
            <span className="text-slate-500 text-2xl italic">{t.subHeadline}</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed text-justify">
            {t.lead}
          </p>
          <p className="mt-6 text-slate-400 leading-relaxed text-justify">
             {t.para2}
          </p>
        </motion.div>

        {/* Right Column: Key Concepts - Staggered Animation */}
        <div className="md:col-span-7 grid gap-8">
            <motion.div 
              className="group p-8 border border-slate-800 bg-slate-800/20 hover:bg-slate-800/40 transition-all duration-300 hover:border-accent-red/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-900 rounded-lg text-accent-red group-hover:scale-110 transition-transform">
                        <Fingerprint size={28} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">{t.framework}</h3>
                        <p className="text-slate-400">
                            {t.frameworkDesc}
                        </p>
                    </div>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <motion.div 
                  className="p-6 border-t border-slate-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="flex items-center gap-3 mb-4 text-accent-gold">
                        <AlertTriangle size={20} />
                        <h4 className="font-bold">{t.factor1Title}</h4>
                    </div>
                    <p className="text-sm text-slate-400">
                        {t.factor1Desc}
                    </p>
                </motion.div>
                <motion.div 
                  className="p-6 border-t border-slate-700"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="flex items-center gap-3 mb-4 text-accent-gold">
                         <MessageSquareX size={20} />
                        <h4 className="font-bold">{t.factor2Title}</h4>
                    </div>
                    <p className="text-sm text-slate-400">
                        {t.factor2Desc}
                    </p>
                </motion.div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
