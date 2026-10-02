import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Send, CheckCircle2, Github, Linkedin, 
  Mail, MessageSquare, Sparkles, User, AtSign 
} from 'lucide-react';
import { PLAYER_INFO } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';
import { fireAchievementConfetti } from '../utils/confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'START A PROJECT',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [transmitting, setTransmitting] = useState(false);

  const handlePresetSelect = (type) => {
    sound.playClick();
    if (type === 'project') {
      setFormData(prev => ({
        ...prev,
        subject: 'START A PROJECT',
        message: 'Hello Sreekar, I have a project/collaboration idea regarding web development or interactive AI applications...'
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        subject: 'CONTACT ME',
        message: 'Hi Sreekar, I would love to connect with you regarding...'
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sound.playClick();
    setTransmitting(true);

    setTimeout(() => {
      setTransmitting(false);
      setSubmitted(true);
      sound.playAchievement();
      fireAchievementConfetti();
    }, 1200);
  };

  const handleReset = () => {
    sound.playClick();
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: 'START A PROJECT',
      message: ''
    });
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyber-card border border-cyber-green/30 text-cyber-green font-mono text-xs tracking-widest uppercase mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>COMMUNICATION RELAY // [06]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black hud-font-title tracking-tight text-white uppercase text-glow-green">
            START A NEW QUEST
          </h2>
          <p className="mt-2 text-base sm:text-lg text-cyber-cyan font-mono">
            “Have an idea worth building?”
          </p>
        </div>

        {/* Quick Action Presets */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            type="button"
            onClick={() => handlePresetSelect('project')}
            onMouseEnter={() => sound.playHover()}
            className={`cyber-btn px-5 py-2.5 font-mono text-xs font-bold flex items-center gap-2 ${
              formData.subject === 'START A PROJECT'
                ? 'cyber-btn-solid'
                : 'cyber-btn-cyan'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>[ START A PROJECT ]</span>
          </button>

          <button
            type="button"
            onClick={() => handlePresetSelect('contact')}
            onMouseEnter={() => sound.playHover()}
            className={`cyber-btn px-5 py-2.5 font-mono text-xs font-bold flex items-center gap-2 ${
              formData.subject === 'CONTACT ME'
                ? 'cyber-btn-solid'
                : 'cyber-btn-cyan'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>[ CONTACT ME ]</span>
          </button>
        </div>

        {/* Main Terminal Form Container */}
        <div className="bg-cyber-card/90 backdrop-blur-md rounded-xl border border-cyber-cyan/30 overflow-hidden hud-corner-box shadow-hud-card">
          
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-cyber-darker border-b border-cyber-cyan/20">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-xs text-cyber-cyan font-bold tracking-wider">
                TRANSMISSION_TERMINAL_v2.4
              </span>
            </div>
            <span className="text-[10px] font-mono text-cyber-green flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
              PORT: 443 // ENCRYPTED
            </span>
          </div>

          <div className="p-6 sm:p-8">
            {submitted ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-cyber-green/10 border-2 border-cyber-green flex items-center justify-center shadow-neon-green">
                  <CheckCircle2 className="w-8 h-8 text-cyber-green animate-bounce" />
                </div>
                <h3 className="text-2xl font-black hud-font-title text-white tracking-wide">
                  TRANSMISSION SENT ✓
                </h3>
                <p className="text-sm font-mono text-cyber-cyan max-w-md">
                  [ACK_RECEIVED] Your message packet has been routed to Player's inbox queue. Stand by for response.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 cyber-btn cyber-btn-cyan px-6 py-2.5 font-mono text-xs font-bold"
                >
                  [ TRANSMIT ANOTHER PACKET ]
                </button>
              </motion.div>
            ) : (
              /* Input Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Player Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-cyber-cyan tracking-wider flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>PLAYER NAME / ALIAS *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Hunter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-cyber-darker/80 border border-white/15 focus:border-cyber-cyan rounded font-mono text-sm text-white placeholder-cyber-subtext/40 focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-cyber-cyan tracking-wider flex items-center gap-1.5">
                      <AtSign className="w-3.5 h-3.5" />
                      <span>TRANSMISSION EMAIL *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="player@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-cyber-darker/80 border border-white/15 focus:border-cyber-cyan rounded font-mono text-sm text-white placeholder-cyber-subtext/40 focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-cyber-cyan tracking-wider flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>TRANSMISSION PAYLOAD / MESSAGE *</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Input quest details, scope, or message coordinates..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-cyber-darker/80 border border-white/15 focus:border-cyber-cyan rounded font-mono text-sm text-white placeholder-cyber-subtext/40 focus:outline-none focus:ring-1 focus:ring-cyber-cyan transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={transmitting}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full cyber-btn cyber-btn-solid py-4 font-mono text-sm tracking-widest flex items-center justify-center gap-2 group shadow-neon-cyan disabled:opacity-50"
                >
                  {transmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>ENCRYPTING & TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      <span>[ SEND TRANSMISSION ]</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Direct Channels Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <a
            href={PLAYER_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-4 rounded-lg bg-cyber-card/70 border border-white/10 hover:border-cyber-cyan flex items-center gap-3 transition-colors group"
          >
            <Github className="w-5 h-5 text-cyber-cyan group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-[10px] font-mono text-cyber-subtext">REPOSITORIES</div>
              <div className="text-xs font-bold font-mono text-white group-hover:text-cyber-cyan">GitHub</div>
            </div>
          </a>

          <a
            href={PLAYER_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-4 rounded-lg bg-cyber-card/70 border border-white/10 hover:border-cyber-cyan flex items-center gap-3 transition-colors group"
          >
            <Linkedin className="w-5 h-5 text-cyber-cyan group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-[10px] font-mono text-cyber-subtext">PROFESSIONAL NETWORK</div>
              <div className="text-xs font-bold font-mono text-white group-hover:text-cyber-cyan">LinkedIn</div>
            </div>
          </a>

          <a
            href={`mailto:${PLAYER_INFO.socials.email}`}
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="p-4 rounded-lg bg-cyber-card/70 border border-white/10 hover:border-cyber-green flex items-center gap-3 transition-colors group"
          >
            <Mail className="w-5 h-5 text-cyber-green group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-[10px] font-mono text-cyber-subtext">DIRECT EMAIL</div>
              <div className="text-xs font-bold font-mono text-white group-hover:text-cyber-green truncate">
                {PLAYER_INFO.socials.email}
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
