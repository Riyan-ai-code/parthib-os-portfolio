'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PortfolioContextType {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  isSoundEnabled: boolean;
  setIsSoundEnabled: (enabled: boolean) => void;
  cameraMode: 'cinematic' | 'fps' | 'orbit';
  setCameraMode: (mode: 'cinematic' | 'fps' | 'orbit') => void;
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isSoundEnabled, setIsSoundEnabled] = useState(false);
  const [cameraMode, setCameraMode] = useState<'cinematic' | 'fps' | 'orbit'>('cinematic');
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <PortfolioContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        isSoundEnabled,
        setIsSoundEnabled,
        cameraMode,
        setCameraMode,
        isLoaded,
        setIsLoaded,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within PortfolioProvider');
  }
  return context;
}
