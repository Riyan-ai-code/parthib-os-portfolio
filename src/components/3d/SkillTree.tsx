'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    category: 'BACKEND',
    skills: ['FastAPI', 'Node.js', 'Django', 'GraphQL', 'REST APIs', 'Microservices'],
  },
  {
    category: 'DATA ENGINEERING',
    skills: ['Apache Spark', 'Airflow', 'Kafka', 'ETL', 'Data Modeling', 'SQL'],
  },
  {
    category: 'MACHINE LEARNING',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Computer Vision', 'NLP', 'Deep Learning'],
  },
  {
    category: 'LLMs & AI',
    skills: ['LangChain', 'RAG', 'Fine-tuning', 'Embeddings', 'Prompt Engineering', 'AI Agents'],
  },
  {
    category: 'DEVOPS',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'GCP', 'Infrastructure as Code'],
  },
  {
    category: 'FRONTEND',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js', 'WebGL'],
  },
];

const SkillTree = () => {
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null);

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
          <h2 className="text-4xl md:text-5xl font-bold neon-blue mb-2">SKILL TREE</h2>
          <p className="text-gray-400">Interactive technology and expertise map</p>
        </motion.div>
      </div>

      {/* Skill Grid */}
      <div className="relative z-10 w-full max-w-5xl px-4 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <motion.button
                onClick={() => setExpandedCategory(
                  expandedCategory === category.category ? null : category.category
                )}
                className="w-full glass p-6 rounded-lg text-left hover:bg-opacity-40 transition-all group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold neon-purple group-hover:text-neon-blue transition-colors">
                    {category.category}
                  </h3>
                  <motion.div
                    animate={expandedCategory === category.category ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-neon-blue"
                  >
                    ▼
                  </motion.div>
                </div>
              </motion.button>

              {/* Skills List */}
              <motion.div
                initial={false}
                animate={expandedCategory === category.category ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-2 space-y-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 py-2 glass rounded-lg text-sm neon-blue border border-neon-blue/30 hover:border-neon-blue cursor-pointer transition-all hover:bg-neon-blue/10"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Experience Level */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 glass p-8 rounded-lg"
        >
          <h3 className="text-lg font-bold neon-blue mb-6">PROFICIENCY LEVELS</h3>
          <div className="space-y-4">
            {[
              { skill: 'Backend Development', level: 95 },
              { skill: 'Machine Learning', level: 85 },
              { skill: 'Data Engineering', level: 88 },
              { skill: 'DevOps & Infrastructure', level: 80 },
              { skill: 'LLMs & AI Agents', level: 90 },
              { skill: 'Frontend Development', level: 75 },
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-mono text-gray-400">{item.skill}</span>
                  <span className="text-sm font-mono neon-blue">{item.level}%</span>
                </div>
                <div className="h-2 bg-dark-300 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillTree;
