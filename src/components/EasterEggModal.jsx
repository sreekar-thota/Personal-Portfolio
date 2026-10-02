import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Trophy, Gamepad2, Play, RefreshCw, Zap } from 'lucide-react';
import { sound } from '../utils/soundEffects';
import { fireEasterEggConfetti } from '../utils/confetti';

export default function EasterEggModal({ isOpen, onClose, triggerType }) {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const canvasRef = useRef(null);
  const stateRef = useRef({
    playerX: 150,
    lasers: [],
    targets: [],
    keys: {},
    lastSpawn: 0,
    animationId: null
  });

  useEffect(() => {
    if (isOpen) {
      sound.playAchievement();
      fireEasterEggConfetti();
    }
  }, [isOpen]);

  // Mini arcade game loop
  const startGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    sound.playWarp();

    const state = stateRef.current;
    state.playerX = 175;
    state.lasers = [];
    state.targets = [];
    state.lastSpawn = Date.now();

    const handleKeyDown = (e) => {
      state.keys[e.code] = true;
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        // Fire laser
        state.lasers.push({ x: state.playerX + 15, y: 260, vy: -7 });
        sound.playBeep(900, 0.05, 'triangle', 0.08);
      }
    };

    const handleKeyUp = (e) => {
      state.keys[e.code] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const update = () => {
      // Movement
      if (state.keys['ArrowLeft'] || state.keys['KeyA']) {
        state.playerX = Math.max(10, state.playerX - 5);
      }
      if (state.keys['ArrowRight'] || state.keys['KeyD']) {
        state.playerX = Math.min(320, state.playerX + 5);
      }

      // Spawn target bugs
      if (Date.now() - state.lastSpawn > 900) {
        state.targets.push({
          x: Math.random() * 300 + 20,
          y: -10,
          vy: Math.random() * 1.5 + 1.2,
          radius: 12,
          color: Math.random() > 0.5 ? '#00FF9D' : '#FF0055'
        });
        state.lastSpawn = Date.now();
      }

      // Update lasers
      state.lasers.forEach(l => l.y += l.vy);
      state.lasers = state.lasers.filter(l => l.y > -20);

      // Update targets
      state.targets.forEach(t => t.y += t.vy);

      // Check laser hits
      state.lasers.forEach((l, lIdx) => {
        state.targets.forEach((t, tIdx) => {
          const dist = Math.hypot(l.x - t.x, l.y - t.y);
          if (dist < t.radius + 6) {
            // Hit!
            state.lasers.splice(lIdx, 1);
            state.targets.splice(tIdx, 1);
            setScore(s => s + 100);
            sound.playBeep(1200, 0.08, 'sine', 0.1);
          }
        });
      });

      // Check game over
      const breached = state.targets.some(t => t.y > 280);
      if (breached) {
        setGameOver(true);
        setIsPlaying(false);
        sound.playBeep(220, 0.3, 'sawtooth', 0.2);
        return;
      }

      // Render frame
      ctx.clearRect(0, 0, 360, 300);

      // Draw background grid
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < 360; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 300);
        ctx.stroke();
      }

      // Draw player cannon
      ctx.fillStyle = '#00F0FF';
      ctx.shadowColor = '#00F0FF';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.moveTo(state.playerX + 15, 260);
      ctx.lineTo(state.playerX + 30, 285);
      ctx.lineTo(state.playerX, 285);
      ctx.closePath();
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw lasers
      ctx.fillStyle = '#00FF9D';
      ctx.shadowColor = '#00FF9D';
      ctx.shadowBlur = 8;
      state.lasers.forEach(l => {
        ctx.fillRect(l.x - 2, l.y, 4, 10);
      });
      ctx.shadowBlur = 0;

      // Draw targets
      state.targets.forEach(t => {
        ctx.fillStyle = t.color;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      state.animationId = requestAnimationFrame(update);
    };

    state.animationId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      cancelAnimationFrame(state.animationId);
    };
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-lg bg-cyber-darker border-2 border-cyber-yellow rounded-xl overflow-hidden p-6 shadow-neon-yellow hud-corner-box text-center"
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClose();
            onClose();
          }}
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-cyber-card text-cyber-subtext hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-yellow/10 border border-cyber-yellow/40 text-cyber-yellow font-mono text-xs font-bold uppercase mb-3">
          <Sparkles className="w-4 h-4 animate-spin" />
          <span>SECRET PROTOCOL UNLOCKED</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black hud-font-title text-white">
          CHEAT CODE ACTIVATED!
        </h3>
        <p className="text-xs font-mono text-cyber-cyan mt-1">
          {triggerType === 'konami' ? 'KONAMI CODE SEQUENCE CONFIRMED (↑ ↑ ↓ ↓ ← → ← →)' : 'PLAYER MULTI-TAP CONFIRMED'}
        </p>

        {/* Mini Arcade Screen */}
        <div className="my-5 p-3 rounded-xl bg-cyber-card border border-cyber-cyan/30 flex flex-col items-center">
          <div className="w-full flex justify-between items-center text-xs font-mono text-cyber-subtext px-2 pb-2 border-b border-white/10 mb-2">
            <span>ARCADE: CYBER DEFENDER</span>
            <span className="text-cyber-green font-bold">SCORE: {score} XP</span>
          </div>

          <div className="relative w-[360px] max-w-full h-[300px] bg-black rounded border border-cyber-cyan/20 overflow-hidden flex items-center justify-center">
            <canvas ref={canvasRef} width={360} height={300} className="w-full h-full block" />

            {!isPlaying && !gameOver && (
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4">
                <Gamepad2 className="w-12 h-12 text-cyber-cyan mb-2" />
                <p className="text-xs font-mono text-white mb-4">
                  Controls: [A / D] or [← / →] to Move, [SPACEBAR] to Fire
                </p>
                <button
                  onClick={startGame}
                  className="cyber-btn cyber-btn-solid px-6 py-2.5 font-mono text-xs font-bold"
                >
                  START MINI GAME
                </button>
              </div>
            )}

            {gameOver && (
              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4">
                <p className="text-base font-black font-mono text-red-400 mb-1">SYSTEM BREACHED!</p>
                <p className="text-xs font-mono text-cyber-yellow mb-4">FINAL SCORE: {score} XP</p>
                <button
                  onClick={startGame}
                  className="cyber-btn cyber-btn-cyan px-5 py-2 font-mono text-xs font-bold flex items-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>PLAY AGAIN</span>
                </button>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => {
            sound.playClose();
            onClose();
          }}
          className="cyber-btn cyber-btn-cyan px-6 py-2 font-mono text-xs font-bold"
        >
          DISMISS PROTOCOL
        </button>
      </motion.div>
    </div>
  );
}
