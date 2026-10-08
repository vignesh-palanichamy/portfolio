import { Phone, Mail } from 'lucide-react';
import signatureImg from '@/assets/signature.png';
import { ShinyText } from '@/components/reactbits/ShinyText';
import { motion, type Variants } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const ProfileCard = () => (
  <motion.div
    className="profile-panel liquid-glass rounded-[26px] p-6 flex flex-col"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Header: avatar + badge */}
    <motion.div variants={itemVariants} className="flex items-center justify-between gap-4 mb-6">
      <div className="w-[76px] h-[76px] rounded-2xl border border-black/[0.06] bg-gradient-to-br from-gray-50 to-gray-100 p-2.5 flex items-center justify-center shadow-sm">
        <img
          src={signatureImg}
          alt="Vignesh Palanichamy signature"
          className="w-full h-full object-contain opacity-50"
          style={{ filter: 'brightness(0)' }}
        />
      </div>
      {/* Pulsing availability badge */}
      <motion.span
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-[11px] font-medium"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Available for Roles
      </motion.span>
    </motion.div>

    {/* Title */}
    <motion.span variants={itemVariants} className="text-[10px] uppercase tracking-[.16em] font-mono text-gray-400">
      <ShinyText text="Full Stack Developer" speed={4} />
    </motion.span>

    {/* Name */}
    <motion.h1
      variants={itemVariants}
      className="text-[27px] font-semibold leading-tight tracking-tight mt-2 mb-3 text-gray-900"
    >
      Vignesh Palanichamy
    </motion.h1>

    {/* Bio */}
    <motion.p variants={itemVariants} className="text-sm text-gray-500 leading-7">
      I build fast, scalable, and user-friendly web applications using React.js, Next.js, Node.js,
      and MongoDB, alongside interactive 3D web experiences with Three.js and WebGL.
    </motion.p>

    {/* Stamp divider */}
    <motion.div
      variants={itemVariants}
      className="mt-5 mb-5 pt-4 border-t border-black/[0.06] flex items-center justify-between"
    >
      <span className="text-[9px] font-mono text-gray-400 uppercase tracking-[.15em]">Personal Stamp</span>
      <img src={signatureImg} alt="" className="h-7 w-auto object-contain opacity-50" style={{ filter: 'brightness(0)' }} />
    </motion.div>

    {/* CTA Buttons — Aardvark fill-reveal microinteraction */}
    <motion.div variants={itemVariants} className="profile-actions grid grid-cols-2 gap-3">
      {[
        { href: 'tel:+916380068630', icon: <Phone size={14} />, label: 'Call me' },
        { href: 'mailto:Vigneshpalanichamy.in@gmail.com', icon: <Mail size={14} />, label: 'Get in touch' },
      ].map(({ href, icon, label }) => (
        <motion.a
          key={label}
          href={href}
          className="group relative flex items-center justify-center gap-2 min-h-[44px] border border-black/[0.08] rounded-xl bg-white/80 text-[11px] font-semibold text-gray-700 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Fill sweep on hover */}
          <span className="absolute inset-0 bg-gray-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
            {icon}
            {label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  </motion.div>
);
