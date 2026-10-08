import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Engineering Lead",
    title: "Project Mentor",
    company: "Fusion Space",
    quote: "Vignesh's curiosity and ability to work with emerging technologies like Three.js and WebGL alongside robust Node.js backend APIs is remarkable. He consistently turns complex requirements into smooth, engaging digital experiences.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    tag: "3D & Full Stack"
  },
  {
    id: 2,
    name: "Senior Architect",
    title: "Engineering Team",
    company: "NextOneSolution",
    quote: "Working with Vignesh was fantastic. During his tenure, he developed and deployed production-grade React and Next.js applications with MongoDB, focusing on speed, clean architecture, and responsive user experiences.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    tag: "Next.js & Production Systems"
  },
  {
    id: 3,
    name: "Technical Director",
    title: "Client Delivery",
    company: "The Reciprocal Solutions",
    quote: "Vignesh proved himself as a proactive software engineer. He quickly adopted best practices in component design, state management, and Git workflows, contributing significantly to client project milestones.",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
    tag: "Client Success"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <div className="liquid-glass rounded-[26px] p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3.5">
          <img 
            src={current.avatar} 
            alt={current.name}
            className="w-11 h-11 rounded-full object-cover border border-black/[0.08] shadow-sm"
          />
          <div>
            <h4 className="text-base font-semibold text-gray-900">{current.name}</h4>
            <p className="text-xs text-gray-500">{current.title} • {current.company}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
          <span className="text-[10px] font-mono font-bold text-amber-700">5.0</span>
        </div>
      </div>
      
      {/* Animated quote change */}
      <div className="min-h-[90px] relative mb-5">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3 }}
            className="text-gray-600 text-xs sm:text-[13px] leading-relaxed italic"
          >
            "{current.quote}"
          </motion.blockquote>
        </AnimatePresence>
      </div>
      
      {/* Footer Navigation & Badge */}
      <div className="flex items-center justify-between pt-3 border-t border-black/[0.05]">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-gray-400">
            {currentIndex + 1} / {testimonials.length}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/[0.04] text-gray-500">
            {current.tag}
          </span>
        </div>

        {/* Aardvark-style button controls */}
        <div className="flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={previousTestimonial}
            className="w-8 h-8 rounded-full border border-black/[0.08] bg-white/80 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={nextTestimonial}
            className="w-8 h-8 rounded-full border border-black/[0.08] bg-white/80 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};