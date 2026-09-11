'use client';

import React, { useEffect, useState } from 'react';
import { usePortfolio } from '@/context/PortfolioContext';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const { isLoaded, setIsLoaded } = usePortfolio();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoaded) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 500);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isLoaded, setIsLoaded]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-400"
        >
          <div className="w-full max-w-md px-8">
            {/* Loading Animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold neon-blue mb-2">PARTHIB</h1>
              <p className="text-neon-purple text-sm">OS INITIALIZATION</p>
            </motion.div>

            {/* Progress Messages */}
            <div className="space-y-2 mb-8 text-sm font-mono text-gray-400">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                $ Loading 3D Environment...
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                $ Initializing Neural Network...
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                $ Loading Projects...
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                $ Fetching GitHub Data...
              </motion.p>
            </div>

            {/* Progress Bar */}
            <div className="relative h-1 bg-dark-300 rounded-full overflow-hidden mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
              />
            </div>

            {/* Progress Text */}
            <div className="text-center">
              <p className="text-xs text-gray-500 font-mono">
                {Math.round(progress)}%
              </p>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-12 text-center text-xs text-gray-600"
            >
              <p>"Building intelligent systems that actually work."</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
