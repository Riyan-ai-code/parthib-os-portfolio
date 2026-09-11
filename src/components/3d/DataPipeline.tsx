'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DATA_PIPELINE_STAGES = [
  { stage: 'DATA SOURCE', icon: '📊', description: 'Raw data from multiple sources' },
  { stage: 'INGESTION', icon: '📥', description: 'Collect and normalize data' },
  { stage: 'KAFKA', icon: '🚀', description: 'Distributed streaming platform' },
  { stage: 'AIRFLOW', icon: '🔄', description: 'Workflow orchestration' },
  { stage: 'PROCESSING', icon: '⚙️', description: 'Apache Spark data processing' },
  { stage: 'STORAGE', icon: '💾', description: 'Persistent data warehouse' },
  { stage: 'ML MODEL', icon: '🧠', description: 'Train and validate models' },
  { stage: 'PREDICTION', icon: '🎯', description: 'Generate predictions' },
  { stage: 'API', icon: '🔌', description: 'Serve predictions via API' },
  { stage: 'USER', icon: '👤', description: 'End-user application' },
];

const DataPipeline = () => {
  const [activeStage, setActiveStage] = React.useState<number | null>(null);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-dark-400 py-20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-blue opacity-5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-purple mb-2">DATA PIPELINE</h2>
          <p className="text-gray-400">End-to-end data engineering and ML workflow</p>
        </motion.div>
      </div>

      {/* Pipeline Flow */}
      <div className="relative z-10 w-full max-w-5xl px-4 pt-32">
        {/* Desktop View - Horizontal Flow */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between mb-12 overflow-x-auto pb-4">
            {DATA_PIPELINE_STAGES.map((item, index) => (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  onHoverStart={() => setActiveStage(index)}
                  onHoverEnd={() => setActiveStage(null)}
                  className="flex-shrink-0 relative group"
                >
                  <motion.div
                    animate={activeStage === index ? { scale: 1.2 } : { scale: 1 }}
                    className="w-20 h-20 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-3xl cursor-pointer"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Tooltip */}
                  {activeStage === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 glass p-2 rounded text-center text-xs"
                    >
                      <p className="font-bold neon-blue">{item.stage}</p>
                      <p className="text-gray-400 text-xs">{item.description}</p>
                    </motion.div>
                  )}
                </motion.div>

                {/* Arrow */}
                {index < DATA_PIPELINE_STAGES.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex-shrink-0 text-2xl text-neon-blue/50 mx-2"
                  >
                    →
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile View - Vertical Flow */}
        <div className="md:hidden space-y-4">
          {DATA_PIPELINE_STAGES.map((item, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="glass p-4 rounded-lg flex items-center gap-4"
              >
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <p className="font-bold neon-blue text-sm">{item.stage}</p>
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              </motion.div>
              {index < DATA_PIPELINE_STAGES.length - 1 && (
                <div className="flex justify-center text-neon-blue/50">↓</div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Animated Particles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 p-6 glass rounded-lg"
        >
          <h3 className="text-lg font-bold neon-blue mb-4">Key Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {['Apache Spark', 'Kafka', 'Airflow', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'MLflow', 'DVC', 'Python'].map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-lg bg-neon-blue/10 border border-neon-blue/30 text-center text-sm text-neon-blue cursor-pointer hover:bg-neon-blue/20 transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DataPipeline;
