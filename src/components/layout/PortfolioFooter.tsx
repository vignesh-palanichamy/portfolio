import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Heart, Mail, Phone, Send, Sparkles } from 'lucide-react';
import signatureImg from '@/assets/signature.png';
import { EarAccent } from '@/components/reactbits/OrganicBlob';
import { motion } from 'framer-motion';

export const PortfolioFooter: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmailInput('');
    }
  };

  return (
    <footer className="w-full relative mt-12 pb-10">
      {/* Curved organic container */}
      <div className="liquid-glass rounded-[32px] p-6 sm:p-8 relative overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
        {/* Corner ear accents — Aardvark signature */}
        <div className="absolute top-0 left-6 text-black/[0.04]">
          <EarAccent side="left" color="rgba(0,0,0,0.05)" />
        </div>
        <div className="absolute top-0 right-6 text-black/[0.04]">
          <EarAccent side="right" color="rgba(0,0,0,0.05)" />
        </div>

        {/* Top Header */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-[11px] font-mono text-gray-500 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Let's Collaborate
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
            Have an ambitious idea? Let's build it together.
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
            Specializing in interactive 3D web experiences, fluid animations, high-converting e-commerce, and scalable web apps.
          </p>
        </div>

        {/* Quick Email Form / Aardvark Newsletter microinteraction */}
        <div className="relative z-10 max-w-md mx-auto mb-8">
          <form onSubmit={handleSubscribe} className="relative flex items-center">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Your email address..."
              required
              className="w-full h-12 pl-4 pr-32 rounded-2xl bg-white/70 border border-black/[0.08] text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/20 transition-all backdrop-blur-md"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              className="group absolute right-1.5 h-9 px-4 rounded-xl bg-gray-900 text-white text-[11px] font-semibold flex items-center gap-1.5 overflow-hidden shadow-sm"
            >
              <span className="relative z-10 flex items-center gap-1">
                {subscribed ? 'Message Sent!' : 'Say Hello'}
                <Send size={12} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </motion.button>
          </form>
          {subscribed && (
            <p className="text-[11px] text-emerald-600 text-center mt-2 font-medium">
              Thank you! I'll get back to you promptly.
            </p>
          )}
        </div>

        {/* Direct Action Buttons */}
        <div className="relative z-10 grid grid-cols-2 gap-3 max-w-md mx-auto mb-8">
          <motion.a
            href="mailto:Vigneshpalanichamy.in@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center justify-center gap-2 h-11 rounded-xl border border-black/[0.08] bg-white/70 text-xs font-semibold text-gray-700 overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#00ecef]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <Mail size={14} className="relative z-10 text-gray-600 group-hover:text-gray-900" />
            <span className="relative z-10">Email Me</span>
          </motion.a>

          <motion.a
            href="tel:+916380068630"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center justify-center gap-2 h-11 rounded-xl border border-black/[0.08] bg-white/70 text-xs font-semibold text-gray-700 overflow-hidden"
          >
            <span className="absolute inset-0 bg-[#8dec7e]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <Phone size={14} className="relative z-10 text-gray-600 group-hover:text-gray-900" />
            <span className="relative z-10">+91 6380068630</span>
          </motion.a>
        </div>

        {/* Domain Capability Badges */}
        <div className="relative z-10 pt-6 border-t border-black/[0.05] flex flex-wrap items-center justify-center gap-2 mb-6">
          {[
            { label: 'E-Commerce & Shopify', color: '#ff9d00' },
            { label: 'Culture & EdTech', color: '#8dec7e' },
            { label: '3D WebGL & Three.js', color: '#00ecef' },
            { label: 'GSAP Animation', color: '#00e500' },
            { label: 'Figma to Code', color: '#3d3195' },
          ].map((pill) => (
            <span
              key={pill.label}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-black/[0.04] bg-white/60 text-gray-600 font-medium"
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 align-middle"
                style={{ backgroundColor: pill.color }}
              />
              {pill.label}
            </span>
          ))}
        </div>

        {/* Bottom Attribution & Time */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-black/[0.05] text-[11px] font-mono text-gray-400">
          <div className="flex items-center gap-3">
            <img
              src={signatureImg}
              alt="Vignesh stamp"
              className="h-6 w-auto object-contain opacity-40"
              style={{ filter: 'brightness(0)' }}
            />
            <span>© 2026 Vignesh Palanichamy</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Coimbatore, IN • {currentTime || 'IST'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
