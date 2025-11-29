
import React, { useRef } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Stars, Text } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { ArrowDown } from 'lucide-react';

// Add type definitions for R3F elements to fix JSX.IntrinsicElements errors
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere args={[1.5, 64, 64]} ref={meshRef}>
        <MeshDistortMaterial
          color="#1e293b"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.9}
          emissive="#fbbf24"
          emissiveIntensity={0.1}
          wireframe={true}
        />
      </Sphere>
      {/* Inner Core */}
      <Sphere args={[1, 32, 32]}>
         <meshStandardMaterial color="#ef4444" transparent opacity={0.3} />
      </Sphere>
    </Float>
  );
};

const HeroParticles = () => {
    const pointsRef = useRef<THREE.Points>(null);
    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    })

    const count = 1000;
    const positions = new Float32Array(count * 3);
    for(let i=0; i<count; i++) {
        const r = 4 + Math.random() * 2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        positions[i*3] = r * Math.sin(phi) * Math.cos(theta);
        positions[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
        positions[i*3+2] = r * Math.cos(phi);
    }

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>
            <pointsMaterial size={0.02} color="#94a3b8" transparent opacity={0.6} sizeAttenuation />
        </points>
    )
}

const Hero: React.FC = () => {
  const { language } = useLanguage();

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const content = {
    en: {
      tag: 'Undergraduate Research Project',
      titleHighlight: 'Persona',
      titleMain: 'The Fragile',
      subtitle: (
        <>
          Jailbreak Attacks and Narrative Defense in Role-Playing LLMs based on <span className="text-accent-red font-medium">Query Sparsity</span> & <span className="text-accent-red font-medium">Role Conflict</span>
        </>
      ),
      explore: 'Explore Research',
      discover: 'DISCOVER'
    },
    zh: {
      tag: '大学生创新创业训练计划',
      titleHighlight: '数字人格',
      titleMain: '脆弱的',
      subtitle: (
        <>
          基于<span className="text-accent-red font-medium">查询稀疏性</span>与<span className="text-accent-red font-medium">角色冲突</span>的<br className="hidden md:block" />角色扮演大模型越狱攻击与叙事防御
        </>
      ),
      explore: '探索研究',
      discover: '探索更多'
    }
  };

  const t = content[language];

  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#fbbf24" intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#ef4444" intensity={0.5} />
          <AnimatedSphere />
          <HeroParticles />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="inline-block mb-4 px-3 py-1 border border-accent-gold/30 rounded-full bg-slate-900/50 backdrop-blur-sm">
             <span className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">{t.tag}</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold mb-6 tracking-tight leading-tight">
            {t.titleMain} <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200">{t.titleHighlight}</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 font-light mb-8 max-w-3xl mx-auto">
             {t.subtitle}
          </p>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-col md:flex-row gap-4 justify-center pointer-events-auto"
        >
            <a href="#background" className="px-8 py-3 bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors">
                {t.explore}
            </a>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 cursor-pointer group pointer-events-auto"
        onClick={handleScrollDown}
      >
        <span className="text-slate-500 text-xs tracking-[0.2em] font-medium uppercase group-hover:text-slate-300 transition-colors">
          {t.discover}
        </span>
        <motion.div 
          className="w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center bg-slate-900/30 backdrop-blur-sm group-hover:border-accent-gold group-hover:bg-slate-900/60 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-slate-400 group-hover:text-accent-gold transition-colors" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
