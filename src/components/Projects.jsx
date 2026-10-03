import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Crosshair, ExternalLink, Github, ArrowUpRight, 
  Terminal, ShieldCheck, Sparkles, Layers 
} from 'lucide-react';
import { MISSIONS } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export default function Projects({ onSelectProject }) {
  const [filterCategory, setFilterCategory] = useState('ALL');

  const categories = ['ALL', 'AI & VISION', 'WEB PLATFORMS', 'CAMPUS & CLOUD'];

  const filteredMissions = MISSIONS.filter((m) => {
    if (filterCategory === 'ALL') return true;
    if (filterCategory === 'AI & VISION') return m.category.includes('AI') || m.category.includes('Satellite') || m.category.includes('Computer Vision') || m.category.includes('SATELLITE');
    if (filterCategory === 'WEB PLATFORMS') return m.category.includes('Auction') || m.category.includes('Web') || m.category.includes('PLATFORM') || m.category.includes('CLOUD');
    if (filterCategory === 'CAMPUS & CLOUD') return m.category.includes('CAMPUS') || m.category.includes('CLOUD') || m.category.includes('EDUCATION');
    return true;
  });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-3">
            <Crosshair className="w-3.5 h-3.5" />
            <span>OPERATIONAL LOGS // [{String(MISSIONS.length).padStart(2, '0')}]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black hud-font-title tracking-tight text-white uppercase text-glow-cyan">
            MISSIONS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cyber-cyan font-mono">
            “Projects completed in the field.”
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setFilterCategory(cat);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-4 py-1.5 rounded font-mono text-xs tracking-wider border transition-all duration-200 ${
                filterCategory === cat
                  ? 'bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan font-bold shadow-neon-cyan/40'
                  : 'bg-cyber-card border-white/10 text-cyber-subtext hover:text-white hover:border-white/20'
              }`}
            >
              [{cat}]
            </button>
          ))}
        </div>

        {/* Missions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMissions.map((mission, idx) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              data-cursor="mission"
              data-cursor-text="VIEW BRIEFING →"
              onClick={() => {
                if (mission.id === 'gesturesnap' && mission.liveUrl) {
                  sound.playClick();
                  window.open(mission.liveUrl, '_blank', 'noopener,noreferrer');
                } else {
                  sound.playWarp();
                  onSelectProject(mission);
                }
              }}
              className="group relative bg-cyber-card/85 backdrop-blur-md rounded-xl border border-cyber-cyan/20 hover:border-cyber-cyan p-5 sm:p-6 cursor-pointer hud-corner-box shadow-hud-card transition-all duration-300 hover:shadow-neon-cyan/30 flex flex-col justify-between"
            >
              {/* Mission Card Top Bar */}
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-black text-cyber-cyan px-2.5 py-0.5 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 group-hover:bg-cyber-cyan group-hover:text-black transition-colors">
                      MISSION {mission.missionNumber}
                    </span>
                    <span className="font-mono text-[10px] text-cyber-subtext tracking-widest hidden sm:inline uppercase">
                      {mission.codeName}
                    </span>
                  </div>

                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                    mission.statusColor === 'green' 
                      ? 'bg-cyber-green/10 border-cyber-green text-cyber-green' 
                      : mission.statusColor === 'yellow'
                        ? 'bg-cyber-yellow/10 border-cyber-yellow text-cyber-yellow'
                        : 'bg-cyber-cyan/10 border-cyber-cyan text-cyber-cyan'
                  }`}>
                    {mission.status}
                  </span>
                </div>

                {/* Project Image Frame */}
                <div className="relative rounded-lg overflow-hidden border border-white/10 group-hover:border-cyber-cyan/40 transition-colors mb-5 aspect-video bg-cyber-darker">
                  <img
                    src={mission.image}
                    alt={mission.title}
                    className="w-full h-full object-contain bg-black/40 object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 scanline-overlay opacity-30 pointer-events-none" />

                  {/* Badge pill on image */}
                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-cyber-cyan/30 text-[10px] font-mono font-semibold text-cyber-cyan">
                      {mission.badge}
                    </span>
                  </div>

                  {/* Hover Quick Action Indicator */}
                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-1.5 rounded-full bg-cyber-cyan text-black shadow-neon-cyan">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Category & Title */}
                <div className="space-y-1.5 mb-3">
                  <div className="text-[11px] font-mono text-cyber-green uppercase tracking-widest font-semibold">
                    {mission.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black hud-font-title text-white group-hover:text-cyber-cyan transition-colors">
                    {mission.id === 'gesturesnap' && mission.liveUrl ? (
                      <a
                        href={mission.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          sound.playClick();
                        }}
                        className="hover:text-cyber-cyan transition-colors"
                      >
                        {mission.title}
                      </a>
                    ) : (
                      mission.title
                    )}
                  </h3>
                </div>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-cyber-subtext leading-relaxed font-normal mb-5">
                  {mission.description}
                </p>
              </div>

              {/* Bottom Tech Chips & Action Controls */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {mission.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-cyber-darker border border-white/10 text-cyber-text font-mono text-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                  {mission.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-cyber-darker border border-white/10 text-cyber-subtext font-mono text-[10px]">
                      +{mission.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  {mission.id === 'gesturesnap' && mission.liveUrl ? (
                    <a
                      href={mission.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playClick();
                      }}
                      onMouseEnter={() => sound.playHover()}
                      className="cyber-btn cyber-btn-cyan px-4 py-2 font-mono text-xs font-bold flex items-center gap-1.5 w-full sm:w-auto justify-center"
                    >
                      <span>VIEW MISSION BRIEFING</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playWarp();
                        onSelectProject(mission);
                      }}
                      onMouseEnter={() => sound.playHover()}
                      className="cyber-btn cyber-btn-cyan px-4 py-2 font-mono text-xs font-bold flex items-center gap-1.5 w-full sm:w-auto justify-center"
                    >
                      <span>VIEW MISSION BRIEFING</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {mission.liveUrl && mission.liveUrl !== '#' && (
                    <a
                      href={mission.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playClick();
                      }}
                      onMouseEnter={() => sound.playHover()}
                      className="p-2 rounded bg-cyber-darker border border-white/10 text-cyber-subtext hover:text-cyber-green hover:border-cyber-green transition-colors"
                      title="Launch Deployment"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
