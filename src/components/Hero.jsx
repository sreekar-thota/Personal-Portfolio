import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Gamepad2, ChevronDown } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import { PLAYER_INFO } from '../data/portfolioData';

export default function Hero({ onEnterPortfolio, onViewProjects }) {
  const roles = ["DEVELOPER", "CREATOR", "GAME ENTHUSIAST"];
  const cinematicEase = [0.22, 1, 0.36, 1];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden select-none"
    >
      {/* =========================================================================
          PHASE 2.1 — LARGE BACKGROUND NAME WATERMARK (z-0, absolute)
          Reveals first after loading screen disappears.
          Stays dim and fixed in the background behind all elements.
         ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1.2, ease: cinematicEase, delay: 0.15 }}
        className="hero-background-name absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-0 px-4 sm:px-6 w-full"
        aria-hidden="true"
      >
        <span className="font-black hud-font-title tracking-tight text-center uppercase whitespace-nowrap text-white text-[7.8vw] sm:text-[7.2vw] md:text-[6.8vw] lg:text-[6.4vw] leading-none opacity-90 blur-[0.5px]">
          SREEKAR THOTA
        </span>
      </motion.div>

      {/* =========================================================================
          PHASE 2.2 — FOREGROUND PLAYER IDENTITY (z-10, relative)
          Reveals after background text begins appearing.
         ========================================================================= */}
      <div className="hero-foreground-content relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Foreground Name & Badges Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: cinematicEase, delay: 0.4 }}
          className="flex flex-col items-center space-y-3 mb-2"
        >
          {/* Player Tag & Roles */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            <span className="px-3 py-1 text-[11px] sm:text-xs font-mono font-black tracking-widest bg-cyber-cyan/15 border border-cyber-cyan/50 text-cyber-cyan rounded shadow-neon-cyan/20">
              PLAYER
            </span>
            {roles.map((role, idx) => (
              <span
                key={role}
                className="px-3 py-1 text-[10px] sm:text-xs font-mono font-bold tracking-wider bg-cyber-card/90 border border-white/10 text-cyber-subtext rounded flex items-center gap-1.5"
              >
                <span className="text-cyber-green text-[9px]">0{idx + 1}</span>
                {role}
              </span>
            ))}
          </div>

          {/* Prominent Foreground Name */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black hud-font-title tracking-tight text-white uppercase mt-2">
            <span className="block text-glow-cyan text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyber-cyan">
              SREEKAR THOTA
            </span>
          </h1>
        </motion.div>

        {/* System Ready Badge (delay: 0.7s) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: cinematicEase, delay: 0.7 }}
          className="my-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyber-card/90 border border-cyber-green/40 text-xs font-mono text-cyber-green shadow-hud-card"
        >
          <span className="w-2 h-2 rounded-full bg-cyber-green animate-ping" />
          <span className="text-white font-bold tracking-wider">SYSTEM READY</span>
          <span className="text-cyber-cyan/40">//</span>
          <span className="text-cyber-green font-semibold">PLAYER ONLINE</span>
          <span className="hidden sm:inline text-cyber-cyan/40">|</span>
          <span className="hidden sm:inline text-cyber-subtext text-[11px]">SYS: NOMINAL</span>
        </motion.div>

        {/* =========================================================================
            PHASE 2.3 — HEADLINE & DESCRIPTION (delay: 0.95s)
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: cinematicEase, delay: 0.95 }}
          className="space-y-3 sm:space-y-4 max-w-3xl mx-auto mt-2"
        >
          <div className="py-1">
            <p className="text-lg sm:text-2xl md:text-3xl font-semibold hud-font-tech tracking-wide text-cyber-cyan/90">
              “BUILDING DIGITAL WORLDS, <br className="hidden sm:inline" />
              <span className="text-white font-bold">ONE PROJECT AT A TIME.</span>”
            </p>
          </div>

          <p className="text-xs sm:text-base md:text-lg text-cyber-subtext font-normal leading-relaxed max-w-2xl mx-auto">
            B.Tech student and developer creating interactive websites, AI-powered applications and experimental digital experiences.
          </p>
        </motion.div>

        {/* =========================================================================
            PHASE 2.4 — CTA BUTTONS (staggered delay: 1.25s & 1.4s)
           ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: cinematicEase, delay: 1.25 }}
            onClick={() => {
              sound.playClick();
              onEnterPortfolio();
            }}
            onMouseEnter={() => sound.playHover()}
            className="w-full sm:w-auto cyber-btn cyber-btn-solid px-8 py-3.5 font-mono text-sm tracking-wider flex items-center justify-center gap-2 group shadow-neon-cyan"
          >
            <span>ENTER PORTFOLIO</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: cinematicEase, delay: 1.4 }}
            onClick={() => {
              sound.playClick();
              onViewProjects();
            }}
            onMouseEnter={() => sound.playHover()}
            className="w-full sm:w-auto cyber-btn cyber-btn-cyan px-7 py-3.5 font-mono text-sm tracking-wider flex items-center justify-center gap-2 group"
          >
            <Gamepad2 className="w-4 h-4 text-cyber-cyan group-hover:rotate-12 transition-transform" />
            <span>VIEW PROJECTS</span>
          </motion.button>
        </div>

        {/* Social Telemetry Links (delay: 1.6s) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="flex items-center gap-4 sm:gap-6 mt-10 pt-6 border-t border-white/5"
        >
          <a
            href={PLAYER_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="group flex items-center gap-2 text-xs font-mono text-cyber-subtext hover:text-cyber-cyan transition-colors"
          >
            <div className="p-2 rounded bg-cyber-card border border-white/10 group-hover:border-cyber-cyan group-hover:shadow-neon-cyan transition-all">
              <Github className="w-4 h-4" />
            </div>
            <span className="hidden sm:inline">GITHUB</span>
          </a>

          <a
            href={PLAYER_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="group flex items-center gap-2 text-xs font-mono text-cyber-subtext hover:text-cyber-cyan transition-colors"
          >
            <div className="p-2 rounded bg-cyber-card border border-white/10 group-hover:border-cyber-cyan group-hover:shadow-neon-cyan transition-all">
              <Linkedin className="w-4 h-4" />
            </div>
            <span className="hidden sm:inline">LINKEDIN</span>
          </a>

          <a
            href={`mailto:${PLAYER_INFO.socials.email}`}
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="group flex items-center gap-2 text-xs font-mono text-cyber-subtext hover:text-cyber-green transition-colors"
          >
            <div className="p-2 rounded bg-cyber-card border border-white/10 group-hover:border-cyber-green group-hover:shadow-neon-green transition-all">
              <Mail className="w-4 h-4" />
            </div>
            <span className="hidden sm:inline">EMAIL TRANSMISSION</span>
          </a>
        </motion.div>

        {/* Scroll Indicator (delay: 1.8s) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="mt-10 text-cyber-cyan/50 hover:text-cyber-cyan cursor-pointer"
          onClick={onEnterPortfolio}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 mx-auto" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
