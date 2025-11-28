import React from 'react';
import { AlertTriangle, Fingerprint, MessageSquareX } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {
  return (
    <motion.div 
      className="max-w-7xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column: Magazine Lead */}
        <div className="md:col-span-5">
          <h2 className="text-4xl font-serif text-white mb-8 border-l-4 border-accent-red pl-6">
            Character Hallucination:<br />
            <span className="text-slate-500 text-2xl italic">When AI Forgets Who It Is</span>
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed text-justify">
            <span className="float-left text-5xl font-serif text-accent-gold pr-3 pt-2 leading-none">W</span>
            ith the widespread application of Large Language Models in emotional companionship, "Role-Playing" has become a core feature. However, our research reveals that even the most advanced models (like GPT-4, Claude-3) suffer from "Character Hallucination" when facing specific types of attacks.
          </p>
          <p className="mt-6 text-slate-400 leading-relaxed">
             This is not just a factual error, but a complete deviation from the preset persona, generating content completely inconsistent with the character's identity, background knowledge, or behavioral patterns. For users seeking an immersive experience, this is a devastating blow.
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
                        <h3 className="text-xl font-bold text-white mb-2">The RoleBreak Framework</h3>
                        <p className="text-slate-400">
                            We present the first systematic analysis of character hallucination from an attack perspective, introducing the RoleBreak framework. This framework identifies two fundamental mechanisms driving hallucinations.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 border-t border-slate-700">
                    <div className="flex items-center gap-3 mb-4 text-accent-gold">
                        <AlertTriangle size={20} />
                        <h4 className="font-bold">Query Sparsity</h4>
                    </div>
                    <p className="text-sm text-slate-400">
                        The diversity of role settings far exceeds the coverage of training data. When users ask long-tail questions (Out-of-Distribution) rare in the training set, model defenses fail.
                    </p>
                </div>
                <div className="p-6 border-t border-slate-700">
                    <div className="flex items-center gap-3 mb-4 text-accent-gold">
                         <MessageSquareX size={20} />
                        <h4 className="font-bold">Role-Query Conflict</h4>
                    </div>
                    <p className="text-sm text-slate-400">
                        When user instructions (e.g., "Write Python code") conflict fundamentally with the role setting (e.g., "I am Beethoven"), models often prioritize satisfying the instruction at the expense of role consistency.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProblemSection;