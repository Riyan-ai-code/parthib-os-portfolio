'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const TECHNOLOGIES = [
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'FastAPI', icon: '🚀' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Redis', icon: '📊' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Machine Learning', icon: '🧠' },
  { name: 'LLMs', icon: '🤖' },
  { name: 'RAG', icon: '📚' },
  { name: 'AI Agents', icon: '🎯' },
];

const TechOrbit = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = React.useState<string | null>(null);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-dark-400">
      {/* Central Core */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute w-20 h-20 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full glow-blue"
        animate={{ boxShadow: ['0 0 20px rgba(0, 217, 255, 0.5)', '0 0 40px rgba(0, 217, 255, 0.8)'] }}
        style={{ textureImage: 'radial-gradient(circle, #00d9ff 0%, #a855f7 100%)' }}
      />

      {/* Orbital Rings */}
      <svg
        className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 400 400"
      >
        <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(0, 217, 255, 0.1)" strokeWidth="1" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(168, 85, 247, 0.1)" strokeWidth="1" />
        <circle cx="200" cy="200" r="200" fill="none" stroke="rgba(0, 217, 255, 0.05)" strokeWidth="1" />
      </svg>

      {/* Technology Nodes */}
      <div className="absolute w-full h-full flex items-center justify-center">
        {TECHNOLOGIES.map((tech, index) => {
          const angle = (index / TECHNOLOGIES.length) * Math.PI * 2;
          const radius = 150 + (index % 2) * 60;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              animate={hoveredTech === tech.name ? { scale: 1.3 } : { scale: 1 }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="text-xs font-mono text-gray-400 group-hover:text-neon-blue transition-colors">
                  {tech.name}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Labels */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center z-20"
      >
        <h2 className="text-3xl font-bold neon-blue mb-2">TECHNOLOGY ORBIT</h2>
        <p className="text-gray-400 text-sm">Tools, languages, and frameworks I work with</p>
      </motion.div>
    </div>
  );
};

export default TechOrbit;
