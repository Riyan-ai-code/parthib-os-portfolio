'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { usePortfolio } from '@/context/PortfolioContext';

const CameraController = ({ scrollProgress }: { scrollProgress: number }) => {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    // Cinematic camera movement based on scroll
    const targetY = scrollProgress * 100;
    camera.position.lerp(
      new THREE.Vector3(0, targetY, 80),
      0.05
    );
    camera.lookAt(0, targetY, 0);
  }, [scrollProgress, camera]);

  return null;
};

interface SceneContainerProps {
  children: React.ReactNode;
}

const SceneContainer = ({ children }: SceneContainerProps) => {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const totalHeight = containerRef.current.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        setScrollProgress(scrolled / totalHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <Canvas
        className="fixed inset-0 z-0"
        camera={{ position: [0, 0, 80], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 80]} fov={75} />
        <color attach="background" args={['#050505']} />

        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#00d9ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#a855f7" />

        {/* Fog for depth */}
        <fog attach="fog" args={['#050505', 50, 200]} />

        {/* Camera Controller */}
        <CameraController scrollProgress={scrollProgress} />

        {/* OrbitControls for interactivity */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>

      {/* Content Sections */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SceneContainer;
