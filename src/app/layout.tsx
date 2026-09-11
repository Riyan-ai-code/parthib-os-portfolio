'use client';

import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { AudioProvider } from '@/context/AudioContext';
import { PortfolioProvider } from '@/context/PortfolioContext';
import LoadingScreen from '@/components/LoadingScreen';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PARTHIB.OS - 3D Developer Portfolio',
  description: 'Premium interactive 3D developer portfolio - A futuristic digital universe experience',
  keywords: ['developer', 'portfolio', '3D', 'AI', 'ML', 'backend'],
  openGraph: {
    title: 'PARTHIB.OS - Premium 3D Developer Portfolio',
    description: 'Enter the digital universe of a full-stack AI/ML developer',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-dark-400 text-white overflow-x-hidden`}
      >
        <PortfolioProvider>
          <AudioProvider>
            <LoadingScreen />
            {children}
          </AudioProvider>
        </PortfolioProvider>
      </body>
    </html>
  );
}
