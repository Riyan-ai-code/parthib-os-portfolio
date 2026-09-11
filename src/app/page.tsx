'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroScene from '@/components/3d/HeroScene';
import TechOrbit from '@/components/3d/TechOrbit';
import AILaboratory from '@/components/3d/AILaboratory';
import ProjectWorlds from '@/components/3d/ProjectWorlds';
import GitHubContributionCity from '@/components/3d/GitHubContributionCity';
import BackendArchitecture from '@/components/3d/BackendArchitecture';
import DataPipeline from '@/components/3d/DataPipeline';
import SkillTree from '@/components/3d/SkillTree';
import Terminal from '@/components/ui/Terminal';
import HUD from '@/components/ui/HUD';
import Navigation from '@/components/ui/Navigation';
import ContactInterface from '@/components/ui/ContactInterface';
import ParticleSystem from '@/components/effects/ParticleSystem';

const SceneContainer = dynamic(() => import('@/components/3d/SceneContainer'), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-dark-300" />,
});

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-dark-400 overflow-hidden">
      {/* Particle Background */}
      <ParticleSystem />

      {/* HUD - Always Visible */}
      <HUD />

      {/* Navigation */}
      <Navigation />

      {/* 3D Scenes */}
      <Suspense fallback={<div className="w-full h-screen bg-dark-300" />}>
        <SceneContainer>
          <section className="relative w-full h-screen" id="hero">
            <HeroScene />
          </section>

          <section className="relative w-full h-screen" id="tech-orbit">
            <TechOrbit />
          </section>

          <section className="relative w-full h-screen" id="ai-lab">
            <AILaboratory />
          </section>

          <section className="relative w-full h-screen" id="projects">
            <ProjectWorlds />
          </section>

          <section className="relative w-full h-screen" id="github">
            <GitHubContributionCity />
          </section>

          <section className="relative w-full h-screen" id="backend">
            <BackendArchitecture />
          </section>

          <section className="relative w-full h-screen" id="data-pipeline">
            <DataPipeline />
          </section>

          <section className="relative w-full h-screen" id="skills">
            <SkillTree />
          </section>

          <section className="relative w-full min-h-screen" id="terminal">
            <Terminal />
          </section>

          <section className="relative w-full min-h-screen" id="contact">
            <ContactInterface />
          </section>
        </SceneContainer>
      </Suspense>
    </main>
  );
}
