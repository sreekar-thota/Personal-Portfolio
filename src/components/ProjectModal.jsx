import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, Github, CheckCircle, AlertTriangle, 
  Cpu, Layers, Target, Shield, Terminal, ArrowRight 
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      sound.playClose();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <div 
        onClick={handleBackdropClick}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-cyber-darker border-2 border-cyber-cyan/40 rounded-xl overflow-hidden shadow-2xl hud-corner-box my-auto"
        >
          {/* Top Modal HUD Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-cyber-card/90 border-b border-cyber-cyan/30">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-black text-cyber-cyan px-2.5 py-0.5 rounded bg-cyber-cyan/15 border border-cyber-cyan/40">
                MISSION {project.missionNumber}
              </span>
              <span className="font-mono text-xs font-bold text-cyber-subtext tracking-wider">
                {project.codeName}
              </span>
            </div>

            <button
              onClick={() => {
                sound.playClose();
                onClose();
              }}
              className="p-1.5 rounded-lg bg-cyber-card border border-white/10 text-cyber-subtext hover:text-white hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
            
            {/* Main Preview Banner */}
            <div className="relative rounded-lg overflow-hidden border border-cyber-cyan/30 group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-contain bg-black/60 object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <div className="text-[10px] font-mono text-cyber-green font-bold uppercase tracking-widest">
                    {project.category}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black hud-font-title text-white">
                    {project.title}
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-cyber-card/90 border border-cyber-green text-cyber-green shadow-neon-green/30">
                  STATUS: {project.status}
                </span>
              </div>
            </div>

            {/* Quick Action Links Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="cyber-btn cyber-btn-solid px-5 py-2.5 font-mono text-xs font-bold flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LAUNCH LIVE DEPLOYMENT</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="cyber-btn cyber-btn-cyan px-5 py-2.5 font-mono text-xs font-bold flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW REPOSITORY / SOURCE</span>
                </a>
              )}
            </div>

            {/* Project Overview */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase">
                <Terminal className="w-3.5 h-3.5" />
                <span>MISSION BRIEFING & OVERVIEW</span>
              </div>
              <p className="text-sm text-cyber-text leading-relaxed bg-cyber-card/50 p-4 rounded-lg border border-white/5 font-normal">
                {project.overview}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase">
                <Shield className="w-3.5 h-3.5" />
                <span>KEY TACTICAL CAPABILITIES</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-cyber-card/70 border border-white/5 flex items-start gap-2.5 text-xs text-cyber-text"
                  >
                    <CheckCircle className="w-4 h-4 text-cyber-green shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan tracking-widest uppercase">
                <Layers className="w-3.5 h-3.5" />
                <span>DEPLOYED TECHNOLOGY STACK</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded bg-cyber-card border border-cyber-cyan/20 text-cyber-cyan font-mono text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges & Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-cyber-card/70 border border-cyber-yellow/20">
                <div className="flex items-center gap-2 text-xs font-mono text-cyber-yellow uppercase tracking-widest mb-1.5 font-bold">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>ENGINEERING CHALLENGE</span>
                </div>
                <p className="text-xs text-cyber-text leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-cyber-card/70 border border-cyber-green/20">
                <div className="flex items-center gap-2 text-xs font-mono text-cyber-green uppercase tracking-widest mb-1.5 font-bold">
                  <Target className="w-3.5 h-3.5" />
                  <span>MISSION OUTCOME & IMPACT</span>
                </div>
                <p className="text-xs text-cyber-text leading-relaxed">
                  {project.results}
                </p>
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-3.5 bg-cyber-card/90 border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-cyber-subtext">
            <span>PLAYER // MISSION DOSSIER</span>
            <button
              onClick={() => {
                sound.playClose();
                onClose();
              }}
              className="text-cyber-cyan hover:underline font-bold"
            >
              CLOSE TRANSMISSION [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
