import React from "react";
import { GridScan } from "@/components/reactbits/GridScan";
import { ScrollReveal } from "@/components/reactbits/ScrollReveal";
import { TextReveal3D } from "@/components/reactbits/TextReveal3D";
import { Sparkles, Eye } from "lucide-react";

export const GridScanSection: React.FC = () => {
  return (
    <section id="interactive-3d" className="w-full space-y-4">
      {/* Section Header */}
      <ScrollReveal yOffset={25} duration={0.5}>
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <TextReveal3D
              text="Interactive 3D WebGL"
              as="h2"
              className="text-2xl font-bold text-foreground tracking-tight"
            />
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-muted-foreground">
            <Sparkles className="w-3 h-3 text-purple-300" />
            <span>Three.js Shader</span>
          </div>
        </div>
      </ScrollReveal>

      {/* GridScan Interactive Canvas */}
      <ScrollReveal yOffset={40} duration={0.7} scale={0.96}>
        <div 
          style={{ width: "100%", height: "480px", position: "relative" }} 
          className="rounded-3xl overflow-hidden border border-white/10 liquid-glass shadow-2xl relative group cursor-crosshair"
        >
          <GridScan
            sensitivity={0.55}
            lineThickness={1}
            linesColor="#2F293A"
            gridScale={0.1}
            scanColor="#FF9FFC"
            scanOpacity={0.4}
            enablePost={true}
            bloomIntensity={0.6}
            chromaticAberration={0.002}
            noiseIntensity={0.01}
            lineJitter={0.1}
            scanGlow={0.5}
            scanSoftness={2}
            enableWebcam={false}
            showPreview={false}
            scanOnClick={true}
          />

          {/* Top HUD Badge */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-purple-300 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>Raymarched Grid • Postprocessing</span>
          </div>

          {/* Bottom HUD Hint */}
          <div className="absolute bottom-4 right-4 z-20 pointer-events-none flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-muted-foreground shadow-lg">
            <Eye className="w-3 h-3 text-purple-300" />
            <span>Move cursor to tilt & scan • Click to pulse</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default GridScanSection;
