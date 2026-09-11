'use client';

import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const HeroScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        {/* Developer Name */}
        <motion.h1
          className="text-7xl md:text-8xl font-bold mb-4"
          animate={{ textShadow: ['0 0 10px rgba(0, 217, 255, 0.5)', '0 0 30px rgba(0, 217, 255, 0.8)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="neon-blue">PARTHIB</span>
        </motion.h1>

        {/* Role and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4"
        >
          <p className="text-2xl md:text-3xl neon-purple font-mono">
            AI • ML • BACKEND • SYSTEMS
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto italic">
            "Building intelligent systems that actually work."
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <div className="text-gray-500 text-sm font-mono">
            SCROLL TO EXPLORE
          </div>
          <div className="flex justify-center mt-2">
            <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-neon-blue rounded-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-neon-purple opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-blue opacity-5 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default HeroScene;
