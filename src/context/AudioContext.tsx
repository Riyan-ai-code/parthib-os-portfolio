'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { usePortfolio } from './PortfolioContext';

interface AudioContextType {
  playSound: (soundName: string) => void;
  playAmbient: () => void;
  stopAmbient: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const { isSoundEnabled } = usePortfolio();

  const playSound = (soundName: string) => {
    if (!isSoundEnabled) return;
    // Sound playback logic will be implemented
  };

  const playAmbient = () => {
    if (!isSoundEnabled) return;
    // Ambient sound logic
  };

  const stopAmbient = () => {
    // Stop ambient sound
  };

  return (
    <AudioContext.Provider value={{ playSound, playAmbient, stopAmbient }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
}
