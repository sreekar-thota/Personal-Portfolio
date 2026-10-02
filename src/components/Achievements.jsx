import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Zap, Gamepad2, Code2, Rocket, 
  CheckCircle2, Sparkles, Award, Star 
} from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';
import { fireAchievementConfetti } from '../utils/confetti';

export default function Achievements() {
  const [unlockedCount, setUnlockedCount] = useState(ACHIEVEMENTS.length);

  const iconMap = {
    Trophy: Trophy,
    Zap: Zap,
    Gamepad2: Gamepad2,
    Code2: Code2,
    Rocket: Rocket,
  };

  const handleCardClick = (ach) => {
    sound.playAchievement();
    fireAchievementConfetti();
  };

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-card border border-cyber-yellow/40 text-cyber-yellow font-mono text-xs tracking-widest uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>TROPHY CASE // [05]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black hud-font-title tracking-tight text-white uppercase text-glow-yellow">
            ACHIEVEMENTS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cyber-subtext font-mono">
            Key field milestones, hackathon participation & verified developer accolades.
          </p>
        </div>

        {/* Achievements Counter HUD Ribbon */}
        <div className="mb-10 p-4 rounded-xl bg-cyber-card/80 border border-cyber-cyan/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-cyber-darker border border-cyber-green text-cyber-green">
              <Award className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-cyber-subtext uppercase tracking-wider">
                TOTAL ACHIEVEMENTS UNLOCKED
              </div>
              <div className="text-base font-black font-mono text-white">
                {unlockedCount} / {ACHIEVEMENTS.length} COMPLETE (100%)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-cyber-yellow">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold">+5,900 TOTAL DEV XP ACCUMULATED</span>
          </div>
        </div>

        {/* Achievement Notification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => {
            const Icon = iconMap[ach.icon] || Trophy;

            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => handleCardClick(ach)}
                onMouseEnter={() => sound.playHover()}
                className="group relative bg-cyber-card/80 hover:bg-cyber-card rounded-xl border border-cyber-yellow/20 hover:border-cyber-yellow p-5 cursor-pointer hud-corner-box shadow-hud-card transition-all duration-300 hover:shadow-neon-yellow/25 flex flex-col justify-between"
              >
                {/* Top Unlock Banner */}
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <span className="text-[10px] font-mono font-black text-cyber-yellow tracking-widest flex items-center gap-1.5">
                      <Star className="w-3 h-3 fill-cyber-yellow text-cyber-yellow" />
                      ACHIEVEMENT UNLOCKED
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyber-yellow/10 border border-cyber-yellow/30 text-cyber-yellow">
                      {ach.xp}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="p-3 rounded-lg bg-cyber-darker border border-cyber-yellow/40 text-cyber-yellow group-hover:scale-110 group-hover:border-cyber-yellow transition-all duration-300 shrink-0 shadow-neon-yellow/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-cyber-subtext uppercase">
                        {ach.event}
                      </div>
                      <h3 className="text-base font-black hud-font-title text-white group-hover:text-cyber-yellow transition-colors leading-snug">
                        {ach.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-cyber-subtext leading-relaxed font-normal mt-2">
                    {ach.description}
                  </p>
                </div>

                {/* Bottom Verification Checkmark */}
                <div className="pt-4 border-t border-white/10 mt-5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-cyber-green flex items-center gap-1 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyber-green" />
                    VERIFIED // TIER: {ach.tier}
                  </span>
                  <span className="text-cyber-subtext/60 group-hover:text-cyber-yellow transition-colors">
                    [CLICK TO CELEBRATE]
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
