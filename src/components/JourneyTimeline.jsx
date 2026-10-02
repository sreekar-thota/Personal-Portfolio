import React from 'react';
import { motion } from 'framer-motion';
import { Milestone, Flag, CheckCircle, ChevronDown, Sparkles, Navigation } from 'lucide-react';
import { PLAYER_JOURNEY } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export default function JourneyTimeline() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-card border border-cyber-green/30 text-cyber-green font-mono text-xs tracking-widest uppercase mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>PROGRESSION MAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black hud-font-title tracking-tight text-white uppercase text-glow-green">
            PLAYER JOURNEY
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cyber-subtext font-mono">
            Chronological campaign progression checkpoints & leveling milestones.
          </p>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative">
          
          {/* Glowing Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 sm:-translate-x-1/2 bg-gradient-to-b from-cyber-cyan via-cyber-green to-cyber-yellow shadow-neon-cyan opacity-40" />

          <div className="space-y-10 sm:space-y-12">
            {PLAYER_JOURNEY.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  onMouseEnter={() => sound.playHover()}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-12 pl-12 sm:pl-0`}
                >
                  
                  {/* Central Node Checkpoint Marker */}
                  <div className="absolute left-4 sm:left-1/2 top-4 -translate-x-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-cyber-darker border-2 border-cyber-green flex items-center justify-center shadow-neon-green/40 group-hover:scale-125 transition-transform">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyber-green animate-pulse" />
                    </div>
                  </div>

                  {/* Content Card Box */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="bg-cyber-card/85 backdrop-blur-md p-5 rounded-xl border border-white/10 hover:border-cyber-green/50 hud-corner-box shadow-hud-card transition-all duration-300 group">
                      
                      {/* Badge & Step */}
                      <div className={`flex items-center gap-2 mb-2 font-mono text-xs ${
                        isEven ? 'sm:justify-end' : 'sm:justify-start'
                      }`}>
                        <span className="px-2 py-0.5 rounded bg-cyber-green/10 border border-cyber-green/30 text-cyber-green font-bold">
                          {item.badge}
                        </span>
                        <span className="text-cyber-subtext font-semibold">
                          CHECKPOINT #{item.step}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-black hud-font-title text-white group-hover:text-cyber-green transition-colors">
                        {item.title}
                      </h3>

                      {/* Subtitle */}
                      <div className="text-xs font-mono text-cyber-cyan mb-2">
                        {item.subtitle}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-cyber-subtext leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
