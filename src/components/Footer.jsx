import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Terminal, Shield } from 'lucide-react';
import { PLAYER_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-cyber-darker py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Player Creds */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-black text-white tracking-widest">
              SREEKAR THOTA
            </span>
            <span className="font-mono text-xs text-cyber-green px-1.5 py-0.5 rounded bg-cyber-green/10 border border-cyber-green/30">
              PLAYER
            </span>
          </div>
          <div className="text-[11px] font-mono text-cyber-subtext/60">
            © 2026 Sreekar Thota. All rights reserved.
          </div>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={PLAYER_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="p-2.5 rounded-lg bg-cyber-card border border-white/10 text-cyber-subtext hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-neon-cyan transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PLAYER_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            className="p-2.5 rounded-lg bg-cyber-card border border-white/10 text-cyber-subtext hover:text-cyber-cyan hover:border-cyber-cyan hover:shadow-neon-cyan transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PLAYER_INFO.socials.email}`}
            onMouseEnter={() => sound.playHover()}
            className="p-2.5 rounded-lg bg-cyber-card border border-white/10 text-cyber-subtext hover:text-cyber-green hover:border-cyber-green hover:shadow-neon-green transition-all"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back To Top */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => sound.playHover()}
          className="cyber-btn cyber-btn-cyan px-4 py-2 font-mono text-xs font-bold flex items-center gap-2"
        >
          <span>RETURN TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
