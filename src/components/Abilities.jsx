import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Palette, Cpu, Gamepad2, Zap, Shield, Sparkles } from 'lucide-react';
import { ABILITIES } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export default function Abilities() {
  const iconMap = {
    Globe: Globe,
    Palette: Palette,
    Cpu: Cpu,
    Gamepad2: Gamepad2,
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>PLAYER LOADOUT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black hud-font-title tracking-tight text-white uppercase text-glow-cyan">
            ABILITIES
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cyber-subtext font-mono">
            Active character capabilities, technical disciplines & deployed engineering skills.
          </p>
        </div>

        {/* Abilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ABILITIES.map((ability, idx) => {
            const Icon = iconMap[ability.icon] || Zap;

            return (
              <motion.div
                key={ability.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => sound.playHover()}
                className="group relative bg-cyber-card/85 backdrop-blur-md rounded-xl border border-cyber-cyan/25 hover:border-cyber-cyan p-6 sm:p-7 hud-corner-box shadow-hud-card transition-all duration-300 hover:shadow-neon-cyan/25 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header & Slot */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan font-bold">
                      <span className="px-2 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30">
                        {ability.code}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] font-mono text-cyber-subtext">
                      <span>CD: <span className="text-white font-bold">{ability.cooldown}</span></span>
                      <span>PWR: <span className="text-cyber-green font-bold">{ability.energy}</span></span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3.5 rounded-lg bg-cyber-darker border border-cyber-cyan/40 text-cyber-cyan group-hover:border-cyber-cyan group-hover:scale-105 group-hover:shadow-neon-cyan transition-all shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black hud-font-title text-white group-hover:text-cyber-cyan transition-colors">
                        {ability.name}
                      </h3>
                      <p className="text-xs font-mono text-cyber-green mt-0.5">
                        ACTIVE SYSTEM CAPABILITY
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-cyber-subtext leading-relaxed font-normal mb-6">
                    “{ability.description}”
                  </p>
                </div>

                {/* Sub-Specialization Tags */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="text-[10px] font-mono text-cyber-subtext uppercase tracking-wider mb-2">
                    CORE PROFICIENCIES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {ability.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-cyber-darker border border-white/10 text-cyber-cyan font-mono text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
