'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ARCHITECTURE_COMPONENTS = [
  { name: 'CLIENT', description: 'Web/Mobile Frontend', color: 'from-neon-blue to-blue-500' },
  { name: 'API GATEWAY', description: 'Request routing & auth', color: 'from-blue-500 to-purple-500' },
  { name: 'FASTAPI', description: 'Backend services', color: 'from-purple-500 to-pink-500' },
  { name: 'AUTH SERVICE', description: 'JWT & permissions', color: 'from-pink-500 to-red-500' },
  { name: 'BUSINESS LOGIC', description: 'Core operations', color: 'from-red-500 to-orange-500' },
  { name: 'REDIS', description: 'Caching layer', color: 'from-orange-500 to-yellow-500' },
  { name: 'POSTGRESQL', description: 'Data persistence', color: 'from-yellow-500 to-green-500' },
  { name: 'AI SERVICE', description: 'ML inference', color: 'from-green-500 to-teal-500' },
  { name: 'LLM', description: 'Language models', color: 'from-teal-500 to-cyan-500' },
];

const BackendArchitecture = () => {
  const [activeComponent, setActiveComponent] = React.useState<number | null>(null);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-dark-400 py-20">
      {/* Header */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-blue mb-2">BACKEND ARCHITECTURE</h2>
          <p className="text-gray-400">3D visualization of system design and data flow</p>
        </motion.div>
      </div>

      {/* Architecture Diagram */}
      <div className="relative z-10 w-full max-w-4xl px-4 pt-32">
        <div className="space-y-4">
          {ARCHITECTURE_COMPONENTS.map((component, index) => (
            <React.Fragment key={index}>
              {/* Component Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onHoverStart={() => setActiveComponent(index)}
                onHoverEnd={() => setActiveComponent(null)}
                className="glass p-6 rounded-lg cursor-pointer group overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-br ${component.color} flex items-center justify-center font-bold text-white text-xl`}
                      animate={activeComponent === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Text */}
                    <div>
                      <h3 className="text-lg font-bold neon-blue group-hover:text-neon-purple transition-colors">
                        {component.name}
                      </h3>
                      <p className="text-sm text-gray-400">{component.description}</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < ARCHITECTURE_COMPONENTS.length - 1 && (
                    <motion.div
                      animate={activeComponent === index ? { x: 5, scale: 1.2 } : { x: 0, scale: 1 }}
                      className="text-2xl text-gray-600"
                    >
                      ↓
                    </motion.div>
                  )}
                </div>

                {/* Hover Details */}
                {activeComponent === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-neon-blue/30"
                  >
                    <p className="text-sm text-gray-300">
                      This component handles {component.description.toLowerCase()} and communicates with adjacent layers in the architecture.
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Data Flow Visualization */}
              {index < ARCHITECTURE_COMPONENTS.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.05, duration: 0.5 }}
                  className="flex justify-center py-2"
                >
                  <svg width="40" height="20" viewBox="0 0 40 20" className="text-neon-purple/50">
                    <path
                      d="M0 10 Q20 0 40 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackendArchitecture;
