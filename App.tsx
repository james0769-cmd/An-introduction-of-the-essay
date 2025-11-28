import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import AttackMatrix from './components/AttackMatrix';
import DefenseDemo from './components/DefenseDemo';
import PerformanceChart from './components/PerformanceChart';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-accent-gold selection:text-slate-900">
      <Navbar />
      
      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="background" className="relative z-20 bg-slate-900">
          <ProblemSection />
        </section>

        <section id="attack" className="py-24 bg-slate-900/50 relative border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                <span className="text-accent-red">RoleBreak</span> 攻击机制
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                我们的研究揭示了导致角色扮演模型崩溃的两个核心因素：查询稀疏性与角色冲突。
                通过交互式矩阵，体验模型是如何产生幻觉的。
              </p>
            </div>
            <AttackMatrix />
          </div>
        </section>

        <section id="defense" className="py-24 bg-slate-800/30 border-t border-slate-800 backdrop-blur-sm">
           <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                防御策略：<span className="text-accent-gold">叙事者模式</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                不同于传统的拒绝回答策略，我们提出的“叙事者模式”通过动态生成上下文语境，
                在保持角色一致性的同时化解冲突。
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <DefenseDemo />
               <PerformanceChart />
            </div>
          </div>
        </section>

        <section id="roadmap" className="py-24 bg-slate-900 border-t border-slate-800">
           <div className="max-w-7xl mx-auto px-6">
             <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 text-center">
               研究路线图
             </h2>
             <Roadmap />
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;