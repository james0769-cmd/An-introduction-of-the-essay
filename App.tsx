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
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                <span className="text-accent-red">RoleBreak</span> Attack Mechanism
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Our research reveals two core factors causing role-playing models to crash: Query Sparsity and Role-Query Conflict.
                Experience how the model hallucinates through this interactive matrix.
              </p>
            </div>
            <AttackMatrix />
          </motion.div>
        </section>

        <section id="defense" className="py-24 bg-slate-800/30 border-t border-slate-800 backdrop-blur-sm">
           <motion.div 
            className="max-w-7xl mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
           >
            <div className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Defense Strategy: <span className="text-accent-gold">Narrator Mode</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Unlike traditional refusal strategies, our proposed "Narrator Mode" dynamically generates contextual narratives to resolve conflicts while maintaining role consistency.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <DefenseDemo />
               <PerformanceChart />
            </div>
          </motion.div>
        </section>

        <section id="roadmap" className="py-24 bg-slate-900 border-t border-slate-800">
           <div className="max-w-7xl mx-auto px-6">
             <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 text-center">
               Research Roadmap
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