import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ShieldAlert, Sparkles, Terminal } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Navbar({ 
  activeSection, 
  soundEnabled, 
  onToggleSound, 
  onCheatCodeTrigger, 
  playerClickCount, 
  onPlayerClick 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', num: '01', label: 'HOME' },
    { id: 'about', num: '02', label: 'ABOUT' },
    { id: 'skills', num: '03', label: 'SKILLS' },
    { id: 'projects', num: '04', label: 'PROJECTS' },
    { id: 'achievements', num: '05', label: 'ACHIEVEMENTS' },
    { id: 'contact', num: '06', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-cyber-darker/90 backdrop-blur-md border-b border-cyber-cyan/20 py-2.5 shadow-lg shadow-black/40' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Player Identifier */}
          <div className="flex items-center gap-3">
            <button
              onClick={onPlayerClick}
              onMouseEnter={() => sound.playHover()}
              className="group flex items-center gap-2.5 text-left focus:outline-none"
              title="Click 5 times for Cheat Mode"
            >
              {/* Profile Photo with Cyan Border & Glow */}
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-cyber-card border border-cyber-cyan/50 group-hover:border-cyber-cyan group-hover:shadow-neon-cyan group-hover:scale-105 transition-all duration-300 shrink-0">
                <img
                  src="/images/profile-photo.jpg"
                  alt="Sreekar Thota"
                  className="w-full h-full object-cover object-[center_18%]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-black tracking-widest text-white group-hover:text-cyber-cyan transition-colors">
                  SREEKAR THOTA
                </span>
                <span className="font-mono text-[9px] text-cyber-green flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
                  PLAYER // ACTIVE
                  {playerClickCount > 0 && playerClickCount < 5 && (
                    <span className="text-cyber-yellow text-[9px]">[{5 - playerClickCount}]</span>
                  )}
                </span>
              </div>
            </button>
          </div>

          {/* Desktop HUD Navigation Bar */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => sound.playHover()}
                  className={`group relative px-3 py-1.5 font-mono text-xs font-semibold tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-cyber-cyan' 
                      : 'text-cyber-subtext hover:text-white'
                  }`}
                >
                  <span className={`text-[10px] transition-colors ${
                    isActive ? 'text-cyber-green font-bold' : 'text-cyber-subtext/60 group-hover:text-cyber-cyan'
                  }`}>
                    [{item.num}]
                  </span>
                  <span className="transform group-hover:translate-x-0.5 transition-transform">
                    {item.label}
                  </span>

                  {/* Active HUD indicator bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-green shadow-neon-cyan"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: SFX Toggle & Telemetry */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Audio Toggle */}
            <button
              onClick={onToggleSound}
              onMouseEnter={() => sound.playHover()}
              className={`px-2.5 py-1.5 rounded font-mono text-[11px] font-bold border transition-all flex items-center gap-1.5 ${
                soundEnabled 
                  ? 'bg-cyber-cyan/15 border-cyber-cyan text-cyber-cyan shadow-neon-cyan' 
                  : 'bg-cyber-card border-white/10 text-cyber-subtext hover:text-white'
              }`}
              title={soundEnabled ? "SFX Enabled" : "Enable Sci-Fi Audio FX"}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
                  <span className="hidden sm:inline">SFX: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">SFX: OFF</span>
                </>
              )}
            </button>

            {/* Quick Quest Trigger Button */}
            <button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => sound.playHover()}
              className="hidden sm:flex cyber-btn cyber-btn-cyan px-3.5 py-1.5 font-mono text-xs font-bold items-center gap-1.5"
            >
              <Terminal className="w-3 h-3 text-cyber-cyan" />
              <span>NEW QUEST</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-cyber-darker/95 backdrop-blur-xl border-b border-cyber-cyan/30 p-5 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col space-y-2">
              <div className="text-[10px] font-mono text-cyber-cyan/60 tracking-widest pb-1 border-b border-white/5">
                // SYSTEM NAVIGATION
              </div>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between p-3 rounded font-mono text-sm tracking-wider border transition-all ${
                      isActive 
                        ? 'bg-cyber-cyan/15 border-cyber-cyan text-cyber-cyan font-bold' 
                        : 'bg-cyber-card/60 border-white/5 text-cyber-subtext hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-cyber-green text-xs">[{item.num}]</span>
                      {item.label}
                    </span>
                    {isActive && <span className="text-xs text-cyber-green font-bold">ACTIVE</span>}
                  </button>
                );
              })}

              <div className="pt-3 flex gap-2">
                <button
                  onClick={onToggleSound}
                  className="flex-1 py-2.5 rounded bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs flex items-center justify-center gap-2"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  <span>{soundEnabled ? 'SFX: ENABLED' : 'SFX: MUTED'}</span>
                </button>
                <button
                  onClick={onCheatCodeTrigger}
                  className="px-3 py-2.5 rounded bg-cyber-card border border-cyber-yellow/40 text-cyber-yellow font-mono text-xs flex items-center gap-1.5"
                  title="Cheat Code"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>CHEAT</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
