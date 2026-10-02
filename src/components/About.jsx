import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, User, Cpu, Sparkles, Award, Code2, Compass } from 'lucide-react';
import { PLAYER_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export default function About() {
  const profileItems = [
    { label: "CLASS", value: PLAYER_INFO.class, icon: Code2, color: "text-cyber-cyan" },
    { label: "LEVEL", value: PLAYER_INFO.level, icon: Award, color: "text-cyber-green" },
    { label: "SPECIALIZATION", value: PLAYER_INFO.specialization, icon: Cpu, color: "text-cyber-cyan" },
    { label: "INTEREST", value: PLAYER_INFO.interest, icon: Compass, color: "text-cyber-yellow" }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>CHARACTER DOSSIER // [02]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black hud-font-title tracking-tight text-white uppercase text-glow-cyan">
            PLAYER PROFILE
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cyber-subtext font-mono">
            Core credentials, build specifications & active directive.
          </p>
        </div>

        {/* Main RPG Character Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-cyber-card/90 backdrop-blur-md rounded-xl border border-cyber-cyan/25 p-6 sm:p-8 lg:p-10 hud-corner-box shadow-hud-card"
        >
          {/* Top HUD Banner Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyber-green animate-ping" />
              <span className="font-mono text-xs font-bold text-cyber-green tracking-widest">
                PLAYER RECORD: AUTHENTICATED
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyber-subtext">
              <span className="px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-bold">
                UUID: P01-SKR-2026
              </span>
              <span className="hidden sm:inline text-cyber-subtext/60">CLEARANCE: DEV_TIER_1</span>
            </div>
          </div>

          {/* Core Card Grid: Holographic Avatar & Stats / Bio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8 items-center">
            
            {/* Left Column: Holographic Avatar Display */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group">
                
                {/* Glowing Outer HUD Rings */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyber-cyan to-cyber-green rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500" />
                
                {/* Avatar Frame Box */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-xl overflow-hidden bg-cyber-darker border-2 border-cyber-cyan/40 group-hover:border-cyber-cyan transition-all duration-300">
                  <img
                    src={PLAYER_INFO.avatar}
                    alt={PLAYER_INFO.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Holographic Scanline Overlay */}
                  <div className="absolute inset-0 scanline-overlay opacity-40 pointer-events-none" />
                </div>
              </div>

              {/* Character Callout Name */}
              <div className="text-center mt-5">
                <h3 className="text-2xl font-black hud-font-title tracking-wider text-white">
                  {PLAYER_INFO.name}
                </h3>
                <p className="text-xs font-mono text-cyber-cyan tracking-widest mt-0.5">
                  MAIN PLAYABLE CHARACTER
                </p>
              </div>
            </div>

            {/* Right Column: Player Specs, Bio & Objective */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Specs Matrix Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {profileItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-3.5 rounded-lg bg-cyber-darker/70 border border-white/5 hover:border-cyber-cyan/30 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                        <span className="text-[10px] font-mono tracking-widest text-cyber-subtext uppercase">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Professional Bio */}
              <div className="p-4 rounded-lg bg-cyber-darker/50 border border-white/5">
                <div className="text-[10px] font-mono text-cyber-cyan tracking-widest mb-1.5">
                  // BIOGRAPHICAL SUMMARY
                </div>
                <p className="text-sm text-cyber-text leading-relaxed font-normal">
                  {PLAYER_INFO.bio}
                </p>
              </div>

              {/* Current Objective Box */}
              <div className="p-4 rounded-lg bg-gradient-to-r from-cyber-cyan/10 to-cyber-green/10 border border-cyber-cyan/40 flex items-start gap-3.5 shadow-neon-cyan/20">
                <div className="p-2 rounded bg-cyber-darker border border-cyber-cyan/50 text-cyber-cyan shrink-0 mt-0.5">
                  <Target className="w-4 h-4 text-cyber-cyan animate-pulse" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold tracking-widest text-cyber-cyan uppercase">
                    CURRENT OBJECTIVE
                  </div>
                  <p className="text-sm font-semibold text-white tracking-wide mt-0.5">
                    “{PLAYER_INFO.currentObjective}”
                  </p>
                </div>
              </div>

              {/* Attributes / RPG Stats Bar */}
              <div className="pt-2">
                <div className="text-[10px] font-mono text-cyber-subtext tracking-widest uppercase mb-2.5">
                  ATTRIBUTE PROFICIENCIES
                </div>
                <div className="space-y-2.5">
                  {PLAYER_INFO.stats.map((stat) => (
                    <div key={stat.label} className="text-xs font-mono">
                      <div className="flex justify-between items-center text-cyber-subtext mb-1">
                        <span className="text-[11px]">{stat.label}</span>
                        <span className="font-bold text-cyber-cyan">{stat.displayValue}</span>
                      </div>
                      <div className="h-1.5 w-full bg-cyber-darker rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-green shadow-neon-cyan"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Area */}
              <div className="pt-3 border-t border-white/5">
                <div className="text-[10px] font-mono text-cyber-subtext tracking-widest uppercase mb-1.5">
                  TECH STACK
                </div>
                <div className="p-3 rounded-lg bg-cyber-darker/60 border border-white/5 font-mono text-xs text-cyber-cyan tracking-wide">
                  {PLAYER_INFO.techStack}
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
