'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    id: 1,
    name: 'Impact IQ',
    description: 'AI-powered insights and predictive analytics platform',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'ML Models'],
    icon: '📊',
  },
  {
    id: 2,
    name: 'Data Pipeline',
    description: 'Scalable real-time data engineering infrastructure',
    technologies: ['Kafka', 'Airflow', 'Apache Spark', 'Redis'],
    icon: '🔄',
  },
  {
    id: 3,
    name: 'ML Models',
    description: 'Machine learning model development and deployment',
    technologies: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'MLflow'],
    icon: '🧠',
  },
  {
    id: 4,
    name: 'LLM Integration',
    description: 'Advanced language model applications and fine-tuning',
    technologies: ['LangChain', 'OpenAI API', 'Embeddings', 'RAG'],
    icon: '🤖',
  },
];

const ProjectWorlds = () => {
  const [hoveredProject, setHoveredProject] = React.useState<number | null>(null);

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
          <h2 className="text-4xl md:text-5xl font-bold neon-blue mb-2">PROJECT WORLDS</h2>
          <p className="text-gray-400">Interactive 3D environments for featured projects</p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 w-full max-w-6xl px-4 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: project.id * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="glass p-8 rounded-lg cursor-pointer group overflow-hidden relative"
            >
              {/* Background Glow on Hover */}
              {hoveredProject === project.id && (
                <motion.div
                  layoutId="hover-glow"
                  className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold neon-blue mb-2 group-hover:text-neon-purple transition-colors">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={hoveredProject === project.id ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex gap-4"
                >
                  <button className="flex-1 px-4 py-2 bg-neon-blue/20 border border-neon-blue text-neon-blue rounded hover:bg-neon-blue/30 transition-all text-sm font-mono">
                    VIEW PROJECT
                  </button>
                  <button className="flex-1 px-4 py-2 bg-neon-purple/20 border border-neon-purple text-neon-purple rounded hover:bg-neon-purple/30 transition-all text-sm font-mono">
                    GITHUB
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectWorlds;
