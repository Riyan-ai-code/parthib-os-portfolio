'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AILaboratory = () => {
  const [activeNode, setActiveNode] = React.useState<number | null>(null);

  const pipeline = [
    { step: 'INPUT', description: 'Data ingestion and processing' },
    { step: 'EMBEDDING', description: 'Convert text to vectors' },
    { step: 'VECTOR DATABASE', description: 'Semantic storage' },
    { step: 'RETRIEVAL', description: 'Find relevant context' },
    { step: 'LLM', description: 'Large Language Model' },
    { step: 'AGENT', description: 'Decision making' },
    { step: 'OUTPUT', description: 'Intelligent response' },
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-dark-400 overflow-hidden py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-4xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-purple mb-4">AI LABORATORY</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring the intersection of Large Language Models, Retrieval-Augmented Generation, and Autonomous AI Agents
          </p>
        </motion.div>

        {/* Neural Network Visualization */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 mb-12"
          >
            {[1, 2, 3].map((col) => (
              <div key={col} className="flex flex-col items-center gap-4">
                {[1, 2, 3, 4].map((node) => (
                  <motion.div
                    key={`${col}-${node}`}
                    animate={{ boxShadow: ['0 0 10px rgba(168, 85, 247, 0.3)', '0 0 20px rgba(168, 85, 247, 0.6)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue cursor-pointer hover:scale-110 transition-transform"
                    onMouseEnter={() => setActiveNode(`${col}-${node}` as any)}
                    onMouseLeave={() => setActiveNode(null)}
                  />
                ))}
              </div>
            ))}
          </motion.div>

          {/* Connection Lines */}
          <svg className="w-full h-40 mb-8" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#00d9ff" />
              </linearGradient>
            </defs>
            {/* Example connection paths */}
            <line x1="50" y1="100" x2="150" y2="100" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.5" />
            <line x1="150" y1="100" x2="300" y2="100" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.5" />
            <line x1="300" y1="100" x2="450" y2="100" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.5" />
            <line x1="450" y1="100" x2="550" y2="100" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.5" />
          </svg>
        </div>

        {/* AI Pipeline */}
        <div className="space-y-4">
          {pipeline.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-6 rounded-lg hover:bg-opacity-40 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold neon-blue group-hover:text-neon-purple transition-colors">
                      {item.step}
                    </h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
                {index < pipeline.length - 1 && (
                  <div className="text-2xl text-gray-600">→</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AILaboratory;
