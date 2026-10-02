import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        const text = target.getAttribute('data-cursor-text') || '';
        setCursorType(type);
        setCursorText(text);
      } else if (e.target.closest('button, a, input, textarea, select, [role="button"]')) {
        setCursorType('pointer');
        setCursorText('');
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMouse);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isMission = cursorType === 'mission';
  const isPointer = cursorType === 'pointer' || isMission;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Tiny Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyber-cyan shadow-neon-cyan"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 0.6 : 1
        }}
        transition={{ type: "spring", damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Trailing Lag Ring / HUD Reticle */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full border ${
          isMission 
            ? 'border-cyber-green bg-cyber-card/85 text-cyber-green px-3 py-1.5' 
            : isPointer 
              ? 'border-cyber-cyan bg-cyber-cyan/10 shadow-neon-cyan' 
              : 'border-cyber-cyan/35'
        }`}
        animate={{
          x: isMission ? mousePosition.x - 70 : mousePosition.y ? mousePosition.x - (isPointer ? 22 : 14) : 0,
          y: isMission ? mousePosition.y - 18 : mousePosition.y ? mousePosition.y - (isPointer ? 22 : 14) : 0,
          width: isMission ? 140 : isPointer ? 44 : 28,
          height: isMission ? 36 : isPointer ? 44 : 28,
        }}
        transition={{ type: "spring", damping: 24, stiffness: 280, mass: 0.2 }}
      >
        {isMission ? (
          <span className="font-mono text-[10px] tracking-wider uppercase font-bold text-cyber-green whitespace-nowrap">
            {cursorText || 'VIEW MISSION →'}
          </span>
        ) : (
          <span className="w-1 h-1 rounded-full bg-cyber-cyan/40" />
        )}
      </motion.div>
    </div>
  );
}
