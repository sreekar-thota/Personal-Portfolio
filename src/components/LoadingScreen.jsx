import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { sound } from '../utils/soundEffects';

export default function LoadingScreen({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Keep a stable ref to onLoaded to prevent any dependency re-trigger or timer wiping
  const onLoadedRef = useRef(onLoaded);
  onLoadedRef.current = onLoaded;

  const hasCompletedRef = useRef(false);

  // Step 1: Smooth progress animation 0% -> 100% over ~2.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        const step = Math.floor(Math.random() * 6) + 3;
        const next = prev + step;
        return next > 100 ? 100 : next;
      });
    }, 55);

    return () => clearInterval(timer);
  }, []);

  // Step 2 & 3: When progress reaches 100%, show READY, hold 500ms, then trigger automatic fade out
  useEffect(() => {
    if (progress >= 100 && !hasCompletedRef.current) {
      hasCompletedRef.current = true;
      setIsReady(true);
      sound.playBeep(920, 0.08, 'sine', 0.08);

      // 500ms pause showing "100% READY // ENTERING MATRIX"
      const holdTimer = setTimeout(() => {
        setIsFadingOut(true);

        // 700ms fade-out duration, then trigger portfolio reveal
        const fadeTimer = setTimeout(() => {
          if (onLoadedRef.current) {
            onLoadedRef.current();
          }
        }, 700);

      }, 500);

      return () => clearTimeout(holdTimer);
    }
  }, [progress]);

  const handleSkip = () => {
    if (onLoadedRef.current) {
      onLoadedRef.current();
    }
  };

  // ASCII Progress Bar: [████████░░░░░░░░]
  const totalBlocks = 20;
  const filledBlocks = Math.round((progress / 100) * totalBlocks);
  const blockString = '█'.repeat(filledBlocks) + '░'.repeat(totalBlocks - filledBlocks);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ 
        opacity: isFadingOut ? 0 : 1, 
        scale: isFadingOut ? 0.98 : 1 
      }}
      transition={{ 
        duration: 0.7, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cyber-darker text-cyber-text select-none scanline-overlay pointer-events-auto"
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

      {/* Center Minimal HUD Loading Interface */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm w-full">
        
        {/* Status Header: ● SYSTEM READY / INITIALIZING */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className={`w-2.5 h-2.5 rounded-full ${isReady ? 'bg-cyber-green shadow-neon-green' : 'bg-cyber-cyan animate-ping'}`} />
          <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-cyber-cyan uppercase">
            {isReady ? 'SYSTEM READY' : 'INITIALIZING'}
          </span>
        </div>

        {/* Dynamic ASCII Progress Bar Box */}
        <div className="w-full p-4 rounded-xl bg-cyber-card/90 border border-cyber-cyan/30 hud-corner-box shadow-hud-card">
          
          {/* Top Label & Percentage */}
          <div className="flex justify-between items-center text-xs font-mono mb-2">
            <span className="text-cyber-subtext tracking-wider">
              {isReady ? 'PAYLOAD LOADED' : 'LOADING ASSETS'}
            </span>
            <span className="text-white font-bold tracking-widest">{progress}%</span>
          </div>

          {/* ASCII Bar */}
          <div className="font-mono text-xs sm:text-sm text-cyber-cyan tracking-wider overflow-hidden whitespace-nowrap bg-black/60 py-2 px-3 rounded border border-cyber-cyan/20 text-center select-none shadow-inner">
            [{blockString}]
          </div>

          {/* Smooth Graphical Bar */}
          <div className="w-full h-1 bg-black/80 rounded-full mt-3 overflow-hidden border border-white/5">
            <motion.div
              className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-green shadow-neon-cyan"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

        {/* 100% READY Status Badge */}
        <div className="h-8 flex items-center justify-center mt-4">
          {isReady ? (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs sm:text-sm font-mono font-black text-cyber-green tracking-widest uppercase flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
              100% READY // ENTERING MATRIX
            </motion.div>
          ) : (
            <span className="text-[11px] font-mono text-cyber-subtext/70 tracking-widest">
              INITIALIZING PORTFOLIO PROTOCOL...
            </span>
          )}
        </div>

        {/* Optional Skip button */}
        <button
          onClick={handleSkip}
          className="mt-6 text-[10px] font-mono text-cyber-subtext/50 hover:text-cyber-cyan transition-colors underline underline-offset-4"
        >
          [ SKIP INTRO ]
        </button>
      </div>

      {/* Bottom Telemetry Version */}
      <div className="absolute bottom-6 font-mono text-[10px] text-cyber-subtext/40 tracking-widest">
        SYS_BOOT // SREEKAR THOTA — PLAYER
      </div>
    </motion.div>
  );
}
