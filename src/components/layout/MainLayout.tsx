import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { StarsBackground } from '@/components/ui/stars-background';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-background selection:bg-primary/30 overflow-hidden">
      <StarsBackground />
      <Navbar />
      <main className="relative z-10 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};
