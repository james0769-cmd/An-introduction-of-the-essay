
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import AttackMatrix from './components/AttackMatrix';
import DefenseDemo from './components/DefenseDemo';
import PerformanceChart from './components/PerformanceChart';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import { useLanguage } from './components/LanguageContext';

const App: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      attackTitle: 'RoleBreak Attack Mechanism',
      attackDesc: 'Our research reveals two core factors causing role-playing models to crash: Query Sparsity and Role-Query Conflict. Experience how the model hallucinates through this interactive matrix.',
      defenseTitle: 'Defense Strategy: ',
      defenseHighlight: 'Narrator Mode',
      defenseDesc: 'Unlike traditional refusal strategies, our proposed "Narrator Mode" dynamically generates contextual narratives to resolve conflicts while maintaining role consistency.',
      roadmapTitle: 'Research Roadmap'
    },
    zh: {
      attackTitle: 'RoleBreak 攻击机制',
      attackDesc: '我们的研究揭示了导致角色扮演模型崩溃的两个核心因素：查询稀疏性和角色-查询冲突。通过此交互式矩阵体验模型是如何产生幻觉的。',
      defenseTitle: '防御策略：',
      defenseHighlight: '旁白模式 (Narrator Mode)',
      defenseDesc: '与传统的拒绝策略不同，我们提出的“旁白模式”通过动态生成上下文叙事来解决冲突，同时保持角色的一致性。',
      roadmapTitle: '研究路线图'
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-accent-gold selection:text-slate-900">
      <Navbar />
      
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="background" className="relative z-20 bg-slate-900 overflow-hidden">
          <ProblemSection />
        </section>

        <section id="attack" className="py-24 bg-slate-900/50 relative border-t border-slate-800 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                <span className="text-accent-red">RoleBreak</span> {language === 'en' ? 'Attack Mechanism' : '攻击机制'}
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                {t.attackDesc}
              </p>
            </motion.div>
            
            {/* Component handles its own animation */}
            <AttackMatrix />
          </div>
        </section>

        <section id="defense" className="py-24 bg-slate-800/30 border-t border-slate-800 backdrop-blur-sm overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                {t.defenseTitle} <span className="text-accent-gold">{t.defenseHighlight}</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                {t.defenseDesc}
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
               {/* Components handle their own animation */}
               <DefenseDemo />
               <PerformanceChart />
            </div>
          </div>
        </section>

        <section id="roadmap" className="py-24 bg-slate-900 border-t border-slate-800">
           <div className="max-w-7xl mx-auto px-6">
             <motion.h2 
               className="text-4xl md:text-5xl font-serif text-white mb-16 text-center"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
             >
               {t.roadmapTitle}
             </motion.h2>
             <Roadmap />
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
