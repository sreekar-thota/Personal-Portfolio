import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Boxes, Globe, Code2, Cpu, Gamepad2, Wrench, Palette, 
  Sparkles, CheckCircle2, ChevronRight, Zap, Target, Search
} from 'lucide-react';
import { SKILL_CATEGORIES, SKILL_NODES } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

export default function SkillTree() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(SKILL_NODES[0]);
  const [hoveredSkillId, setHoveredSkillId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = SKILL_NODES.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'EXPERIENCED':
        return 'bg-cyber-green/15 border-cyber-green text-cyber-green shadow-neon-green/30';
      case 'BUILDING':
        return 'bg-cyber-cyan/15 border-cyber-cyan text-cyber-cyan shadow-neon-cyan/30';
      case 'LEARNING':
        return 'bg-cyber-yellow/15 border-cyber-yellow text-cyber-yellow shadow-neon-yellow/30';
      case 'EXPLORING':
        return 'bg-purple-500/15 border-purple-400 text-purple-300';
      default:
        return 'bg-cyber-card border-white/20 text-white';
    }
  };

  const activeHoverOrSelected = hoveredSkillId 
    ? SKILL_NODES.find(s => s.id === hoveredSkillId) || selectedSkill 
    : selectedSkill;

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-card border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs tracking-widest uppercase mb-3">
            <Boxes className="w-3.5 h-3.5" />
            <span>PROGRESSION MATRIX // [03]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black hud-font-title tracking-tight text-white uppercase text-glow-cyan">
            SKILL TREE
          </h2>
          <p className="mt-2 text-sm sm:text-base text-cyber-subtext font-mono max-w-xl">
            Modular node graph mapping competencies, framework proficiencies & tech disciplines.
          </p>
        </div>

        {/* Top Control Bar: Category Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {SKILL_CATEGORIES.map((cat) => {
              const isCatActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveCategory(cat.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-3 py-1.5 rounded font-mono text-xs tracking-wider border transition-all duration-200 flex items-center gap-1.5 ${
                    isCatActive 
                      ? 'bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan font-bold shadow-neon-cyan/40' 
                      : 'bg-cyber-card/70 border-white/5 text-cyber-subtext hover:text-white hover:border-white/20'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-cyber-cyan" />
            <input
              type="text"
              placeholder="SEARCH NODE MATRIX..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-cyber-darker/90 border border-cyber-cyan/20 rounded font-mono text-xs text-white placeholder-cyber-subtext/50 focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan"
            />
          </div>
        </div>

        {/* Skill Tree Matrix Layout: Nodes Grid on Left, Inspector HUD on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main: Connected Nodes Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {filteredSkills.map((node) => {
                const isSelected = selectedSkill.id === node.id;
                const isHovered = hoveredSkillId === node.id;
                const isConnected = activeHoverOrSelected.connections.includes(node.id) || 
                                    node.connections.includes(activeHoverOrSelected.id);

                return (
                  <motion.div
                    key={node.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    onClick={() => {
                      sound.playClick();
                      setSelectedSkill(node);
                    }}
                    onMouseEnter={() => {
                      sound.playHover();
                      setHoveredSkillId(node.id);
                    }}
                    onMouseLeave={() => setHoveredSkillId(null)}
                    className={`relative p-4 rounded-lg cursor-pointer border transition-all duration-300 select-none ${
                      isSelected || isHovered
                        ? 'bg-cyber-card/95 border-cyber-cyan shadow-neon-cyan transform -translate-y-1'
                        : isConnected
                          ? 'bg-cyber-card/80 border-cyber-green/60 shadow-neon-green/20'
                          : 'bg-cyber-card/50 border-white/5 hover:border-white/20'
                    }`}
                  >
                    {/* Node Corner Bracket */}
                    <div className={`absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 ${
                      isSelected ? 'border-cyber-cyan' : isConnected ? 'border-cyber-green' : 'border-white/20'
                    }`} />

                    {/* Top Level Category & Tier */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-cyber-subtext mb-2">
                      <span className="uppercase tracking-widest text-cyber-cyan/80">
                        {node.category}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-black/40 border border-white/10 text-white font-semibold">
                        {node.xp}
                      </span>
                    </div>

                    {/* Skill Title */}
                    <h3 className="text-sm sm:text-base font-bold text-white hud-font-title tracking-wide mb-3 flex items-center gap-1.5">
                      {node.name}
                    </h3>

                    {/* Proficiency Status Badge */}
                    <div className="flex items-center justify-between mt-auto">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${getLevelBadgeClass(node.level)}`}>
                        {node.level}
                      </span>
                      {isConnected && !isSelected && (
                        <span className="text-[9px] font-mono text-cyber-green flex items-center gap-1">
                          <Zap className="w-2.5 h-2.5" /> LINKED
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Node Inspector HUD Panel */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-cyber-card/90 backdrop-blur-md rounded-xl border border-cyber-cyan/30 p-6 hud-corner-box shadow-hud-card">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-cyber-cyan">
                  <Target className="w-4 h-4 text-cyber-cyan animate-pulse" />
                  <span>NODE INSPECTOR</span>
                </div>
                <span className="text-[10px] font-mono text-cyber-green bg-cyber-green/10 border border-cyber-green/30 px-2 py-0.5 rounded font-bold">
                  TELEMETRY: ACTIVE
                </span>
              </div>

              <div className="mt-5 space-y-4">
                
                {/* Selected Node Details */}
                <div>
                  <div className="text-[10px] font-mono text-cyber-subtext uppercase tracking-widest">
                    DISCIPLINE / CATEGORY
                  </div>
                  <div className="text-xs font-mono text-cyber-cyan font-bold uppercase mt-0.5">
                    {activeHoverOrSelected.category}
                  </div>
                  <h4 className="text-2xl font-black hud-font-title text-white mt-1">
                    {activeHoverOrSelected.name}
                  </h4>
                </div>

                {/* Level Spec */}
                <div className="p-3 rounded-lg bg-cyber-darker border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-cyber-subtext">PROFICIENCY TIER:</span>
                  <span className={`text-xs font-mono font-black px-2.5 py-1 rounded border ${getLevelBadgeClass(activeHoverOrSelected.level)}`}>
                    {activeHoverOrSelected.level}
                  </span>
                </div>

                {/* Description */}
                <div>
                  <div className="text-[10px] font-mono text-cyber-subtext uppercase tracking-widest mb-1">
                    NODE CAPABILITIES & APPLICATION
                  </div>
                  <p className="text-xs sm:text-sm text-cyber-text leading-relaxed font-normal bg-cyber-darker/60 p-3 rounded border border-white/5">
                    {activeHoverOrSelected.description}
                  </p>
                </div>

                {/* Connected Sub-Nodes */}
                <div>
                  <div className="text-[10px] font-mono text-cyber-subtext uppercase tracking-widest mb-2">
                    CIRCUIT SYNAPSE LINKS ({activeHoverOrSelected.connections.length})
                  </div>
                  {activeHoverOrSelected.connections.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {activeHoverOrSelected.connections.map((connId) => {
                        const target = SKILL_NODES.find(s => s.id === connId);
                        if (!target) return null;
                        return (
                          <button
                            key={connId}
                            onClick={() => {
                              sound.playClick();
                              setSelectedSkill(target);
                            }}
                            className="px-2 py-1 rounded bg-cyber-darker border border-cyber-green/40 hover:border-cyber-green text-cyber-green font-mono text-[11px] flex items-center gap-1 transition-colors"
                          >
                            <span>{target.name}</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <span className="text-xs font-mono text-cyber-subtext/60 italic">
                      Standalone Core Discipline
                    </span>
                  )}
                </div>

                {/* Interactive Action Prompt */}
                <div className="pt-2 text-[11px] font-mono text-cyber-cyan/60 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyber-cyan" />
                  <span>Hover or click any node in the matrix to inspect</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
