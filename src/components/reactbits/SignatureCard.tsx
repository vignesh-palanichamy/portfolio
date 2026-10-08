import React from 'react';
import { SpotlightCard } from './SpotlightCard';
import { ShinyText } from './ShinyText';
import signatureImg from '@/assets/signature.png';
import { ShieldCheck, PenTool } from 'lucide-react';

export const SignatureCard: React.FC = () => {
  return (
    <SpotlightCard
      spotlightColor="rgba(255,255,255,0.50)"
      className="liquid-glass rounded-[26px] p-6 group shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-white/50 border border-white/50 backdrop-blur-[50px] flex items-center justify-center text-gray-600">
            <PenTool className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-gray-400">Official Signature</h4>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[10px] font-mono">
          <ShieldCheck className="w-3 h-3" />
          <span>Verified Author</span>
        </div>
      </div>
      {/* Signature Display Area - 50% glass */}
      <div className="relative py-4 px-2 flex items-center justify-center min-h-[110px] bg-white/50 backdrop-blur-[50px] rounded-2xl border border-white/50 overflow-hidden group-hover:border-white/70 transition-all">
        <img
          src={signatureImg}
          alt="Vignesh Palanichamy Hand-drawn Signature"
          className="max-h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300 select-none opacity-50"
          style={{ filter: 'brightness(0)' }}
        />
      </div>
      {/* Signature Attribution */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-black/[0.05]">
        <div>
          <span className="text-xs font-semibold text-gray-900 block">
            <ShinyText text="Vignesh Palanichamy" speed={3} />
          </span>
          <span className="text-[10px] text-gray-400 font-mono">Full Stack Developer • Coimbatore, India</span>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-gray-400 font-mono block">Personal Endorsement</span>
          <span className="text-[10px] text-gray-500 font-mono">Crafted with Passion</span>
        </div>
      </div>
    </SpotlightCard>
  );
};
