import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import HeroBackground from './components/HeroBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillTree from './components/SkillTree';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Achievements from './components/Achievements';
import JourneyTimeline from './components/JourneyTimeline';
import Abilities from './components/Abilities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EasterEggModal from './components/EasterEggModal';
import { sound } from './utils/soundEffects';

export default function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Easter Egg State
  const [easterEggOpen, setEasterEggOpen] = useState(false);
  const [easterEggType, setEasterEggType] = useState('konami');
  const [playerClickCount, setPlayerClickCount] = useState(0);

  // Stable callback for automatic intro completion
  const handleIntroComplete = useCallback(() => {
    setShowPortfolio(true);
  }, []);

  // Konami Code Sequence: Up Up Down Down Left Right Left Right
  useEffect(() => {
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 
      'ArrowDown', 'ArrowDown', 
      'ArrowLeft', 'ArrowRight', 
      'ArrowLeft', 'ArrowRight'
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiSequence[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          konamiIndex = 0;
          setEasterEggType('konami');
          setEasterEggOpen(true);
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Section Observer for HUD Navbar
  useEffect(() => {
    if (!showPortfolio) return;

    const sectionIds = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sectionIds[i]);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPortfolio]);

  const handleToggleSound = () => {
    const enabled = sound.toggle();
    setSoundEnabled(enabled);
  };

  const handlePlayerClick = () => {
    sound.playClick();
    const newCount = playerClickCount + 1;
    setPlayerClickCount(newCount);
    if (newCount >= 5) {
      setPlayerClickCount(0);
      setEasterEggType('click');
      setEasterEggOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-cyber-darker text-cyber-text relative selection:bg-cyber-cyan selection:text-black">
      {/* Custom Sci-Fi Cursor */}
      <CustomCursor />

      {/* PHASE 1: Standalone LoadingScreen (Self-contained automatic transition) */}
      {!showPortfolio && (
        <LoadingScreen onLoaded={handleIntroComplete} />
      )}

      {/* Interactive 60fps Dynamic Canvas Background */}
      <HeroBackground />

      {/* PHASE 2: Main Portfolio System (Reveals ONLY AFTER Intro has finished) */}
      {showPortfolio && (
        <motion.div
          key="portfolio-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Futuristic HUD Navbar */}
          <Navbar
            activeSection={activeSection}
            soundEnabled={soundEnabled}
            onToggleSound={handleToggleSound}
            onCheatCodeTrigger={() => {
              setEasterEggType('click');
              setEasterEggOpen(true);
            }}
            playerClickCount={playerClickCount}
            onPlayerClick={handlePlayerClick}
          />

          {/* Main Game Flow Sections */}
          <main className="relative z-10">
            <Hero
              onEnterPortfolio={() => {
                const elem = document.getElementById('about');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              onViewProjects={() => {
                const elem = document.getElementById('projects');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <About />

            <SkillTree />

            <Projects onSelectProject={(project) => setSelectedProject(project)} />

            <Achievements />

            <JourneyTimeline />

            <Abilities />

            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </motion.div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Easter Egg / Cheat Mode Modal */}
      <EasterEggModal
        isOpen={easterEggOpen}
        onClose={() => setEasterEggOpen(false)}
        triggerType={easterEggType}
      />
    </div>
  );
}
