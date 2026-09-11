'use client';

import React from 'react';
import { motion } from 'framer-motion';

const GitHubContributionCity = () => {
  // Simulated contribution data (12 weeks, 7 days each)
  const generateContributions = () => {
    const contributions = [];
    for (let i = 0; i < 84; i++) {
      contributions.push(Math.floor(Math.random() * 50));
    }
    return contributions;
  };

  const contributions = generateContributions();
  const maxContribution = Math.max(...contributions);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-dark-400 py-20">
      {/* Header */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-purple mb-2">CONTRIBUTION CITY</h2>
          <p className="text-gray-400">Your code activity visualized as a futuristic cityscape</p>
        </motion.div>
      </div>

      {/* City Grid */}
      <div className="relative z-10 w-full max-w-4xl px-4 pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="glass p-8 rounded-lg"
        >
          {/* Contribution Grid */}
          <div className="grid gap-1 mb-8" style={{
            gridTemplateColumns: 'repeat(12, 1fr)',
          }}>
            {contributions.map((value, index) => {
              const height = (value / maxContribution) * 100;
              const intensity = value / maxContribution;
              const colors = [
                'rgba(5, 5, 5, 0.5)',
                'rgba(16, 185, 129, 0.4)',
                'rgba(16, 185, 129, 0.6)',
                'rgba(0, 217, 255, 0.7)',
                'rgba(168, 85, 247, 0.9)',
              ];
              const colorIndex = Math.floor(intensity * (colors.length - 1));

              return (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${Math.max(30, height)}px` }}
                  transition={{ delay: index * 0.02, duration: 0.5 }}
                  whileHover={{ scale: 1.2, boxShadow: '0 0 20px rgba(0, 217, 255, 0.8)' }}
                  className="rounded-sm cursor-pointer transition-all"
                  style={{
                    backgroundColor: colors[colorIndex],
                    minHeight: '30px',
                  }}
                  title={`${value} contributions`}
                />
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span>LESS</span>
            <div className="flex gap-1">
              {[0, 0.25, 0.5, 0.75, 1].map((val) => {
                const colors = ['rgba(5, 5, 5, 0.5)', 'rgba(16, 185, 129, 0.4)', 'rgba(16, 185, 129, 0.6)', 'rgba(0, 217, 255, 0.7)', 'rgba(168, 85, 247, 0.9)'];
                const colorIndex = Math.floor(val * (colors.length - 1));
                return (
                  <div
                    key={val}
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: colors[colorIndex] }}
                  />
                );
              })}
            </div>
            <span>MORE</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { label: 'TOTAL CONTRIBUTIONS', value: '1,247' },
            { label: 'REPOSITORIES', value: '32' },
            { label: 'LANGUAGES', value: '8' },
            { label: 'STREAK', value: '45 DAYS' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="glass p-4 rounded-lg text-center"
            >
              <div className="text-2xl font-bold neon-blue mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400 font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default GitHubContributionCity;
